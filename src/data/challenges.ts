import type { Challenge } from '../types';

export const challenges: Challenge[] = [
  {
    id: 'challenge-variables',
    lessonId: 'apex-variables',
    title: 'Build a Contact Info Card',
    description: 'Declare the correct Apex variables to represent a Salesforce Contact record, then print a formatted summary.',
    difficulty: 'beginner',
    instructions: [
      'Declare a String variable for the contact\'s full name',
      'Declare an Integer variable for their age',
      'Declare a Decimal variable for their annual salary',
      'Declare a Boolean variable indicating if they are a VIP customer',
      'Declare a Date variable for their hire date using Date.newInstance()',
      'Print a summary using System.debug()',
    ],
    starterCode: `// TODO: Declare your variables here
// 1. String for full name (e.g., 'Jane Smith')
// 2. Integer for age (e.g., 34)
// 3. Decimal for annual salary (e.g., 85000.00)
// 4. Boolean for VIP status (e.g., true)
// 5. Date for hire date (e.g., Date.newInstance(2020, 3, 15))

// TODO: Print a formatted summary, e.g.:
// "Contact: Jane Smith | Age: 34 | Salary: $85000.00 | VIP: true"
`,
    hints: [
      'Use the format: DataType variableName = value;',
      'For String values, use single quotes: String name = \'Jane Smith\';',
      'For Decimal, include the decimal point: Decimal salary = 85000.00;',
      'For Date, use: Date hireDate = Date.newInstance(year, month, day);',
      'To print: System.debug(\'Contact: \' + name + \' | Age: \' + age);',
    ],
    solution: `String fullName = 'Jane Smith';
Integer age = 34;
Decimal annualSalary = 85000.00;
Boolean isVIP = true;
Date hireDate = Date.newInstance(2020, 3, 15);

String summary = 'Contact: ' + fullName
    + ' | Age: ' + age
    + ' | Salary: $' + annualSalary
    + ' | VIP: ' + isVIP
    + ' | Hired: ' + hireDate;

System.debug(summary);`,
    solutionExplanation: 'We declared five variables with the correct types: String for text, Integer for whole numbers, Decimal for currency (supports decimal places), Boolean for true/false, and Date using the static factory method. The summary concatenates all values into one string.',
    testCases: [
      {
        id: 'tc1',
        description: 'Declares a String variable',
        pattern: 'String\\s+\\w+\\s*=\\s*\'[^\']+\'',
        errorMessage: 'You need to declare a String variable with a text value in single quotes.',
      },
      {
        id: 'tc2',
        description: 'Declares an Integer variable',
        pattern: 'Integer\\s+\\w+\\s*=\\s*\\d+',
        errorMessage: 'You need to declare an Integer variable with a whole number value.',
      },
      {
        id: 'tc3',
        description: 'Declares a Decimal variable',
        pattern: 'Decimal\\s+\\w+\\s*=\\s*[\\d.]+',
        errorMessage: 'You need to declare a Decimal variable with a decimal number.',
      },
      {
        id: 'tc4',
        description: 'Declares a Boolean variable',
        pattern: 'Boolean\\s+\\w+\\s*=\\s*(true|false)',
        errorMessage: 'You need to declare a Boolean variable with a value of true or false.',
      },
      {
        id: 'tc5',
        description: 'Uses System.debug()',
        pattern: 'System\\.debug\\(',
        errorMessage: 'Use System.debug() to print your output.',
      },
    ],
  },
  {
    id: 'challenge-strings',
    lessonId: 'apex-strings',
    title: 'Email Address Processor',
    description: 'Write Apex code to validate and normalize an email address from user input.',
    difficulty: 'beginner',
    instructions: [
      'Take the input email: \'  JOHN.DOE@ExAmPlE.CoM  \'',
      'Trim whitespace from both ends',
      'Convert the entire email to lowercase',
      'Check if the email contains an \'@\' character — if not, print "Invalid email"',
      'Extract the username (part before @) and domain (part after @)',
      'Print: "Username: john.doe | Domain: example.com"',
    ],
    starterCode: `String rawEmail = '  JOHN.DOE@ExAmPlE.CoM  ';

// Step 1: Trim whitespace
// Step 2: Convert to lowercase
// Step 3: Check if it contains '@'
// Step 4: Extract username and domain
// Step 5: Print the result
`,
    hints: [
      'Use .trim() to remove whitespace from both ends',
      'Use .toLowerCase() to convert to lowercase',
      'Use .contains(\'@\') to check if @ exists',
      'Use .indexOf(\'@\') to find the position of @',
      'Use .substring(0, atPos) for username, .substring(atPos + 1) for domain',
    ],
    solution: `String rawEmail = '  JOHN.DOE@ExAmPlE.CoM  ';

String email = rawEmail.trim().toLowerCase();

if (!email.contains('@')) {
    System.debug('Invalid email');
} else {
    Integer atPos = email.indexOf('@');
    String username = email.substring(0, atPos);
    String domain = email.substring(atPos + 1);
    System.debug('Username: ' + username + ' | Domain: ' + domain);
}`,
    solutionExplanation: 'We chain trim() and toLowerCase() to normalize the input. Then we check for @ using contains(), find its position with indexOf(), and use substring() to split the email into username and domain parts.',
    testCases: [
      {
        id: 'tc1',
        description: 'Uses trim()',
        pattern: '\\.trim\\(\\)',
        errorMessage: 'Use .trim() to remove leading and trailing whitespace.',
      },
      {
        id: 'tc2',
        description: 'Uses toLowerCase()',
        pattern: '\\.toLowerCase\\(\\)',
        errorMessage: 'Use .toLowerCase() to normalize the email to lowercase.',
      },
      {
        id: 'tc3',
        description: 'Checks for @ character',
        pattern: 'contains\\(|indexOf\\(',
        errorMessage: 'Check if the email contains an @ character using contains() or indexOf().',
      },
      {
        id: 'tc4',
        description: 'Uses substring() to extract parts',
        pattern: '\\.substring\\(',
        errorMessage: 'Use .substring() to extract the username and domain.',
      },
      {
        id: 'tc5',
        description: 'Uses System.debug()',
        pattern: 'System\\.debug\\(',
        errorMessage: 'Use System.debug() to print the result.',
      },
    ],
  },
  {
    id: 'challenge-conditionals',
    lessonId: 'apex-conditionals',
    title: 'Opportunity Discount Calculator',
    description: 'Write a conditional logic engine that determines the discount percentage based on deal size and account tier.',
    difficulty: 'beginner',
    instructions: [
      'Given amount = 75000 and accountTier = \'Gold\'',
      'Apply these rules:',
      '  - Enterprise tier: 20% discount if amount > 50000, else 15%',
      '  - Gold tier: 15% discount if amount > 50000, else 10%',
      '  - Silver tier: 10% discount if amount > 50000, else 5%',
      '  - All other tiers: 0% discount',
      'Calculate the discounted price and print: "Discount: X% | Final Price: $Y"',
    ],
    starterCode: `Decimal amount = 75000;
String accountTier = 'Gold';
Decimal discountPct = 0;

// TODO: Apply discount rules using if/else if/else
// Hint: Use nested conditions or combine them with &&

// TODO: Calculate final price and print result
`,
    hints: [
      'You can nest if statements: if (accountTier == \'Gold\') { if (amount > 50000) { ... } }',
      'Or combine conditions: if (accountTier == \'Gold\' && amount > 50000) { ... }',
      'To calculate final price: Decimal finalPrice = amount * (1 - discountPct / 100);',
      'Use String.valueOf() to include numbers in debug output',
    ],
    solution: `Decimal amount = 75000;
String accountTier = 'Gold';
Decimal discountPct = 0;

if (accountTier == 'Enterprise') {
    discountPct = amount > 50000 ? 20 : 15;
} else if (accountTier == 'Gold') {
    discountPct = amount > 50000 ? 15 : 10;
} else if (accountTier == 'Silver') {
    discountPct = amount > 50000 ? 10 : 5;
} else {
    discountPct = 0;
}

Decimal finalPrice = amount * (1 - discountPct / 100);
System.debug('Discount: ' + discountPct + '% | Final Price: $' + finalPrice);`,
    solutionExplanation: 'We use else if to handle each tier. For Gold with amount 75000 (> 50000), discountPct is 15. The ternary operator (condition ? valueIfTrue : valueIfFalse) is a concise shorthand for if/else.',
    testCases: [
      {
        id: 'tc1',
        description: 'Uses if/else if/else or switch',
        pattern: 'if\\s*\\(|switch\\s+on',
        errorMessage: 'Use if/else if/else statements to apply the discount rules.',
      },
      {
        id: 'tc2',
        description: 'Checks accountTier',
        pattern: 'accountTier',
        errorMessage: 'Your code must check the accountTier variable.',
      },
      {
        id: 'tc3',
        description: 'Checks amount threshold',
        pattern: 'amount\\s*>\\s*50000',
        errorMessage: 'You need to check if amount > 50000 to apply the higher discount.',
      },
      {
        id: 'tc4',
        description: 'Calculates final price',
        pattern: 'finalPrice|discountPct',
        errorMessage: 'Calculate the final price after applying the discount percentage.',
      },
    ],
  },
  {
    id: 'challenge-loops',
    lessonId: 'apex-loops',
    title: 'Sales Report Generator',
    description: 'Use loops to process a list of opportunity amounts and generate a sales summary.',
    difficulty: 'beginner',
    instructions: [
      'Given the list of deal amounts: {5000, 12000, 3500, 25000, 8000, 47000, 1500, 33000}',
      'Use a loop to calculate: total revenue, deal count, average deal size',
      'Count how many deals are "large" (> 10000)',
      'Find the largest deal amount',
      'Print all five results',
    ],
    starterCode: `List<Decimal> dealAmounts = new List<Decimal>{
    5000, 12000, 3500, 25000, 8000, 47000, 1500, 33000
};

// TODO: Initialize your tracking variables
Decimal totalRevenue = 0;
Integer dealCount = 0;
Integer largeDealCount = 0;
Decimal largestDeal = 0;

// TODO: Loop through dealAmounts and calculate statistics

// TODO: Calculate average (be careful about division by zero!)
Decimal averageDeal = 0;

// TODO: Print results
`,
    hints: [
      'Use a for-each loop: for (Decimal amount : dealAmounts) { ... }',
      'Add to total: totalRevenue += amount;',
      'Increment counter: dealCount++;',
      'Check and update max: if (amount > largestDeal) largestDeal = amount;',
      'Average = totalRevenue / dealCount (only if dealCount > 0)',
    ],
    solution: `List<Decimal> dealAmounts = new List<Decimal>{
    5000, 12000, 3500, 25000, 8000, 47000, 1500, 33000
};

Decimal totalRevenue = 0;
Integer dealCount = 0;
Integer largeDealCount = 0;
Decimal largestDeal = 0;

for (Decimal amount : dealAmounts) {
    totalRevenue += amount;
    dealCount++;
    if (amount > 10000) largeDealCount++;
    if (amount > largestDeal) largestDeal = amount;
}

Decimal averageDeal = dealCount > 0 ? totalRevenue / dealCount : 0;

System.debug('Total Revenue: $' + totalRevenue);
System.debug('Deal Count: ' + dealCount);
System.debug('Average Deal: $' + averageDeal);
System.debug('Large Deals (>$10k): ' + largeDealCount);
System.debug('Largest Deal: $' + largestDeal);`,
    solutionExplanation: 'We use a for-each loop to process each amount. We accumulate the total, count deals, check for large deals, and track the max. Average is computed after the loop to avoid dividing inside.',
    testCases: [
      {
        id: 'tc1',
        description: 'Uses a loop',
        pattern: 'for\\s*\\(',
        errorMessage: 'Use a for or for-each loop to iterate over dealAmounts.',
      },
      {
        id: 'tc2',
        description: 'Calculates total revenue',
        pattern: 'totalRevenue\\s*\\+=|totalRevenue\\s*=\\s*totalRevenue\\s*\\+',
        errorMessage: 'Accumulate amounts into totalRevenue inside the loop.',
      },
      {
        id: 'tc3',
        description: 'Counts large deals',
        pattern: 'largeDealCount|amount\\s*>\\s*10000',
        errorMessage: 'Count how many deals have amount > 10000.',
      },
      {
        id: 'tc4',
        description: 'Finds largest deal',
        pattern: 'largestDeal',
        errorMessage: 'Track the largest deal amount.',
      },
    ],
  },
  {
    id: 'challenge-lists',
    lessonId: 'apex-lists',
    title: 'Contact List Manager',
    description: 'Build a contact list manager that filters, sorts, and summarizes a list of names.',
    difficulty: 'beginner',
    instructions: [
      'Start with this list: {\'Alice Zhang\', \'Bob Smith\', \'Carol Lee\', \'David Kim\', \'Eve Johnson\'}',
      'Create a new list containing only names that start with a vowel (A, E, I, O, U)',
      'Sort the filtered list alphabetically',
      'Print the count of filtered names and each name on a separate line',
    ],
    starterCode: `List<String> contacts = new List<String>{
    'Alice Zhang', 'Bob Smith', 'Carol Lee', 'David Kim', 'Eve Johnson'
};

// TODO: Create filtered list of names starting with a vowel
List<String> vowelNames = new List<String>();

// TODO: Loop through contacts and add vowel-starting names to vowelNames

// TODO: Sort vowelNames alphabetically

// TODO: Print count and each name
`,
    hints: [
      'Use a for-each loop to iterate over contacts',
      'To check first letter: name.substring(0, 1) gets the first character',
      'Check vowels: String firstLetter = name.substring(0, 1); if (firstLetter == \'A\' || firstLetter == \'E\' || ...)',
      'Or use a Set: Set<String> vowels = new Set<String>{\'A\',\'E\',\'I\',\'O\',\'U\'}; if (vowels.contains(firstLetter))',
      'Use vowelNames.sort() to sort alphabetically',
    ],
    solution: `List<String> contacts = new List<String>{
    'Alice Zhang', 'Bob Smith', 'Carol Lee', 'David Kim', 'Eve Johnson'
};

Set<String> vowels = new Set<String>{'A', 'E', 'I', 'O', 'U'};
List<String> vowelNames = new List<String>();

for (String name : contacts) {
    String firstLetter = name.substring(0, 1).toUpperCase();
    if (vowels.contains(firstLetter)) {
        vowelNames.add(name);
    }
}

vowelNames.sort();

System.debug('Vowel-starting contacts: ' + vowelNames.size());
for (String name : vowelNames) {
    System.debug(name);
}`,
    solutionExplanation: 'We use a Set of vowels for an efficient membership check. For each contact, we extract the first letter, uppercase it for safety, and check if it\'s a vowel. We then sort and print the results.',
    testCases: [
      {
        id: 'tc1',
        description: 'Creates a filtered list',
        pattern: 'List<String>\\s+\\w+\\s*=\\s*new\\s+List<String>\\(\\)',
        errorMessage: 'Create a new List<String> to hold the filtered names.',
      },
      {
        id: 'tc2',
        description: 'Uses a loop to filter',
        pattern: 'for\\s*\\(',
        errorMessage: 'Use a loop to iterate through the contacts list.',
      },
      {
        id: 'tc3',
        description: 'Checks first letter',
        pattern: 'substring\\(0,\\s*1\\)|charAt\\(0\\)',
        errorMessage: 'Extract the first letter using .substring(0, 1) to check if it is a vowel.',
      },
      {
        id: 'tc4',
        description: 'Sorts the filtered list',
        pattern: '\\.sort\\(\\)',
        errorMessage: 'Sort the filtered list using .sort().',
      },
    ],
  },
  {
    id: 'challenge-sets',
    lessonId: 'apex-sets',
    title: 'Tag Deduplicator',
    description: 'Use a Set to deduplicate tags from multiple lead sources and identify which tags appear in multiple sources.',
    difficulty: 'beginner',
    instructions: [
      'You have two tag lists from different lead sources',
      'Source A: {\'vip\', \'tech\', \'enterprise\', \'renewal\', \'tech\'}',
      'Source B: {\'sme\', \'tech\', \'startup\', \'vip\', \'sme\'}',
      'Create a Set of unique tags from Source A',
      'Create a Set of unique tags from Source B',
      'Find tags that appear in BOTH sources (intersection)',
      'Print the unique tag counts for each source, and the shared tags',
    ],
    starterCode: `List<String> sourceATags = new List<String>{'vip', 'tech', 'enterprise', 'renewal', 'tech'};
List<String> sourceBTags = new List<String>{'sme', 'tech', 'startup', 'vip', 'sme'};

// TODO: Create unique Set for Source A
// TODO: Create unique Set for Source B
// TODO: Find shared tags (intersection)
// TODO: Print results
`,
    hints: [
      'Convert List to Set: Set<String> uniqueA = new Set<String>(sourceATags);',
      'For intersection, copy one set then use retainAll(): Set<String> shared = new Set<String>(setA); shared.retainAll(setB);',
      'Print set size: System.debug(\'Source A unique tags: \' + uniqueA.size());',
      'Iterate a set: for (String tag : shared) { System.debug(tag); }',
    ],
    solution: `List<String> sourceATags = new List<String>{'vip', 'tech', 'enterprise', 'renewal', 'tech'};
List<String> sourceBTags = new List<String>{'sme', 'tech', 'startup', 'vip', 'sme'};

Set<String> uniqueA = new Set<String>(sourceATags);
Set<String> uniqueB = new Set<String>(sourceBTags);

Set<String> shared = new Set<String>(uniqueA);
shared.retainAll(uniqueB);

System.debug('Source A unique tags: ' + uniqueA.size());
System.debug('Source B unique tags: ' + uniqueB.size());
System.debug('Shared tags: ' + shared.size());
for (String tag : shared) {
    System.debug('Shared: ' + tag);
}`,
    solutionExplanation: 'Converting a List to a Set automatically removes duplicates. We copy uniqueA into a new Set and call retainAll() to keep only elements that are also in uniqueB — this is the set intersection operation.',
    testCases: [
      {
        id: 'tc1',
        description: 'Creates Set from Source A',
        pattern: 'Set<String>\\s+\\w+\\s*=\\s*new\\s+Set<String>\\(sourceATags\\)',
        errorMessage: 'Create a Set from sourceATags to deduplicate it.',
      },
      {
        id: 'tc2',
        description: 'Creates Set from Source B',
        pattern: 'Set<String>\\s+\\w+\\s*=\\s*new\\s+Set<String>\\(sourceBTags\\)',
        errorMessage: 'Create a Set from sourceBTags to deduplicate it.',
      },
      {
        id: 'tc3',
        description: 'Finds intersection using retainAll',
        pattern: 'retainAll\\(',
        errorMessage: 'Use retainAll() to find the intersection of the two Sets.',
      },
    ],
  },
  {
    id: 'challenge-maps',
    lessonId: 'apex-maps',
    title: 'Territory Revenue Tracker',
    description: 'Use a Map to aggregate total revenue by sales territory from a list of deals.',
    difficulty: 'beginner',
    instructions: [
      'You have a list of sales territories and deal amounts',
      'Aggregate total revenue per territory using a Map<String, Decimal>',
      'Print each territory and its total revenue, sorted by territory name',
    ],
    starterCode: `List<String> territories = new List<String>{
    'West', 'East', 'West', 'Central', 'East', 'West', 'Central', 'East'
};
List<Decimal> amounts = new List<Decimal>{
    15000, 8000, 22000, 5000, 31000, 7500, 18000, 12000
};

// TODO: Create a Map<String, Decimal> to track revenue per territory
Map<String, Decimal> revenueByTerritory = new Map<String, Decimal>();

// TODO: Loop through territories and amounts simultaneously
// Hint: use a traditional for loop with index: for (Integer i = 0; i < territories.size(); i++)

// TODO: Sort and print results
`,
    hints: [
      'Use an index-based for loop: for (Integer i = 0; i < territories.size(); i++)',
      'Get both values: String territory = territories[i]; Decimal amount = amounts[i];',
      'Check if key exists before adding: if (revenueByTerritory.containsKey(territory)) {',
      '  revenueByTerritory.put(territory, revenueByTerritory.get(territory) + amount);',
      '} else { revenueByTerritory.put(territory, amount); }',
      'To sort and print: List<String> keys = new List<String>(revenueByTerritory.keySet()); keys.sort();',
    ],
    solution: `List<String> territories = new List<String>{
    'West', 'East', 'West', 'Central', 'East', 'West', 'Central', 'East'
};
List<Decimal> amounts = new List<Decimal>{
    15000, 8000, 22000, 5000, 31000, 7500, 18000, 12000
};

Map<String, Decimal> revenueByTerritory = new Map<String, Decimal>();

for (Integer i = 0; i < territories.size(); i++) {
    String territory = territories[i];
    Decimal amount = amounts[i];
    if (revenueByTerritory.containsKey(territory)) {
        revenueByTerritory.put(territory, revenueByTerritory.get(territory) + amount);
    } else {
        revenueByTerritory.put(territory, amount);
    }
}

List<String> keys = new List<String>(revenueByTerritory.keySet());
keys.sort();
for (String key : keys) {
    System.debug(key + ': $' + revenueByTerritory.get(key));
}`,
    solutionExplanation: 'We use an index-based for loop to access both lists simultaneously. For each territory, we check if it already exists in the map and either add to the existing total or create a new entry. Finally, we sort the keys for consistent output.',
    testCases: [
      {
        id: 'tc1',
        description: 'Creates a Map<String, Decimal>',
        pattern: 'Map<String,\\s*Decimal>',
        errorMessage: 'Create a Map<String, Decimal> to store revenue by territory.',
      },
      {
        id: 'tc2',
        description: 'Uses indexed for loop',
        pattern: 'for\\s*\\(\\s*Integer\\s+i',
        errorMessage: 'Use an indexed for loop (for Integer i = 0...) to access both lists.',
      },
      {
        id: 'tc3',
        description: 'Uses containsKey or handles existing keys',
        pattern: 'containsKey\\(|getOrDefault\\(',
        errorMessage: 'Check if the territory already exists in the map before adding.',
      },
      {
        id: 'tc4',
        description: 'Prints results',
        pattern: 'System\\.debug\\(',
        errorMessage: 'Print the results for each territory.',
      },
    ],
  },
  {
    id: 'challenge-classes',
    lessonId: 'apex-classes',
    title: 'Account Credit Evaluator',
    description: 'Build an Apex class that evaluates whether an Account qualifies for different credit tiers.',
    difficulty: 'beginner',
    instructions: [
      'Create a class called AccountCreditEvaluator',
      'It should have properties: accountName (String), annualRevenue (Decimal), yearsInBusiness (Integer)',
      'Add a constructor that accepts all three values',
      'Add a method getCreditTier() that returns a String:',
      '  - "Platinum" if revenue >= 1M AND years >= 10',
      '  - "Gold" if revenue >= 500K AND years >= 5',
      '  - "Silver" if revenue >= 100K',
      '  - "Standard" otherwise',
      'Add a method getSummary() that returns a formatted string',
      'Create an instance and test it',
    ],
    starterCode: `// TODO: Create AccountCreditEvaluator class with:
// - Properties: accountName, annualRevenue, yearsInBusiness
// - Constructor(String name, Decimal revenue, Integer years)
// - String getCreditTier() method
// - String getSummary() method

// Test your class:
// AccountCreditEvaluator evaluator = new AccountCreditEvaluator('Acme Corp', 750000, 8);
// System.debug(evaluator.getCreditTier());  // Should print: Gold
// System.debug(evaluator.getSummary());
`,
    hints: [
      'Start with: public class AccountCreditEvaluator {',
      'Declare properties before the constructor: public String accountName;',
      'Constructor: public AccountCreditEvaluator(String name, Decimal revenue, Integer years) {',
      'In getCreditTier(), use if/else if with && to combine conditions',
      'In getSummary(), combine properties into a formatted String',
    ],
    solution: `public class AccountCreditEvaluator {

    public String accountName;
    public Decimal annualRevenue;
    public Integer yearsInBusiness;

    public AccountCreditEvaluator(String name, Decimal revenue, Integer years) {
        this.accountName = name;
        this.annualRevenue = revenue;
        this.yearsInBusiness = years;
    }

    public String getCreditTier() {
        if (annualRevenue >= 1000000 && yearsInBusiness >= 10) {
            return 'Platinum';
        } else if (annualRevenue >= 500000 && yearsInBusiness >= 5) {
            return 'Gold';
        } else if (annualRevenue >= 100000) {
            return 'Silver';
        } else {
            return 'Standard';
        }
    }

    public String getSummary() {
        return accountName + ' | Revenue: $' + annualRevenue
            + ' | Years: ' + yearsInBusiness
            + ' | Tier: ' + getCreditTier();
    }
}

AccountCreditEvaluator evaluator = new AccountCreditEvaluator('Acme Corp', 750000, 8);
System.debug(evaluator.getCreditTier());
System.debug(evaluator.getSummary());`,
    solutionExplanation: 'The class bundles three related properties with methods to process them. getCreditTier() uses compound conditions (&&) to evaluate multiple criteria. getSummary() reuses getCreditTier() rather than duplicating the logic.',
    testCases: [
      {
        id: 'tc1',
        description: 'Defines a class',
        pattern: 'public\\s+class\\s+\\w+',
        errorMessage: 'Define a public class using: public class ClassName {',
      },
      {
        id: 'tc2',
        description: 'Has a constructor',
        pattern: 'public\\s+\\w+\\s*\\([^)]+\\)\\s*\\{',
        errorMessage: 'Add a constructor that accepts the three values.',
      },
      {
        id: 'tc3',
        description: 'Has getCreditTier method',
        pattern: 'getCreditTier|creditTier',
        errorMessage: 'Add a method called getCreditTier() that returns the credit tier String.',
      },
      {
        id: 'tc4',
        description: 'Creates an instance with new',
        pattern: 'new\\s+\\w+\\(',
        errorMessage: 'Create an instance of your class using the new keyword.',
      },
    ],
  },
  {
    id: 'challenge-soql',
    lessonId: 'soql-basics',
    title: 'SOQL Query Builder',
    description: 'Write the correct SOQL queries to retrieve specific sets of Salesforce records.',
    difficulty: 'beginner',
    instructions: [
      'Write a SOQL query to get the top 5 Opportunities by Amount, Closed Won only, sorted descending',
      'Write a SOQL query to get all Contacts whose email ends with "@techcorp.com"',
      'Write a SOQL query to count all Accounts per Industry using GROUP BY',
      'Store each result in an appropriately typed variable',
    ],
    starterCode: `// Query 1: Top 5 Closed Won Opportunities by Amount (descending)
// Store result in: List<Opportunity> topDeals
// TODO:


// Query 2: Contacts with email ending in @techcorp.com
// Store result in: List<Contact> techContacts
// TODO:


// Query 3: Count Accounts by Industry using aggregate query
// Store result in: AggregateResult[] industryCount
// TODO:

`,
    hints: [
      'Query 1: [SELECT Id, Name, Amount FROM Opportunity WHERE StageName = \'Closed Won\' ORDER BY Amount DESC LIMIT 5]',
      'Query 2: For LIKE with ending pattern use \'%@techcorp.com\'',
      'Query 3: SELECT Industry, COUNT(Id) cnt FROM Account GROUP BY Industry',
      'Access aggregate result: String industry = (String) result.get(\'Industry\');',
    ],
    solution: `// Query 1: Top 5 Closed Won Opportunities by Amount
List<Opportunity> topDeals = [
    SELECT Id, Name, Amount, CloseDate
    FROM Opportunity
    WHERE StageName = 'Closed Won'
    ORDER BY Amount DESC
    LIMIT 5
];
System.debug('Top deals: ' + topDeals.size());

// Query 2: Contacts with techcorp.com emails
List<Contact> techContacts = [
    SELECT Id, FirstName, LastName, Email
    FROM Contact
    WHERE Email LIKE '%@techcorp.com'
    LIMIT 100
];
System.debug('Tech contacts: ' + techContacts.size());

// Query 3: Count by industry
AggregateResult[] industryCount = [
    SELECT Industry, COUNT(Id) cnt
    FROM Account
    WHERE Industry != null
    GROUP BY Industry
    ORDER BY COUNT(Id) DESC
];
for (AggregateResult ar : industryCount) {
    System.debug(ar.get('Industry') + ': ' + ar.get('cnt'));
}`,
    solutionExplanation: 'Query 1 uses ORDER BY Amount DESC to sort largest first, LIMIT 5 caps results. Query 2 uses LIKE with % at the start to match any prefix before @techcorp.com. Query 3 uses GROUP BY with COUNT(Id) — a common pattern for reporting.',
    testCases: [
      {
        id: 'tc1',
        description: 'Uses ORDER BY ... DESC',
        pattern: 'ORDER\\s+BY.+DESC',
        errorMessage: 'Sort the Opportunities using ORDER BY Amount DESC.',
      },
      {
        id: 'tc2',
        description: 'Uses LIMIT 5',
        pattern: 'LIMIT\\s+5',
        errorMessage: 'Limit the Opportunity results to 5 using LIMIT 5.',
      },
      {
        id: 'tc3',
        description: 'Uses LIKE for email matching',
        pattern: 'LIKE\\s+\'%@',
        errorMessage: 'Use the LIKE operator with % wildcard to match the email domain.',
      },
      {
        id: 'tc4',
        description: 'Uses GROUP BY for aggregation',
        pattern: 'GROUP\\s+BY',
        errorMessage: 'Use GROUP BY with COUNT() to aggregate accounts by industry.',
      },
    ],
  },
  {
    id: 'challenge-dml',
    lessonId: 'apex-dml',
    title: 'Bulk Account Creator',
    description: 'Write Apex code to create 5 Account records in a single bulk DML operation and handle any errors.',
    difficulty: 'beginner',
    instructions: [
      'Create a List<Account> with 5 Account records',
      'Each account should have: Name, Industry, Phone, and AnnualRevenue',
      'Use industries: Technology, Healthcare, Finance, Retail, Manufacturing',
      'Insert all 5 accounts in a SINGLE insert statement (not in a loop)',
      'After insert, print each account\'s Name and newly assigned Id',
      'Wrap the insert in try/catch to handle DmlException',
    ],
    starterCode: `List<Account> accountsToCreate = new List<Account>();

// TODO: Add 5 Account records to accountsToCreate
// Each should have Name, Industry, Phone, and AnnualRevenue

// TODO: Insert all accounts in ONE statement (not in a loop)

// TODO: Print each account's Name and Id after insert

// TODO: Wrap in try/catch for DmlException
`,
    hints: [
      'Create an Account: new Account(Name = \'Acme\', Industry = \'Technology\', Phone = \'415-555-0100\', AnnualRevenue = 500000)',
      'Add to list: accountsToCreate.add(new Account(...));',
      'Bulk insert: insert accountsToCreate; (OUTSIDE any loop!)',
      'After insert, loop to print: for (Account a : accountsToCreate) { System.debug(a.Name + \': \' + a.Id); }',
      'Catch DML errors: catch (DmlException e) { System.debug(\'Error: \' + e.getMessage()); }',
    ],
    solution: `List<Account> accountsToCreate = new List<Account>{
    new Account(Name = 'TechVentures Inc', Industry = 'Technology',
                Phone = '415-555-0101', AnnualRevenue = 5000000),
    new Account(Name = 'HealthFirst Corp', Industry = 'Healthcare',
                Phone = '212-555-0102', AnnualRevenue = 8000000),
    new Account(Name = 'Capital Group', Industry = 'Finance',
                Phone = '312-555-0103', AnnualRevenue = 12000000),
    new Account(Name = 'RetailMax', Industry = 'Retail',
                Phone = '617-555-0104', AnnualRevenue = 3000000),
    new Account(Name = 'ManuPro Industries', Industry = 'Manufacturing',
                Phone = '713-555-0105', AnnualRevenue = 6500000)
};

try {
    insert accountsToCreate;
    System.debug('Successfully created ' + accountsToCreate.size() + ' accounts:');
    for (Account a : accountsToCreate) {
        System.debug(a.Name + ' -> ID: ' + a.Id);
    }
} catch (DmlException e) {
    System.debug('DML Error: ' + e.getMessage());
}`,
    solutionExplanation: 'We create all Account objects first, then insert them all at once with a single DML statement. This is the bulkification pattern — one DML call for many records is far more efficient than one call per record. After insert, each account\'s Id is automatically populated by Salesforce.',
    testCases: [
      {
        id: 'tc1',
        description: 'Creates a List<Account>',
        pattern: 'List<Account>',
        errorMessage: 'Create a List<Account> to hold the accounts before inserting.',
      },
      {
        id: 'tc2',
        description: 'Adds accounts to list',
        pattern: '\\.add\\(new\\s+Account|new\\s+Account\\(Name',
        errorMessage: 'Add Account objects to your list.',
      },
      {
        id: 'tc3',
        description: 'Uses single insert statement',
        pattern: 'insert\\s+\\w+',
        errorMessage: 'Use a single "insert list;" statement outside of any loop.',
      },
      {
        id: 'tc4',
        description: 'Wraps in try/catch',
        pattern: 'try\\s*\\{|catch\\s*\\(',
        errorMessage: 'Wrap the insert in a try/catch block to handle DmlException.',
      },
      {
        id: 'tc5',
        description: 'Prints account IDs after insert',
        pattern: '\\.Id',
        errorMessage: 'Print each account\'s .Id after the insert to confirm it was populated.',
      },
    ],
  },
];

export const getChallengeById = (id: string): Challenge | undefined =>
  challenges.find(c => c.id === id);

export const getChallengeByLessonId = (lessonId: string): Challenge | undefined =>
  challenges.find(c => c.lessonId === lessonId);
