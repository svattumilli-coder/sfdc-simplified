import type { SOQLRecord } from '../types';

export interface SOQLField {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'date' | 'id';
}

export interface SOQLObject {
  name: string;
  label: string;
  fields: SOQLField[];
  records: Record<string, string | number | boolean | null>[];
}

export const soqlObjects: SOQLObject[] = [
  {
    name: 'Account',
    label: 'Account',
    fields: [
      { name: 'Id', type: 'id' },
      { name: 'Name', type: 'string' },
      { name: 'Industry', type: 'string' },
      { name: 'AnnualRevenue', type: 'number' },
      { name: 'NumberOfEmployees', type: 'number' },
      { name: 'BillingCity', type: 'string' },
      { name: 'BillingState', type: 'string' },
      { name: 'Phone', type: 'string' },
      { name: 'Type', type: 'string' },
    ],
    records: [
      { Id: '001A000001', Name: 'TechVentures Inc', Industry: 'Technology', AnnualRevenue: 5000000, NumberOfEmployees: 250, BillingCity: 'San Francisco', BillingState: 'CA', Phone: '415-555-0101', Type: 'Customer' },
      { Id: '001A000002', Name: 'HealthFirst Corp', Industry: 'Healthcare', AnnualRevenue: 8000000, NumberOfEmployees: 500, BillingCity: 'Boston', BillingState: 'MA', Phone: '617-555-0102', Type: 'Customer' },
      { Id: '001A000003', Name: 'Capital Group', Industry: 'Finance', AnnualRevenue: 12000000, NumberOfEmployees: 800, BillingCity: 'New York', BillingState: 'NY', Phone: '212-555-0103', Type: 'Customer' },
      { Id: '001A000004', Name: 'RetailMax', Industry: 'Retail', AnnualRevenue: 3000000, NumberOfEmployees: 120, BillingCity: 'Chicago', BillingState: 'IL', Phone: '312-555-0104', Type: 'Partner' },
      { Id: '001A000005', Name: 'ManuPro Industries', Industry: 'Manufacturing', AnnualRevenue: 6500000, NumberOfEmployees: 400, BillingCity: 'Detroit', BillingState: 'MI', Phone: '313-555-0105', Type: 'Customer' },
      { Id: '001A000006', Name: 'DataStream Analytics', Industry: 'Technology', AnnualRevenue: 2500000, NumberOfEmployees: 80, BillingCity: 'Austin', BillingState: 'TX', Phone: '512-555-0106', Type: 'Prospect' },
      { Id: '001A000007', Name: 'EduLearn Systems', Industry: 'Education', AnnualRevenue: 1200000, NumberOfEmployees: 60, BillingCity: 'Seattle', BillingState: 'WA', Phone: '206-555-0107', Type: 'Customer' },
      { Id: '001A000008', Name: 'GreenPath Energy', Industry: 'Energy', AnnualRevenue: 9000000, NumberOfEmployees: 350, BillingCity: 'Houston', BillingState: 'TX', Phone: '832-555-0108', Type: 'Customer' },
      { Id: '001A000009', Name: 'Apex Consulting', Industry: 'Technology', AnnualRevenue: 4000000, NumberOfEmployees: 180, BillingCity: 'Denver', BillingState: 'CO', Phone: '303-555-0109', Type: 'Partner' },
      { Id: '001A000010', Name: 'MedDevice Corp', Industry: 'Healthcare', AnnualRevenue: 15000000, NumberOfEmployees: 1200, BillingCity: 'Minneapolis', BillingState: 'MN', Phone: '612-555-0110', Type: 'Customer' },
    ],
  },
  {
    name: 'Contact',
    label: 'Contact',
    fields: [
      { name: 'Id', type: 'id' },
      { name: 'FirstName', type: 'string' },
      { name: 'LastName', type: 'string' },
      { name: 'Email', type: 'string' },
      { name: 'Title', type: 'string' },
      { name: 'Department', type: 'string' },
      { name: 'Phone', type: 'string' },
      { name: 'AccountId', type: 'id' },
    ],
    records: [
      { Id: '003A000001', FirstName: 'Sarah', LastName: 'Chen', Email: 'sarah.chen@techventures.com', Title: 'CTO', Department: 'Engineering', Phone: '415-555-1001', AccountId: '001A000001' },
      { Id: '003A000002', FirstName: 'Michael', LastName: 'Torres', Email: 'mtorres@healthfirst.com', Title: 'CFO', Department: 'Finance', Phone: '617-555-1002', AccountId: '001A000002' },
      { Id: '003A000003', FirstName: 'Amanda', LastName: 'Johnson', Email: 'ajohnson@capitalgroup.com', Title: 'VP Sales', Department: 'Sales', Phone: '212-555-1003', AccountId: '001A000003' },
      { Id: '003A000004', FirstName: 'David', LastName: 'Park', Email: 'dpark@retailmax.com', Title: 'CEO', Department: 'Executive', Phone: '312-555-1004', AccountId: '001A000004' },
      { Id: '003A000005', FirstName: 'Lisa', LastName: 'Smith', Email: 'lsmith@manupro.com', Title: 'COO', Department: 'Operations', Phone: '313-555-1005', AccountId: '001A000005' },
      { Id: '003A000006', FirstName: 'James', LastName: 'Wilson', Email: 'jwilson@datastream.com', Title: 'CTO', Department: 'Technology', Phone: '512-555-1006', AccountId: '001A000006' },
      { Id: '003A000007', FirstName: 'Emily', LastName: 'Garcia', Email: 'egarcia@edulearn.com', Title: 'Director', Department: 'Product', Phone: '206-555-1007', AccountId: '001A000007' },
      { Id: '003A000008', FirstName: 'Robert', LastName: 'Martinez', Email: 'rmartinez@greenpath.com', Title: 'CEO', Department: 'Executive', Phone: '832-555-1008', AccountId: '001A000008' },
    ],
  },
  {
    name: 'Opportunity',
    label: 'Opportunity',
    fields: [
      { name: 'Id', type: 'id' },
      { name: 'Name', type: 'string' },
      { name: 'Amount', type: 'number' },
      { name: 'StageName', type: 'string' },
      { name: 'CloseDate', type: 'date' },
      { name: 'Probability', type: 'number' },
      { name: 'AccountId', type: 'id' },
      { name: 'OwnerId', type: 'id' },
    ],
    records: [
      { Id: '006A000001', Name: 'TechVentures Platform License', Amount: 85000, StageName: 'Closed Won', CloseDate: '2024-01-15', Probability: 100, AccountId: '001A000001', OwnerId: 'USER001' },
      { Id: '006A000002', Name: 'HealthFirst Analytics Suite', Amount: 125000, StageName: 'Closed Won', CloseDate: '2024-02-28', Probability: 100, AccountId: '001A000002', OwnerId: 'USER002' },
      { Id: '006A000003', Name: 'Capital Group Premium', Amount: 250000, StageName: 'Negotiation/Review', CloseDate: '2024-04-30', Probability: 70, AccountId: '001A000003', OwnerId: 'USER001' },
      { Id: '006A000004', Name: 'RetailMax Expansion', Amount: 45000, StageName: 'Proposal/Price Quote', CloseDate: '2024-05-15', Probability: 50, AccountId: '001A000004', OwnerId: 'USER003' },
      { Id: '006A000005', Name: 'ManuPro ERP Integration', Amount: 175000, StageName: 'Qualification', CloseDate: '2024-06-30', Probability: 30, AccountId: '001A000005', OwnerId: 'USER002' },
      { Id: '006A000006', Name: 'DataStream Pro License', Amount: 35000, StageName: 'Closed Won', CloseDate: '2024-01-31', Probability: 100, AccountId: '001A000006', OwnerId: 'USER003' },
      { Id: '006A000007', Name: 'EduLearn LMS Platform', Amount: 28000, StageName: 'Closed Lost', CloseDate: '2024-02-15', Probability: 0, AccountId: '001A000007', OwnerId: 'USER001' },
      { Id: '006A000008', Name: 'GreenPath Smart Metering', Amount: 320000, StageName: 'Negotiation/Review', CloseDate: '2024-05-31', Probability: 80, AccountId: '001A000008', OwnerId: 'USER002' },
    ],
  },
  {
    name: 'Case',
    label: 'Case',
    fields: [
      { name: 'Id', type: 'id' },
      { name: 'CaseNumber', type: 'string' },
      { name: 'Subject', type: 'string' },
      { name: 'Status', type: 'string' },
      { name: 'Priority', type: 'string' },
      { name: 'Origin', type: 'string' },
      { name: 'AccountId', type: 'id' },
    ],
    records: [
      { Id: '500A000001', CaseNumber: '00001001', Subject: 'API connection timeout error', Status: 'Open', Priority: 'High', Origin: 'Web', AccountId: '001A000001' },
      { Id: '500A000002', CaseNumber: '00001002', Subject: 'Report export failing', Status: 'In Progress', Priority: 'Medium', Origin: 'Email', AccountId: '001A000002' },
      { Id: '500A000003', CaseNumber: '00001003', Subject: 'User cannot log in', Status: 'Closed', Priority: 'Critical', Origin: 'Phone', AccountId: '001A000003' },
      { Id: '500A000004', CaseNumber: '00001004', Subject: 'Data import questions', Status: 'Open', Priority: 'Low', Origin: 'Web', AccountId: '001A000004' },
      { Id: '500A000005', CaseNumber: '00001005', Subject: 'Integration sync failure', Status: 'Escalated', Priority: 'High', Origin: 'Email', AccountId: '001A000005' },
    ],
  },
];

export interface ParsedQuery {
  object: string;
  fields: string[];
  whereClause: string;
  orderBy: string;
  limit: number | null;
  error: string | null;
}

export function executeSOQLQuery(query: string): { records: SOQLRecord[]; error: string | null; rowCount: number } {
  try {
    const normalized = query.trim().replace(/\s+/g, ' ').toUpperCase();

    const fromMatch = normalized.match(/FROM\s+(\w+)/i);
    if (!fromMatch) return { records: [], error: 'Missing FROM clause', rowCount: 0 };

    const objectName = fromMatch[1];
    const soqlObj = soqlObjects.find(o => o.name.toUpperCase() === objectName.toUpperCase());
    if (!soqlObj) return { records: [], error: `Object '${objectName}' not found. Available: Account, Contact, Opportunity, Case`, rowCount: 0 };

    const selectMatch = query.match(/SELECT\s+([\s\S]+?)\s+FROM/i);
    if (!selectMatch) return { records: [], error: 'Missing SELECT clause', rowCount: 0 };

    const fieldsStr = selectMatch[1];
    const requestedFields = fieldsStr.split(',').map(f => f.trim());

    const limitMatch = query.match(/LIMIT\s+(\d+)/i);
    const limitVal = limitMatch ? parseInt(limitMatch[1]) : 200;

    let records = soqlObj.records.map(r => ({
      type: soqlObj.name,
      fields: r,
    })) as SOQLRecord[];

    const whereMatch = query.match(/WHERE\s+([\s\S]+?)(?:\s+ORDER\s+BY|\s+LIMIT|\s+GROUP\s+BY|$)/i);
    if (whereMatch) {
      const whereClause = whereMatch[1].trim();
      records = applyWhereFilter(records, whereClause, soqlObj);
    }

    const orderMatch = query.match(/ORDER\s+BY\s+(\w+)(?:\s+(ASC|DESC))?/i);
    if (orderMatch) {
      const orderField = orderMatch[1];
      const direction = (orderMatch[2] || 'ASC').toUpperCase();
      records = records.sort((a, b) => {
        const av = a.fields[orderField];
        const bv = b.fields[orderField];
        if (av == null && bv == null) return 0;
        if (av == null) return direction === 'ASC' ? 1 : -1;
        if (bv == null) return direction === 'ASC' ? -1 : 1;
        if (typeof av === 'number' && typeof bv === 'number') {
          return direction === 'ASC' ? av - bv : bv - av;
        }
        const aStr = String(av).toLowerCase();
        const bStr = String(bv).toLowerCase();
        return direction === 'ASC' ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
      });
    }

    records = records.slice(0, limitVal);

    const projectedRecords = records.map(r => ({
      type: r.type,
      fields: requestedFields.reduce((acc, field) => {
        if (field === '*' || field.toUpperCase() === 'ID') {
          acc[field] = r.fields['Id'] || null;
        } else {
          const matchingKey = Object.keys(r.fields).find(k => k.toLowerCase() === field.toLowerCase());
          acc[field] = matchingKey ? r.fields[matchingKey] : null;
        }
        return acc;
      }, {} as Record<string, string | number | boolean | null>),
    }));

    return { records: projectedRecords, error: null, rowCount: projectedRecords.length };
  } catch (e) {
    return { records: [], error: `Query error: ${e instanceof Error ? e.message : String(e)}`, rowCount: 0 };
  }
}

function applyWhereFilter(records: SOQLRecord[], where: string, obj: SOQLObject): SOQLRecord[] {
  return records.filter(record => {
    try {
      const eqMatch = where.match(/^(\w+)\s*=\s*'([^']*)'$/i);
      const neqMatch = where.match(/^(\w+)\s*!=\s*'([^']*)'$/i);
      const gtMatch = where.match(/^(\w+)\s*>\s*(\d+(?:\.\d+)?)$/i);
      const ltMatch = where.match(/^(\w+)\s*<\s*(\d+(?:\.\d+)?)$/i);
      const gteMatch = where.match(/^(\w+)\s*>=\s*(\d+(?:\.\d+)?)$/i);
      const likeMatch = where.match(/^(\w+)\s+LIKE\s+'([^']*)'/i);
      const inMatch = where.match(/^(\w+)\s+IN\s+\(([^)]+)\)/i);

      const getFieldValue = (fieldName: string) => {
        const key = Object.keys(record.fields).find(k => k.toLowerCase() === fieldName.toLowerCase());
        return key ? record.fields[key] : null;
      };

      if (eqMatch) {
        const val = getFieldValue(eqMatch[1]);
        return String(val).toLowerCase() === eqMatch[2].toLowerCase();
      }
      if (neqMatch) {
        const val = getFieldValue(neqMatch[1]);
        return String(val).toLowerCase() !== neqMatch[2].toLowerCase();
      }
      if (gtMatch) {
        const val = getFieldValue(gtMatch[1]);
        return typeof val === 'number' && val > parseFloat(gtMatch[2]);
      }
      if (ltMatch) {
        const val = getFieldValue(ltMatch[1]);
        return typeof val === 'number' && val < parseFloat(ltMatch[2]);
      }
      if (gteMatch) {
        const val = getFieldValue(gteMatch[1]);
        return typeof val === 'number' && val >= parseFloat(gteMatch[2]);
      }
      if (likeMatch) {
        const val = String(getFieldValue(likeMatch[1]) || '').toLowerCase();
        const pattern = likeMatch[2].toLowerCase().replace(/%/g, '.*').replace(/_/g, '.');
        return new RegExp('^' + pattern + '$').test(val);
      }
      if (inMatch) {
        const val = String(getFieldValue(inMatch[1]) || '').toLowerCase();
        const values = inMatch[2].split(',').map(v => v.trim().replace(/'/g, '').toLowerCase());
        return values.includes(val);
      }
      return true;
    } catch {
      return true;
    }
  });
}

export const soqlExamples = [
  {
    label: 'All Accounts',
    query: `SELECT Id, Name, Industry, AnnualRevenue
FROM Account
LIMIT 10`,
  },
  {
    label: 'Tech Accounts',
    query: `SELECT Id, Name, AnnualRevenue, BillingCity
FROM Account
WHERE Industry = 'Technology'
ORDER BY AnnualRevenue DESC`,
  },
  {
    label: 'Large Opportunities',
    query: `SELECT Id, Name, Amount, StageName
FROM Opportunity
WHERE Amount > 100000
ORDER BY Amount DESC`,
  },
  {
    label: 'Closed Won Deals',
    query: `SELECT Id, Name, Amount, CloseDate
FROM Opportunity
WHERE StageName = 'Closed Won'
ORDER BY Amount DESC
LIMIT 5`,
  },
  {
    label: 'Open Cases',
    query: `SELECT Id, CaseNumber, Subject, Priority
FROM Case
WHERE Status = 'Open'
ORDER BY Priority`,
  },
  {
    label: 'Contacts by Account',
    query: `SELECT Id, FirstName, LastName, Title, Email
FROM Contact
WHERE AccountId = '001A000001'`,
  },
];
