// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract MeEmergencyScan {

    struct ParamedicData {
        string date;
        string description;
    }

    struct UserRecord {
        string name;
        string bloodType;
        string emergencyPhone;
        string emergencyName;
        string[] alergies;
        string[] cronichConditions;
        string[] surgeries;
        string[] recipes;
    }

    struct User {
        address wallet;
        string userType;
        UserRecord record;
    }

    User[] public Users;

    UserRecord public newUserRecord;


    function compareStrings(string memory a, string memory b) public pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    // Get Actual profile of the user
    function getUserRecord() public view returns (User memory) {
        for (uint256 i = 0; i < Users.length; i++) {
            if (Users[i].wallet == msg.sender) {
                return Users[i];
            }
        }

        User memory empty;
        return empty;
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
        string[] memory recipes
    ) public returns (bool) {

        for (uint256 i = 0; i < Users.length; i++) {
            if (Users[i].wallet == msg.sender) {
                return false;
            }
        }

        newUserRecord = UserRecord(name, bloodType, emergencyPhone, emergencyName, alergies, cronichConditions, surgeries, recipes);
        Users.push(User(msg.sender, 'user', newUserRecord));

        return true;
    }

}
