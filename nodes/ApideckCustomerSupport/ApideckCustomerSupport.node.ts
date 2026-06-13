import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { customersDescription } from './resources/customers';

export class ApideckCustomerSupport implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Apideck Customer Support',
                name: 'N8nDevApideckCustomerSupport',
                icon: { light: 'file:./apideck-customer-support.png', dark: 'file:./apideck-customer-support.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Customer Support API documentation.',
                defaults: { name: 'Apideck Customer Support' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevApideckCustomerSupportApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Customers",
					"value": "Customers",
					"description": ""
				}
			],
			"default": ""
		},
		...customersDescription
                ],
        };
}
