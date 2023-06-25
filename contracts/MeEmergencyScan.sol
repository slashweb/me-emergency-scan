// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract MeEmergencyScan {

    struct ParamedicData {
        address patien;
        string name;
        string date;
        string vitalSigns;
        string status;
        string[] drugs;
        string[] procedures;
        string lastMeal;
    }

    struct UserRecord {
        string name;
        string bloodType;
        string emergencyPhone;
        string emergencyName;
        string[] alergies;
        string[] cronichConditions;
        string[] surgeries;
        string[] drugs;
    }

    struct MedicalHistory {
        address patien;
        string[] chronicDiseases;
        string[] surgeries;
        string[] pathologicalHistory;
        string[] nonPathologicalHistory;
        string[] paternalFamilyInheritedPathologies;
        string[] martenalFamilyInheritedPathologies;
    }


    struct User {
        address wallet;
        string userType;
        UserRecord record;
    }


    struct Doctor {
        address wallet;
        string name;
        bool isActive;
        // TODO Rating and another kind of stuffs in
        // this structure
    }


    // General users for the plattform
    User[] public Users;
    MedicalHistory[] public MedicalHistories;
    ParamedicData[] public ParamedicDatas;

    // Basic data for the users
    UserRecord public newUserRecord;


    // Doctors for the contract
    Doctor[] Doctors;

    function compareStrings(string memory a, string memory b) public pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    // Get User Medical History
    function getUserHistory(address wallet) public view returns (MedicalHistory memory) {
        for (uint256 i=0; i < MedicalHistories.length; i++) {
            if (MedicalHistories[i].patien == wallet) {
                return MedicalHistories[i];
            }
        }

        MedicalHistory memory empty;
        return empty;
    }

    // Get Actual profile of the user
    function getUserRecord(address wallet) public view returns (User memory) {
        for (uint256 i=0; i < Users.length; i++) {
            if (Users[i].wallet == wallet) {
                return Users[i];
            }
        }

        User memory empty;
        return empty;
    }

    // Tells if a doctor exists
    function doctorExists(address wallet) public view returns (bool) {
        for (uint256 i=0; i < Doctors.length; i++) {
            if (Doctors[i].wallet == wallet && Doctors[i].isActive) {
                return true;
            }
        }
        return false;
    }

    // Get doctor profile
    function getDoctorData(address wallet) public view returns (Doctor memory) {
        for (uint256 i=0; i < Doctors.length; i++) {
            if (Doctors[i].wallet == wallet) {
                return Doctors[i];
            }
        }

        Doctor memory empty;
        return empty;
    }

    // Get All users records just for testing purpose
    function getAllUserRecords() public view returns (User[] memory) {
        return Users;
    }

    function getLastParamedicalData(address wallet) public view returns (ParamedicData memory) {
        for (uint256 i=ParamedicDatas.length -1; i >= 0; i--) {
            if (ParamedicDatas[i].patien == wallet) {
                return ParamedicDatas[i];
            }
        }

        ParamedicData memory empty;
        return empty;
    }

    function createNewParamedicData(
        address patien,
        string memory name,
        string memory date,
        string memory vitalSigns,
        string memory status,
        string[] memory drugs,
        string[] memory procedures,
        string memory lastMeal
    ) public returns(bool) {


        ParamedicDatas.push(
            ParamedicData(
                patien,
                name,
                date,
                vitalSigns,
                status,
                drugs,
                procedures,
                lastMeal
            )
        );

        return true;
    }

    // Create basic new User Profile
    function createUserProfile(
        string memory name,
        string memory bloodType,
        string memory emergencyPhone,
        string memory emergencyName,
        string[] memory alergies,
        string[] memory cronichConditions,
        string[] memory surgeries,
        string[] memory drugs
    ) public returns (bool) {

        for (uint256 i=0; i < Users.length; i++) {
            if (Users[i].wallet == msg.sender) {
                return false;
            }
        }

        newUserRecord = UserRecord(
            name,
            bloodType,
            emergencyPhone,
            emergencyName,
            alergies,
            cronichConditions,
            surgeries,
            drugs
        );


        Users.push( User(msg.sender, 'user', newUserRecord));
        createMedicalHistory(msg.sender);

        return true;
    }

    // Create basic empty Medical History
    function createMedicalHistory(address patien) private returns (bool) {

        MedicalHistory memory medicalHistory;
        medicalHistory.patien = patien;
        MedicalHistories.push(medicalHistory);

        return true;
    }

    function updatePropInMedicalHistory(string memory prop, string memory value, uint256 index) private returns (bool) {
        if (compareStrings(prop, "chronicDiseases")) {
            MedicalHistories[index].chronicDiseases.push(value);
        }
        if (compareStrings(prop, "surgeries")) {
            MedicalHistories[index].surgeries.push(value);
        }
        if (compareStrings(prop, "surgeries")) {
            MedicalHistories[index].surgeries.push(value);
        }
        if (compareStrings(prop, "pathologicalHistory")) {
            MedicalHistories[index].pathologicalHistory.push(value);
        }
        if (compareStrings(prop, "nonPathologicalHistory")) {
            MedicalHistories[index].nonPathologicalHistory.push(value);
        }
        if (compareStrings(prop, "paternalFamilyInheritedPathologies")) {
            MedicalHistories[index].paternalFamilyInheritedPathologies.push(value);
        }
        if (compareStrings(prop, "martenalFamilyInheritedPathologies")) {
            MedicalHistories[index].martenalFamilyInheritedPathologies.push(value);
        }
        return true;
    }

    function updateMedicalHistory(address patien, string memory prop, string memory value) public returns (bool) {
        bool doctorIsActive = false;

        for (uint256 i=0; i < Doctors.length; i++) {
            if (Doctors[i].wallet == msg.sender) {
                doctorIsActive = true;
            }
        }

        if (!doctorIsActive) {
            return false;
        }

        for (uint256 i=0; i < MedicalHistories.length; i++) {
            if (MedicalHistories[i].patien == patien) {
                updatePropInMedicalHistory(prop, value, i);
                return true;
            }
        }

        return false;

    }

    function updateUserDrugs(address patien, string memory value) public returns (bool) {

        for (uint256 i=0; i < Users.length; i++) {
            if (Users[i].wallet == patien) {
                Users[i].record.drugs.push(value);
            }
        }

        return true;

    }

    function createDoctor(string memory name) public returns (bool) {
        Doctors.push( Doctor(msg.sender, name, true));
        return true;
    }
}
