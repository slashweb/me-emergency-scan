export const MAIN_LOGO = 'https://res.cloudinary.com/dgcxcqu6p/image/upload/v1687567341/Me_yola1p.svg'
export const PROFILE_IMAGE  ='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
export const CHAIN_ID = 10200

export const CONTRACT_ID = '0xe7c578d56989423FfFC7044fE02Aab2dC94f0EA4'
export const ABI = [
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
							"name": "recipes",
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
					"name": "recipes",
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
									"name": "recipes",
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
									"name": "recipes",
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
		}
	]
