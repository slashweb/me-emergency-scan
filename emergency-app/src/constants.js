export const MAIN_LOGO = 'https://res.cloudinary.com/dgcxcqu6p/image/upload/v1687567341/Me_yola1p.svg'
export const PROFILE_IMAGE = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'

export const CHAIN_ID = 100
export const CHAIN_NAME = 'xdai'
// export const CHAIN_ID = 1101
// export const CHAIN_NAME = 'zkEvm'

export const CONTRACT_ID = '0x559087F8732a619071551EE12517B59D37a9F261'
// export const CONTRACT_ID = '0x8a35A8D70a790243B0D21C0D1c895352531bd5b2'
export const ABI = [
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "MedicalHistories",
			"outputs": [
				{
					"internalType": "address",
					"name": "patien",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "ParamedicDatas",
			"outputs": [
				{
					"internalType": "address",
					"name": "patien",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "date",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "vitalSigns",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "status",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "lastMeal",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "Users",
			"outputs": [
				{
					"internalType": "address",
					"name": "wallet",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "userType",
					"type": "string"
				},
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "bloodType",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "emergencyPhone",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "emergencyName",
							"type": "string"
						},
						{
							"internalType": "string[]",
							"name": "alergies",
							"type": "string[]"
						},
						{
							"internalType": "string[]",
							"name": "cronichConditions",
							"type": "string[]"
						},
						{
							"internalType": "string[]",
							"name": "surgeries",
							"type": "string[]"
						},
						{
							"internalType": "string[]",
							"name": "drugs",
							"type": "string[]"
						}
					],
					"internalType": "struct MeEmergencyScan.UserRecord",
					"name": "record",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "a",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "b",
					"type": "string"
				}
			],
			"name": "compareStrings",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				}
			],
			"name": "createDoctor",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "patien",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "date",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "vitalSigns",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "status",
					"type": "string"
				},
				{
					"internalType": "string[]",
					"name": "drugs",
					"type": "string[]"
				},
				{
					"internalType": "string[]",
					"name": "procedures",
					"type": "string[]"
				},
				{
					"internalType": "string",
					"name": "lastMeal",
					"type": "string"
				}
			],
			"name": "createNewParamedicData",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "bloodType",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "emergencyPhone",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "emergencyName",
					"type": "string"
				},
				{
					"internalType": "string[]",
					"name": "alergies",
					"type": "string[]"
				},
				{
					"internalType": "string[]",
					"name": "cronichConditions",
					"type": "string[]"
				},
				{
					"internalType": "string[]",
					"name": "surgeries",
					"type": "string[]"
				},
				{
					"internalType": "string[]",
					"name": "drugs",
					"type": "string[]"
				}
			],
			"name": "createUserProfile",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "wallet",
					"type": "address"
				}
			],
			"name": "doctorExists",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getAllUserRecords",
			"outputs": [
				{
					"components": [
						{
							"internalType": "address",
							"name": "wallet",
							"type": "address"
						},
						{
							"internalType": "string",
							"name": "userType",
							"type": "string"
						},
						{
							"components": [
								{
									"internalType": "string",
									"name": "name",
									"type": "string"
								},
								{
									"internalType": "string",
									"name": "bloodType",
									"type": "string"
								},
								{
									"internalType": "string",
									"name": "emergencyPhone",
									"type": "string"
								},
								{
									"internalType": "string",
									"name": "emergencyName",
									"type": "string"
								},
								{
									"internalType": "string[]",
									"name": "alergies",
									"type": "string[]"
								},
								{
									"internalType": "string[]",
									"name": "cronichConditions",
									"type": "string[]"
								},
								{
									"internalType": "string[]",
									"name": "surgeries",
									"type": "string[]"
								},
								{
									"internalType": "string[]",
									"name": "drugs",
									"type": "string[]"
								}
							],
							"internalType": "struct MeEmergencyScan.UserRecord",
							"name": "record",
							"type": "tuple"
						}
					],
					"internalType": "struct MeEmergencyScan.User[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "wallet",
					"type": "address"
				}
			],
			"name": "getDoctorData",
			"outputs": [
				{
					"components": [
						{
							"internalType": "address",
							"name": "wallet",
							"type": "address"
						},
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "bool",
							"name": "isActive",
							"type": "bool"
						}
					],
					"internalType": "struct MeEmergencyScan.Doctor",
					"name": "",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "wallet",
					"type": "address"
				}
			],
			"name": "getLastParamedicalData",
			"outputs": [
				{
					"components": [
						{
							"internalType": "address",
							"name": "patien",
							"type": "address"
						},
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "date",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "vitalSigns",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "status",
							"type": "string"
						},
						{
							"internalType": "string[]",
							"name": "drugs",
							"type": "string[]"
						},
						{
							"internalType": "string[]",
							"name": "procedures",
							"type": "string[]"
						},
						{
							"internalType": "string",
							"name": "lastMeal",
							"type": "string"
						}
					],
					"internalType": "struct MeEmergencyScan.ParamedicData",
					"name": "",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "wallet",
					"type": "address"
				}
			],
			"name": "getUserHistory",
			"outputs": [
				{
					"components": [
						{
							"internalType": "address",
							"name": "patien",
							"type": "address"
						},
						{
							"internalType": "string[]",
							"name": "chronicDiseases",
							"type": "string[]"
						},
						{
							"internalType": "string[]",
							"name": "surgeries",
							"type": "string[]"
						},
						{
							"internalType": "string[]",
							"name": "pathologicalHistory",
							"type": "string[]"
						},
						{
							"internalType": "string[]",
							"name": "nonPathologicalHistory",
							"type": "string[]"
						},
						{
							"internalType": "string[]",
							"name": "paternalFamilyInheritedPathologies",
							"type": "string[]"
						},
						{
							"internalType": "string[]",
							"name": "martenalFamilyInheritedPathologies",
							"type": "string[]"
						}
					],
					"internalType": "struct MeEmergencyScan.MedicalHistory",
					"name": "",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "wallet",
					"type": "address"
				}
			],
			"name": "getUserRecord",
			"outputs": [
				{
					"components": [
						{
							"internalType": "address",
							"name": "wallet",
							"type": "address"
						},
						{
							"internalType": "string",
							"name": "userType",
							"type": "string"
						},
						{
							"components": [
								{
									"internalType": "string",
									"name": "name",
									"type": "string"
								},
								{
									"internalType": "string",
									"name": "bloodType",
									"type": "string"
								},
								{
									"internalType": "string",
									"name": "emergencyPhone",
									"type": "string"
								},
								{
									"internalType": "string",
									"name": "emergencyName",
									"type": "string"
								},
								{
									"internalType": "string[]",
									"name": "alergies",
									"type": "string[]"
								},
								{
									"internalType": "string[]",
									"name": "cronichConditions",
									"type": "string[]"
								},
								{
									"internalType": "string[]",
									"name": "surgeries",
									"type": "string[]"
								},
								{
									"internalType": "string[]",
									"name": "drugs",
									"type": "string[]"
								}
							],
							"internalType": "struct MeEmergencyScan.UserRecord",
							"name": "record",
							"type": "tuple"
						}
					],
					"internalType": "struct MeEmergencyScan.User",
					"name": "",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "newUserRecord",
			"outputs": [
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "bloodType",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "emergencyPhone",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "emergencyName",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "patien",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "prop",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "value",
					"type": "string"
				}
			],
			"name": "updateMedicalHistory",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "patien",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "value",
					"type": "string"
				}
			],
			"name": "updateUserDrugs",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]


