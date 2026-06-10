import type { INodeProperties } from 'n8n-workflow';

export const customersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					]
				}
			},
			"options": [
				{
					"name": "Customers All",
					"value": "Customers All",
					"action": "List Customer Support Customers",
					"description": "List Customer Support Customers",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/customer-support/customers"
						}
					}
				},
				{
					"name": "Customers Add",
					"value": "Customers Add",
					"action": "Create Customer Support Customer",
					"description": "Create Customer Support Customer",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/customer-support/customers"
						}
					}
				},
				{
					"name": "Customers Delete",
					"value": "Customers Delete",
					"action": "Delete Customer Support Customer",
					"description": "Delete Customer Support Customer",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/customer-support/customers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Customers One",
					"value": "Customers One",
					"action": "Get Customer Support Customer",
					"description": "Get Customer Support Customer",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/customer-support/customers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Customers Update",
					"value": "Customers Update",
					"action": "Update Customer Support Customer",
					"description": "Update Customer Support Customer",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/customer-support/customers/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /customer-support/customers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers All"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers All"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"description": "Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cursor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers All"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of results to return. Minimum 1, Maximum 200, Default 20",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers All"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.",
			"default": "id,updated_at",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers All"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers All"
					]
				}
			}
		},
		{
			"displayName": "POST /customer-support/customers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Addresses",
			"name": "addresses",
			"type": "json",
			"default": "[\n  {\n    \"city\": \"San Francisco\",\n    \"contact_name\": \"Elon Musk\",\n    \"country\": \"US\",\n    \"county\": \"Santa Clara\",\n    \"email\": \"elon@musk.com\",\n    \"fax\": \"122-111-1111\",\n    \"id\": \"123\",\n    \"latitude\": \"40.759211\",\n    \"line1\": \"Main street\",\n    \"line2\": \"apt #\",\n    \"line3\": \"Suite #\",\n    \"line4\": \"delivery instructions\",\n    \"longitude\": \"-73.984638\",\n    \"name\": \"HQ US\",\n    \"phone_number\": \"111-111-1111\",\n    \"postal_code\": \"94104\",\n    \"row_version\": \"1-12345\",\n    \"salutation\": \"Mr\",\n    \"state\": \"CA\",\n    \"street_number\": \"25\",\n    \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n    \"type\": \"primary\",\n    \"website\": \"https://elonmusk.com\"\n  }\n]",
			"routing": {
				"send": {
					"property": "addresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Bank Accounts",
			"name": "bank_accounts",
			"type": "json",
			"default": "{\n  \"account_name\": \"SPACEX LLC\",\n  \"account_number\": \"123465\",\n  \"account_type\": \"credit_card\",\n  \"bank_code\": \"BNH\",\n  \"bic\": \"AUDSCHGGXXX\",\n  \"branch_identifier\": \"001\",\n  \"bsb_number\": \"062-001\",\n  \"currency\": \"USD\",\n  \"iban\": \"CH2989144532982975332\"\n}",
			"routing": {
				"send": {
					"property": "bank_accounts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Company Name",
			"name": "company_name",
			"type": "string",
			"default": "SpaceX",
			"description": "The name of the company.",
			"routing": {
				"send": {
					"property": "company_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "string",
			"default": "12345",
			"description": "The user who created the object.",
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"type": "options",
			"default": "USD",
			"description": "Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).",
			"options": [
				{
					"name": "UNKNOWN CURRENCY",
					"value": "UNKNOWN_CURRENCY"
				},
				{
					"name": "AED",
					"value": "AED"
				},
				{
					"name": "AFN",
					"value": "AFN"
				},
				{
					"name": "ALL",
					"value": "ALL"
				},
				{
					"name": "AMD",
					"value": "AMD"
				},
				{
					"name": "ANG",
					"value": "ANG"
				},
				{
					"name": "AOA",
					"value": "AOA"
				},
				{
					"name": "ARS",
					"value": "ARS"
				},
				{
					"name": "AUD",
					"value": "AUD"
				},
				{
					"name": "AWG",
					"value": "AWG"
				},
				{
					"name": "AZN",
					"value": "AZN"
				},
				{
					"name": "BAM",
					"value": "BAM"
				},
				{
					"name": "BBD",
					"value": "BBD"
				},
				{
					"name": "BDT",
					"value": "BDT"
				},
				{
					"name": "BGN",
					"value": "BGN"
				},
				{
					"name": "BHD",
					"value": "BHD"
				},
				{
					"name": "BIF",
					"value": "BIF"
				},
				{
					"name": "BMD",
					"value": "BMD"
				},
				{
					"name": "BND",
					"value": "BND"
				},
				{
					"name": "BOB",
					"value": "BOB"
				},
				{
					"name": "BOV",
					"value": "BOV"
				},
				{
					"name": "BRL",
					"value": "BRL"
				},
				{
					"name": "BSD",
					"value": "BSD"
				},
				{
					"name": "BTN",
					"value": "BTN"
				},
				{
					"name": "BWP",
					"value": "BWP"
				},
				{
					"name": "BYR",
					"value": "BYR"
				},
				{
					"name": "BZD",
					"value": "BZD"
				},
				{
					"name": "CAD",
					"value": "CAD"
				},
				{
					"name": "CDF",
					"value": "CDF"
				},
				{
					"name": "CHE",
					"value": "CHE"
				},
				{
					"name": "CHF",
					"value": "CHF"
				},
				{
					"name": "CHW",
					"value": "CHW"
				},
				{
					"name": "CLF",
					"value": "CLF"
				},
				{
					"name": "CLP",
					"value": "CLP"
				},
				{
					"name": "CNY",
					"value": "CNY"
				},
				{
					"name": "COP",
					"value": "COP"
				},
				{
					"name": "COU",
					"value": "COU"
				},
				{
					"name": "CRC",
					"value": "CRC"
				},
				{
					"name": "CUC",
					"value": "CUC"
				},
				{
					"name": "CUP",
					"value": "CUP"
				},
				{
					"name": "CVE",
					"value": "CVE"
				},
				{
					"name": "CZK",
					"value": "CZK"
				},
				{
					"name": "DJF",
					"value": "DJF"
				},
				{
					"name": "DKK",
					"value": "DKK"
				},
				{
					"name": "DOP",
					"value": "DOP"
				},
				{
					"name": "DZD",
					"value": "DZD"
				},
				{
					"name": "EGP",
					"value": "EGP"
				},
				{
					"name": "ERN",
					"value": "ERN"
				},
				{
					"name": "ETB",
					"value": "ETB"
				},
				{
					"name": "EUR",
					"value": "EUR"
				},
				{
					"name": "FJD",
					"value": "FJD"
				},
				{
					"name": "FKP",
					"value": "FKP"
				},
				{
					"name": "GBP",
					"value": "GBP"
				},
				{
					"name": "GEL",
					"value": "GEL"
				},
				{
					"name": "GHS",
					"value": "GHS"
				},
				{
					"name": "GIP",
					"value": "GIP"
				},
				{
					"name": "GMD",
					"value": "GMD"
				},
				{
					"name": "GNF",
					"value": "GNF"
				},
				{
					"name": "GTQ",
					"value": "GTQ"
				},
				{
					"name": "GYD",
					"value": "GYD"
				},
				{
					"name": "HKD",
					"value": "HKD"
				},
				{
					"name": "HNL",
					"value": "HNL"
				},
				{
					"name": "HRK",
					"value": "HRK"
				},
				{
					"name": "HTG",
					"value": "HTG"
				},
				{
					"name": "HUF",
					"value": "HUF"
				},
				{
					"name": "IDR",
					"value": "IDR"
				},
				{
					"name": "ILS",
					"value": "ILS"
				},
				{
					"name": "INR",
					"value": "INR"
				},
				{
					"name": "IQD",
					"value": "IQD"
				},
				{
					"name": "IRR",
					"value": "IRR"
				},
				{
					"name": "ISK",
					"value": "ISK"
				},
				{
					"name": "JMD",
					"value": "JMD"
				},
				{
					"name": "JOD",
					"value": "JOD"
				},
				{
					"name": "JPY",
					"value": "JPY"
				},
				{
					"name": "KES",
					"value": "KES"
				},
				{
					"name": "KGS",
					"value": "KGS"
				},
				{
					"name": "KHR",
					"value": "KHR"
				},
				{
					"name": "KMF",
					"value": "KMF"
				},
				{
					"name": "KPW",
					"value": "KPW"
				},
				{
					"name": "KRW",
					"value": "KRW"
				},
				{
					"name": "KWD",
					"value": "KWD"
				},
				{
					"name": "KYD",
					"value": "KYD"
				},
				{
					"name": "KZT",
					"value": "KZT"
				},
				{
					"name": "LAK",
					"value": "LAK"
				},
				{
					"name": "LBP",
					"value": "LBP"
				},
				{
					"name": "LKR",
					"value": "LKR"
				},
				{
					"name": "LRD",
					"value": "LRD"
				},
				{
					"name": "LSL",
					"value": "LSL"
				},
				{
					"name": "LTL",
					"value": "LTL"
				},
				{
					"name": "LVL",
					"value": "LVL"
				},
				{
					"name": "LYD",
					"value": "LYD"
				},
				{
					"name": "MAD",
					"value": "MAD"
				},
				{
					"name": "MDL",
					"value": "MDL"
				},
				{
					"name": "MGA",
					"value": "MGA"
				},
				{
					"name": "MKD",
					"value": "MKD"
				},
				{
					"name": "MMK",
					"value": "MMK"
				},
				{
					"name": "MNT",
					"value": "MNT"
				},
				{
					"name": "MOP",
					"value": "MOP"
				},
				{
					"name": "MRO",
					"value": "MRO"
				},
				{
					"name": "MUR",
					"value": "MUR"
				},
				{
					"name": "MVR",
					"value": "MVR"
				},
				{
					"name": "MWK",
					"value": "MWK"
				},
				{
					"name": "MXN",
					"value": "MXN"
				},
				{
					"name": "MXV",
					"value": "MXV"
				},
				{
					"name": "MYR",
					"value": "MYR"
				},
				{
					"name": "MZN",
					"value": "MZN"
				},
				{
					"name": "NAD",
					"value": "NAD"
				},
				{
					"name": "NGN",
					"value": "NGN"
				},
				{
					"name": "NIO",
					"value": "NIO"
				},
				{
					"name": "NOK",
					"value": "NOK"
				},
				{
					"name": "NPR",
					"value": "NPR"
				},
				{
					"name": "NZD",
					"value": "NZD"
				},
				{
					"name": "OMR",
					"value": "OMR"
				},
				{
					"name": "PAB",
					"value": "PAB"
				},
				{
					"name": "PEN",
					"value": "PEN"
				},
				{
					"name": "PGK",
					"value": "PGK"
				},
				{
					"name": "PHP",
					"value": "PHP"
				},
				{
					"name": "PKR",
					"value": "PKR"
				},
				{
					"name": "PLN",
					"value": "PLN"
				},
				{
					"name": "PYG",
					"value": "PYG"
				},
				{
					"name": "QAR",
					"value": "QAR"
				},
				{
					"name": "RON",
					"value": "RON"
				},
				{
					"name": "RSD",
					"value": "RSD"
				},
				{
					"name": "RUB",
					"value": "RUB"
				},
				{
					"name": "RWF",
					"value": "RWF"
				},
				{
					"name": "SAR",
					"value": "SAR"
				},
				{
					"name": "SBD",
					"value": "SBD"
				},
				{
					"name": "SCR",
					"value": "SCR"
				},
				{
					"name": "SDG",
					"value": "SDG"
				},
				{
					"name": "SEK",
					"value": "SEK"
				},
				{
					"name": "SGD",
					"value": "SGD"
				},
				{
					"name": "SHP",
					"value": "SHP"
				},
				{
					"name": "SLL",
					"value": "SLL"
				},
				{
					"name": "SOS",
					"value": "SOS"
				},
				{
					"name": "SRD",
					"value": "SRD"
				},
				{
					"name": "SSP",
					"value": "SSP"
				},
				{
					"name": "STD",
					"value": "STD"
				},
				{
					"name": "SVC",
					"value": "SVC"
				},
				{
					"name": "SYP",
					"value": "SYP"
				},
				{
					"name": "SZL",
					"value": "SZL"
				},
				{
					"name": "THB",
					"value": "THB"
				},
				{
					"name": "TJS",
					"value": "TJS"
				},
				{
					"name": "TMT",
					"value": "TMT"
				},
				{
					"name": "TND",
					"value": "TND"
				},
				{
					"name": "TOP",
					"value": "TOP"
				},
				{
					"name": "TRC",
					"value": "TRC"
				},
				{
					"name": "TRY",
					"value": "TRY"
				},
				{
					"name": "TTD",
					"value": "TTD"
				},
				{
					"name": "TWD",
					"value": "TWD"
				},
				{
					"name": "TZS",
					"value": "TZS"
				},
				{
					"name": "UAH",
					"value": "UAH"
				},
				{
					"name": "UGX",
					"value": "UGX"
				},
				{
					"name": "USD",
					"value": "USD"
				},
				{
					"name": "USN",
					"value": "USN"
				},
				{
					"name": "USS",
					"value": "USS"
				},
				{
					"name": "UYI",
					"value": "UYI"
				},
				{
					"name": "UYU",
					"value": "UYU"
				},
				{
					"name": "UZS",
					"value": "UZS"
				},
				{
					"name": "VEF",
					"value": "VEF"
				},
				{
					"name": "VND",
					"value": "VND"
				},
				{
					"name": "VUV",
					"value": "VUV"
				},
				{
					"name": "WST",
					"value": "WST"
				},
				{
					"name": "XAF",
					"value": "XAF"
				},
				{
					"name": "XAG",
					"value": "XAG"
				},
				{
					"name": "XAU",
					"value": "XAU"
				},
				{
					"name": "XBA",
					"value": "XBA"
				},
				{
					"name": "XBB",
					"value": "XBB"
				},
				{
					"name": "XBC",
					"value": "XBC"
				},
				{
					"name": "XBD",
					"value": "XBD"
				},
				{
					"name": "XCD",
					"value": "XCD"
				},
				{
					"name": "XDR",
					"value": "XDR"
				},
				{
					"name": "XOF",
					"value": "XOF"
				},
				{
					"name": "XPD",
					"value": "XPD"
				},
				{
					"name": "XPF",
					"value": "XPF"
				},
				{
					"name": "XPT",
					"value": "XPT"
				},
				{
					"name": "XTS",
					"value": "XTS"
				},
				{
					"name": "XXX",
					"value": "XXX"
				},
				{
					"name": "YER",
					"value": "YER"
				},
				{
					"name": "ZAR",
					"value": "ZAR"
				},
				{
					"name": "ZMK",
					"value": "ZMK"
				},
				{
					"name": "ZMW",
					"value": "ZMW"
				},
				{
					"name": "BTC",
					"value": "BTC"
				},
				{
					"name": "ETH",
					"value": "ETH"
				}
			],
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Emails",
			"name": "emails",
			"type": "json",
			"default": "[\n  {\n    \"email\": \"elon@musk.com\",\n    \"id\": \"123\",\n    \"type\": \"primary\"\n  }\n]",
			"routing": {
				"send": {
					"property": "emails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "Elon",
			"description": "The first name of the person.",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "12345",
			"description": "A unique identifier for an object.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Individual",
			"name": "individual",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "individual",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Musk",
			"description": "The last name of the person.",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "string",
			"default": "Some notes about this customer",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  {\n    \"area_code\": \"323\",\n    \"country_code\": \"1\",\n    \"extension\": \"105\",\n    \"id\": \"12345\",\n    \"number\": \"111-111-1111\",\n    \"type\": \"primary\"\n  }\n]",
			"routing": {
				"send": {
					"property": "phone_numbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "Customer status",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Archived",
					"value": "archived"
				},
				{
					"name": "Gdpr Erasure Request",
					"value": "gdpr-erasure-request"
				},
				{
					"name": "Unknown",
					"value": "unknown"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Tax Number",
			"name": "tax_number",
			"type": "string",
			"default": "US123945459",
			"routing": {
				"send": {
					"property": "tax_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was last updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "Updated By",
			"name": "updated_by",
			"type": "string",
			"default": "12345",
			"description": "The user who last updated the object.",
			"routing": {
				"send": {
					"property": "updated_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Add"
					]
				}
			}
		},
		{
			"displayName": "DELETE /customer-support/customers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Delete"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Delete"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Delete"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Delete"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Delete"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Delete"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /customer-support/customers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers One"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers One"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers One"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.",
			"default": "id,updated_at",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers One"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers One"
					]
				}
			}
		},
		{
			"displayName": "PATCH /customer-support/customers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Addresses",
			"name": "addresses",
			"type": "json",
			"default": "[\n  {\n    \"city\": \"San Francisco\",\n    \"contact_name\": \"Elon Musk\",\n    \"country\": \"US\",\n    \"county\": \"Santa Clara\",\n    \"email\": \"elon@musk.com\",\n    \"fax\": \"122-111-1111\",\n    \"id\": \"123\",\n    \"latitude\": \"40.759211\",\n    \"line1\": \"Main street\",\n    \"line2\": \"apt #\",\n    \"line3\": \"Suite #\",\n    \"line4\": \"delivery instructions\",\n    \"longitude\": \"-73.984638\",\n    \"name\": \"HQ US\",\n    \"phone_number\": \"111-111-1111\",\n    \"postal_code\": \"94104\",\n    \"row_version\": \"1-12345\",\n    \"salutation\": \"Mr\",\n    \"state\": \"CA\",\n    \"street_number\": \"25\",\n    \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n    \"type\": \"primary\",\n    \"website\": \"https://elonmusk.com\"\n  }\n]",
			"routing": {
				"send": {
					"property": "addresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Bank Accounts",
			"name": "bank_accounts",
			"type": "json",
			"default": "{\n  \"account_name\": \"SPACEX LLC\",\n  \"account_number\": \"123465\",\n  \"account_type\": \"credit_card\",\n  \"bank_code\": \"BNH\",\n  \"bic\": \"AUDSCHGGXXX\",\n  \"branch_identifier\": \"001\",\n  \"bsb_number\": \"062-001\",\n  \"currency\": \"USD\",\n  \"iban\": \"CH2989144532982975332\"\n}",
			"routing": {
				"send": {
					"property": "bank_accounts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Company Name",
			"name": "company_name",
			"type": "string",
			"default": "SpaceX",
			"description": "The name of the company.",
			"routing": {
				"send": {
					"property": "company_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "string",
			"default": "12345",
			"description": "The user who created the object.",
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"type": "options",
			"default": "USD",
			"description": "Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).",
			"options": [
				{
					"name": "UNKNOWN CURRENCY",
					"value": "UNKNOWN_CURRENCY"
				},
				{
					"name": "AED",
					"value": "AED"
				},
				{
					"name": "AFN",
					"value": "AFN"
				},
				{
					"name": "ALL",
					"value": "ALL"
				},
				{
					"name": "AMD",
					"value": "AMD"
				},
				{
					"name": "ANG",
					"value": "ANG"
				},
				{
					"name": "AOA",
					"value": "AOA"
				},
				{
					"name": "ARS",
					"value": "ARS"
				},
				{
					"name": "AUD",
					"value": "AUD"
				},
				{
					"name": "AWG",
					"value": "AWG"
				},
				{
					"name": "AZN",
					"value": "AZN"
				},
				{
					"name": "BAM",
					"value": "BAM"
				},
				{
					"name": "BBD",
					"value": "BBD"
				},
				{
					"name": "BDT",
					"value": "BDT"
				},
				{
					"name": "BGN",
					"value": "BGN"
				},
				{
					"name": "BHD",
					"value": "BHD"
				},
				{
					"name": "BIF",
					"value": "BIF"
				},
				{
					"name": "BMD",
					"value": "BMD"
				},
				{
					"name": "BND",
					"value": "BND"
				},
				{
					"name": "BOB",
					"value": "BOB"
				},
				{
					"name": "BOV",
					"value": "BOV"
				},
				{
					"name": "BRL",
					"value": "BRL"
				},
				{
					"name": "BSD",
					"value": "BSD"
				},
				{
					"name": "BTN",
					"value": "BTN"
				},
				{
					"name": "BWP",
					"value": "BWP"
				},
				{
					"name": "BYR",
					"value": "BYR"
				},
				{
					"name": "BZD",
					"value": "BZD"
				},
				{
					"name": "CAD",
					"value": "CAD"
				},
				{
					"name": "CDF",
					"value": "CDF"
				},
				{
					"name": "CHE",
					"value": "CHE"
				},
				{
					"name": "CHF",
					"value": "CHF"
				},
				{
					"name": "CHW",
					"value": "CHW"
				},
				{
					"name": "CLF",
					"value": "CLF"
				},
				{
					"name": "CLP",
					"value": "CLP"
				},
				{
					"name": "CNY",
					"value": "CNY"
				},
				{
					"name": "COP",
					"value": "COP"
				},
				{
					"name": "COU",
					"value": "COU"
				},
				{
					"name": "CRC",
					"value": "CRC"
				},
				{
					"name": "CUC",
					"value": "CUC"
				},
				{
					"name": "CUP",
					"value": "CUP"
				},
				{
					"name": "CVE",
					"value": "CVE"
				},
				{
					"name": "CZK",
					"value": "CZK"
				},
				{
					"name": "DJF",
					"value": "DJF"
				},
				{
					"name": "DKK",
					"value": "DKK"
				},
				{
					"name": "DOP",
					"value": "DOP"
				},
				{
					"name": "DZD",
					"value": "DZD"
				},
				{
					"name": "EGP",
					"value": "EGP"
				},
				{
					"name": "ERN",
					"value": "ERN"
				},
				{
					"name": "ETB",
					"value": "ETB"
				},
				{
					"name": "EUR",
					"value": "EUR"
				},
				{
					"name": "FJD",
					"value": "FJD"
				},
				{
					"name": "FKP",
					"value": "FKP"
				},
				{
					"name": "GBP",
					"value": "GBP"
				},
				{
					"name": "GEL",
					"value": "GEL"
				},
				{
					"name": "GHS",
					"value": "GHS"
				},
				{
					"name": "GIP",
					"value": "GIP"
				},
				{
					"name": "GMD",
					"value": "GMD"
				},
				{
					"name": "GNF",
					"value": "GNF"
				},
				{
					"name": "GTQ",
					"value": "GTQ"
				},
				{
					"name": "GYD",
					"value": "GYD"
				},
				{
					"name": "HKD",
					"value": "HKD"
				},
				{
					"name": "HNL",
					"value": "HNL"
				},
				{
					"name": "HRK",
					"value": "HRK"
				},
				{
					"name": "HTG",
					"value": "HTG"
				},
				{
					"name": "HUF",
					"value": "HUF"
				},
				{
					"name": "IDR",
					"value": "IDR"
				},
				{
					"name": "ILS",
					"value": "ILS"
				},
				{
					"name": "INR",
					"value": "INR"
				},
				{
					"name": "IQD",
					"value": "IQD"
				},
				{
					"name": "IRR",
					"value": "IRR"
				},
				{
					"name": "ISK",
					"value": "ISK"
				},
				{
					"name": "JMD",
					"value": "JMD"
				},
				{
					"name": "JOD",
					"value": "JOD"
				},
				{
					"name": "JPY",
					"value": "JPY"
				},
				{
					"name": "KES",
					"value": "KES"
				},
				{
					"name": "KGS",
					"value": "KGS"
				},
				{
					"name": "KHR",
					"value": "KHR"
				},
				{
					"name": "KMF",
					"value": "KMF"
				},
				{
					"name": "KPW",
					"value": "KPW"
				},
				{
					"name": "KRW",
					"value": "KRW"
				},
				{
					"name": "KWD",
					"value": "KWD"
				},
				{
					"name": "KYD",
					"value": "KYD"
				},
				{
					"name": "KZT",
					"value": "KZT"
				},
				{
					"name": "LAK",
					"value": "LAK"
				},
				{
					"name": "LBP",
					"value": "LBP"
				},
				{
					"name": "LKR",
					"value": "LKR"
				},
				{
					"name": "LRD",
					"value": "LRD"
				},
				{
					"name": "LSL",
					"value": "LSL"
				},
				{
					"name": "LTL",
					"value": "LTL"
				},
				{
					"name": "LVL",
					"value": "LVL"
				},
				{
					"name": "LYD",
					"value": "LYD"
				},
				{
					"name": "MAD",
					"value": "MAD"
				},
				{
					"name": "MDL",
					"value": "MDL"
				},
				{
					"name": "MGA",
					"value": "MGA"
				},
				{
					"name": "MKD",
					"value": "MKD"
				},
				{
					"name": "MMK",
					"value": "MMK"
				},
				{
					"name": "MNT",
					"value": "MNT"
				},
				{
					"name": "MOP",
					"value": "MOP"
				},
				{
					"name": "MRO",
					"value": "MRO"
				},
				{
					"name": "MUR",
					"value": "MUR"
				},
				{
					"name": "MVR",
					"value": "MVR"
				},
				{
					"name": "MWK",
					"value": "MWK"
				},
				{
					"name": "MXN",
					"value": "MXN"
				},
				{
					"name": "MXV",
					"value": "MXV"
				},
				{
					"name": "MYR",
					"value": "MYR"
				},
				{
					"name": "MZN",
					"value": "MZN"
				},
				{
					"name": "NAD",
					"value": "NAD"
				},
				{
					"name": "NGN",
					"value": "NGN"
				},
				{
					"name": "NIO",
					"value": "NIO"
				},
				{
					"name": "NOK",
					"value": "NOK"
				},
				{
					"name": "NPR",
					"value": "NPR"
				},
				{
					"name": "NZD",
					"value": "NZD"
				},
				{
					"name": "OMR",
					"value": "OMR"
				},
				{
					"name": "PAB",
					"value": "PAB"
				},
				{
					"name": "PEN",
					"value": "PEN"
				},
				{
					"name": "PGK",
					"value": "PGK"
				},
				{
					"name": "PHP",
					"value": "PHP"
				},
				{
					"name": "PKR",
					"value": "PKR"
				},
				{
					"name": "PLN",
					"value": "PLN"
				},
				{
					"name": "PYG",
					"value": "PYG"
				},
				{
					"name": "QAR",
					"value": "QAR"
				},
				{
					"name": "RON",
					"value": "RON"
				},
				{
					"name": "RSD",
					"value": "RSD"
				},
				{
					"name": "RUB",
					"value": "RUB"
				},
				{
					"name": "RWF",
					"value": "RWF"
				},
				{
					"name": "SAR",
					"value": "SAR"
				},
				{
					"name": "SBD",
					"value": "SBD"
				},
				{
					"name": "SCR",
					"value": "SCR"
				},
				{
					"name": "SDG",
					"value": "SDG"
				},
				{
					"name": "SEK",
					"value": "SEK"
				},
				{
					"name": "SGD",
					"value": "SGD"
				},
				{
					"name": "SHP",
					"value": "SHP"
				},
				{
					"name": "SLL",
					"value": "SLL"
				},
				{
					"name": "SOS",
					"value": "SOS"
				},
				{
					"name": "SRD",
					"value": "SRD"
				},
				{
					"name": "SSP",
					"value": "SSP"
				},
				{
					"name": "STD",
					"value": "STD"
				},
				{
					"name": "SVC",
					"value": "SVC"
				},
				{
					"name": "SYP",
					"value": "SYP"
				},
				{
					"name": "SZL",
					"value": "SZL"
				},
				{
					"name": "THB",
					"value": "THB"
				},
				{
					"name": "TJS",
					"value": "TJS"
				},
				{
					"name": "TMT",
					"value": "TMT"
				},
				{
					"name": "TND",
					"value": "TND"
				},
				{
					"name": "TOP",
					"value": "TOP"
				},
				{
					"name": "TRC",
					"value": "TRC"
				},
				{
					"name": "TRY",
					"value": "TRY"
				},
				{
					"name": "TTD",
					"value": "TTD"
				},
				{
					"name": "TWD",
					"value": "TWD"
				},
				{
					"name": "TZS",
					"value": "TZS"
				},
				{
					"name": "UAH",
					"value": "UAH"
				},
				{
					"name": "UGX",
					"value": "UGX"
				},
				{
					"name": "USD",
					"value": "USD"
				},
				{
					"name": "USN",
					"value": "USN"
				},
				{
					"name": "USS",
					"value": "USS"
				},
				{
					"name": "UYI",
					"value": "UYI"
				},
				{
					"name": "UYU",
					"value": "UYU"
				},
				{
					"name": "UZS",
					"value": "UZS"
				},
				{
					"name": "VEF",
					"value": "VEF"
				},
				{
					"name": "VND",
					"value": "VND"
				},
				{
					"name": "VUV",
					"value": "VUV"
				},
				{
					"name": "WST",
					"value": "WST"
				},
				{
					"name": "XAF",
					"value": "XAF"
				},
				{
					"name": "XAG",
					"value": "XAG"
				},
				{
					"name": "XAU",
					"value": "XAU"
				},
				{
					"name": "XBA",
					"value": "XBA"
				},
				{
					"name": "XBB",
					"value": "XBB"
				},
				{
					"name": "XBC",
					"value": "XBC"
				},
				{
					"name": "XBD",
					"value": "XBD"
				},
				{
					"name": "XCD",
					"value": "XCD"
				},
				{
					"name": "XDR",
					"value": "XDR"
				},
				{
					"name": "XOF",
					"value": "XOF"
				},
				{
					"name": "XPD",
					"value": "XPD"
				},
				{
					"name": "XPF",
					"value": "XPF"
				},
				{
					"name": "XPT",
					"value": "XPT"
				},
				{
					"name": "XTS",
					"value": "XTS"
				},
				{
					"name": "XXX",
					"value": "XXX"
				},
				{
					"name": "YER",
					"value": "YER"
				},
				{
					"name": "ZAR",
					"value": "ZAR"
				},
				{
					"name": "ZMK",
					"value": "ZMK"
				},
				{
					"name": "ZMW",
					"value": "ZMW"
				},
				{
					"name": "BTC",
					"value": "BTC"
				},
				{
					"name": "ETH",
					"value": "ETH"
				}
			],
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Emails",
			"name": "emails",
			"type": "json",
			"default": "[\n  {\n    \"email\": \"elon@musk.com\",\n    \"id\": \"123\",\n    \"type\": \"primary\"\n  }\n]",
			"routing": {
				"send": {
					"property": "emails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "Elon",
			"description": "The first name of the person.",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "12345",
			"description": "A unique identifier for an object.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Individual",
			"name": "individual",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "individual",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Musk",
			"description": "The last name of the person.",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "string",
			"default": "Some notes about this customer",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  {\n    \"area_code\": \"323\",\n    \"country_code\": \"1\",\n    \"extension\": \"105\",\n    \"id\": \"12345\",\n    \"number\": \"111-111-1111\",\n    \"type\": \"primary\"\n  }\n]",
			"routing": {
				"send": {
					"property": "phone_numbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "Customer status",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Archived",
					"value": "archived"
				},
				{
					"name": "Gdpr Erasure Request",
					"value": "gdpr-erasure-request"
				},
				{
					"name": "Unknown",
					"value": "unknown"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Tax Number",
			"name": "tax_number",
			"type": "string",
			"default": "US123945459",
			"routing": {
				"send": {
					"property": "tax_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was last updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "Updated By",
			"name": "updated_by",
			"type": "string",
			"default": "12345",
			"description": "The user who last updated the object.",
			"routing": {
				"send": {
					"property": "updated_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customers"
					],
					"operation": [
						"Customers Update"
					]
				}
			}
		},
];
