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
        description: 'System.debug() prints the variable values',
        pattern: 'System\\.debug\\(',
        errorMessage: 'Use System.debug() to print the summary — e.g. System.debug(summary) or System.debug(\'Contact: \' + fullName + ...).',
      },
    ],
    scenarios: [
      {
        id: 's1',
        label: 'Variable Output',
        inputDisplay: '(no inputs — your code uses hardcoded values)',
        inputs: {},
        expectedOutput: ['Contact:', 'Age:'],
      },
      {
        id: 's2',
        label: 'All Types Present',
        inputDisplay: '(checks String, Integer, Decimal, Boolean, Date all declared and printed)',
        inputs: {},
        expectedOutput: ['Salary:', 'VIP:'],
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
        description: 'Extracts username with substring()',
        pattern: 'substring\\(\\s*0\\s*,',
        errorMessage: 'Extract the username using .substring(0, atPos) — the part before the @.',
      },
      {
        id: 'tc5',
        description: 'Extracts domain with substring()',
        pattern: 'substring\\(\\s*atPos\\s*\\+\\s*1\\s*\\)',
        errorMessage: 'Extract the domain using .substring(atPos + 1) — the part after the @.',
      },
      {
        id: 'tc6',
        description: 'Prints username and domain with System.debug()',
        pattern: 'System\\.debug\\([^)]*[Uu]sername[^)]*[Dd]omain',
        errorMessage: 'Print both the username and domain using System.debug(), e.g. "Username: ... | Domain: ..."',
      },
    ],
    scenarios: [
      {
        id: 's1',
        label: 'Valid Email',
        inputDisplay: "rawEmail = '  JOHN.DOE@ExAmPlE.CoM  '",
        inputs: {},
        expectedOutput: ['Username: john.doe', 'Domain: example.com'],
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
        description: 'Checks accountTier in a condition',
        pattern: 'accountTier\\s*==',
        errorMessage: 'Your code must compare accountTier using ==, e.g. accountTier == \'Gold\'.',
      },
      {
        id: 'tc3',
        description: 'Checks amount threshold',
        pattern: 'amount\\s*>\\s*50000',
        errorMessage: 'You need to check if amount > 50000 to apply the higher discount.',
      },
      {
        id: 'tc4',
        description: 'Declares finalPrice variable with formula',
        pattern: 'Decimal\\s+finalPrice|finalPrice\\s*=\\s*amount\\s*\\*',
        errorMessage: 'Declare a Decimal finalPrice and calculate it using the discount formula: amount * (1 - discountPct/100).',
      },
      {
        id: 'tc5',
        description: 'Prints discount and final price',
        pattern: 'System\\.debug\\([^)]*[Dd]iscount',
        errorMessage: 'Print the result with System.debug() showing both the discount and final price.',
      },
    ],
    scenarios: [
      {
        id: 's1',
        label: 'Gold + $75,000',
        inputDisplay: "amount = 75000, accountTier = 'Gold'",
        inputs: {},
        expectedOutput: ['Discount: 15', 'Final Price'],
      },
      {
        id: 's2',
        label: 'Enterprise + $30,000',
        inputDisplay: "amount = 30000, accountTier = 'Enterprise' (expected: 15% discount)",
        inputs: {},
        expectedOutput: ['Discount:', 'Final Price'],
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
        description: 'Counts large deals over $10,000',
        pattern: 'largeDealCount\\s*\\+\\+|largeDealCount\\s*\\+=\\s*1',
        errorMessage: 'Increment largeDealCount inside the loop when amount > 10000.',
      },
      {
        id: 'tc4',
        description: 'Tracks the largest deal with a comparison',
        pattern: 'if\\s*\\(\\s*amount\\s*>\\s*largestDeal\\s*\\)',
        errorMessage: 'Compare each amount to largestDeal inside the loop and update largestDeal when it is bigger.',
      },
      {
        id: 'tc5',
        description: 'Prints all five summary results',
        pattern: 'System\\.debug\\([^)]*averageDeal',
        errorMessage: 'Print all results including the average deal amount using System.debug().',
      },
    ],
    scenarios: [
      {
        id: 's1',
        label: 'Sales Dataset',
        inputDisplay: 'dealAmounts = {5000, 12000, 3500, 25000, 8000, 47000, 1500, 33000}',
        inputs: {},
        expectedOutput: ['Total Revenue', 'Deal Count', 'Large Deals'],
      },
      {
        id: 's2',
        label: 'Revenue Total',
        inputDisplay: 'sum of all 8 deals = $135,000',
        inputs: {},
        expectedOutput: ['135000'],
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
        description: 'Creates a filtered list and uses a loop',
        pattern: 'for\\s*\\(',
        errorMessage: 'Use a for or for-each loop to iterate through the contacts list.',
      },
      {
        id: 'tc2',
        description: 'Checks the first letter of each name',
        pattern: 'substring\\s*\\(\\s*0\\s*,\\s*1\\s*\\)',
        errorMessage: 'Extract the first letter using .substring(0, 1) to check if it is a vowel.',
      },
      {
        id: 'tc3',
        description: 'Checks first letter and adds vowel names',
        pattern: 'vowelNames\\.add\\(',
        errorMessage: 'Add matching names to vowelNames using vowelNames.add(name) inside the loop.',
      },
      {
        id: 'tc4',
        description: 'Sorts the filtered list',
        pattern: 'vowelNames\\.sort\\(\\)',
        errorMessage: 'Sort the filtered list using vowelNames.sort().',
      },
      {
        id: 'tc5',
        description: 'Prints the count and each vowel name',
        pattern: 'System\\.debug\\([^)]*vowelNames',
        errorMessage: 'Print the vowelNames count and each name using System.debug().',
      },
    ],
    scenarios: [
      {
        id: 's1',
        label: 'Vowel Filter',
        inputDisplay: "contacts = ['Alice Zhang', 'Bob Smith', 'Carol Lee', 'David Kim', 'Eve Johnson']",
        inputs: {},
        expectedOutput: ['Vowel-starting contacts: 2'],
      },
      {
        id: 's2',
        label: 'Names Listed',
        inputDisplay: 'Alice and Eve should appear in sorted output',
        inputs: {},
        expectedOutput: ['Alice', 'Eve'],
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
    scenarios: [
      {
        id: 's1',
        label: 'Dedup Source A',
        inputDisplay: "sourceA = ['vip','tech','enterprise','renewal','tech'] → 4 unique tags",
        inputs: {},
        expectedOutput: ['Source A unique tags: 4'],
      },
      {
        id: 's2',
        label: 'Dedup Source B',
        inputDisplay: "sourceB = ['sme','tech','startup','vip','sme'] → 3 unique tags",
        inputs: {},
        expectedOutput: ['Source B unique tags: 3'],
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
        description: 'Uses indexed for loop to iterate both lists',
        pattern: 'for\\s*\\(\\s*Integer\\s+i',
        errorMessage: 'Use an indexed for loop (for (Integer i = 0; i < territories.size(); i++)) to iterate both lists together.',
      },
      {
        id: 'tc2',
        description: 'Puts territory revenue into the map',
        pattern: 'revenueByTerritory\\.put\\(',
        errorMessage: 'Use revenueByTerritory.put(territory, amount) to store each territory\'s revenue.',
      },
      {
        id: 'tc3',
        description: 'Uses containsKey or handles existing keys',
        pattern: 'containsKey\\(|getOrDefault\\(',
        errorMessage: 'Check if the territory already exists in the map before adding.',
      },
      {
        id: 'tc4',
        description: 'Prints territory and revenue using the map',
        pattern: 'System\\.debug\\([^)]*revenueByTerritory\\.get\\(',
        errorMessage: 'Print each territory and its revenue using revenueByTerritory.get(key) inside a loop.',
      },
    ],
    scenarios: [
      {
        id: 's1',
        label: 'West Territory',
        inputDisplay: '8 deals: West $44,500 | East $51,000 | Central $23,000',
        inputs: {},
        expectedOutput: ['West', 'East', 'Central'],
      },
      {
        id: 's2',
        label: 'West Total',
        inputDisplay: 'West has deals: 15000 + 22000 + 7500 = $44,500',
        inputs: {},
        expectedOutput: ['44500'],
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
        description: 'Defines class named AccountCreditEvaluator',
        pattern: 'public\\s+class\\s+AccountCreditEvaluator',
        errorMessage: 'Define the class with: public class AccountCreditEvaluator {',
      },
      {
        id: 'tc2',
        description: 'Has a constructor accepting name, revenue, years',
        pattern: 'public\\s+AccountCreditEvaluator\\s*\\(\\s*String\\s+\\w+\\s*,\\s*Decimal\\s+\\w+\\s*,\\s*Integer\\s+\\w+',
        errorMessage: 'Add a constructor: public AccountCreditEvaluator(String name, Decimal revenue, Integer years) { ... }',
      },
      {
        id: 'tc3',
        description: 'getCreditTier() returns a tier string based on revenue',
        pattern: 'public\\s+String\\s+getCreditTier\\s*\\(\\s*\\)',
        errorMessage: 'Add a method: public String getCreditTier() that returns Platinum, Gold, Silver, or Standard.',
      },
      {
        id: 'tc4',
        description: 'Creates an instance of AccountCreditEvaluator with new',
        pattern: 'new\\s+AccountCreditEvaluator\\s*\\(',
        errorMessage: 'Create an instance with: new AccountCreditEvaluator(name, revenue, years)',
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
        description: 'Adds Account records to the list',
        pattern: '\\.add\\(new\\s+Account|new\\s+Account\\(Name',
        errorMessage: 'Add Account objects to your list using accountsToCreate.add(new Account(...)).',
      },
      {
        id: 'tc2',
        description: 'Each Account has a Name field set',
        pattern: 'new\\s+Account\\s*\\([^)]*Name\\s*=',
        errorMessage: 'Create Account objects with at least a Name field: new Account(Name = \'...\', ...)',
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
        description: 'Prints each account Name and Id after insert',
        pattern: 'System\\.debug\\([^)]*\\.Name[^)]*\\.Id|System\\.debug\\([^)]*\\.Id[^)]*\\.Name',
        errorMessage: 'Loop through the accounts after insert and print both a.Name and a.Id using System.debug().',
      },
    ],
  },
  {
    id: 'challenge-lwc-data-binding',
    lessonId: 'lwc-data-binding',
    title: 'Interactive Discount Calculator',
    description: 'Build an LWC component that lets users enter a price and discount, then computes and displays the final price using getters.',
    difficulty: 'intermediate',
    instructions: [
      'Create an LWC component with properties: price (default 0), discountPct (default 0)',
      'Add event handlers: handlePriceChange and handleDiscountChange that update the properties from input values',
      'Add a getter "finalPrice" that computes: price * (1 - discountPct / 100), rounded to 2 decimals',
      'Add a getter "savings" that computes: price - finalPrice',
      'Display the original price, discount %, savings, and final price in the template',
      'Use lightning-input components for the price and discount inputs',
    ],
    starterCode: `// discountCalculator.js
import { LightningElement } from 'lwc';

export default class DiscountCalculator extends LightningElement {
    // TODO: Define price and discountPct properties
    // TODO: Add handlePriceChange event handler
    // TODO: Add handleDiscountChange event handler
    // TODO: Add finalPrice getter
    // TODO: Add savings getter
}

<!-- discountCalculator.html -->
<template>
    <lightning-card title="Discount Calculator">
        <div class="slds-p-around_medium">
            <!-- TODO: Add two lightning-input fields for price and discount -->
            <!-- TODO: Display finalPrice and savings -->
        </div>
    </lightning-card>
</template>
`,
    hints: [
      'Properties: price = 0; discountPct = 0;',
      'Handler: handlePriceChange(event) { this.price = parseFloat(event.target.value) || 0; }',
      'Getter: get finalPrice() { return (this.price * (1 - this.discountPct / 100)).toFixed(2); }',
      'Getter: get savings() { return (this.price - this.finalPrice).toFixed(2); }',
      'Template input: <lightning-input type="number" label="Price" value={price} onchange={handlePriceChange}></lightning-input>',
    ],
    solution: `// discountCalculator.js
import { LightningElement } from 'lwc';

export default class DiscountCalculator extends LightningElement {
    price = 0;
    discountPct = 0;

    handlePriceChange(event) {
        this.price = parseFloat(event.target.value) || 0;
    }

    handleDiscountChange(event) {
        this.discountPct = parseFloat(event.target.value) || 0;
    }

    get finalPrice() {
        return (this.price * (1 - this.discountPct / 100)).toFixed(2);
    }

    get savings() {
        return (this.price - this.finalPrice).toFixed(2);
    }
}

<!-- discountCalculator.html -->
<template>
    <lightning-card title="Discount Calculator">
        <div class="slds-p-around_medium">
            <lightning-input type="number" label="Original Price"
                value={price} onchange={handlePriceChange}></lightning-input>
            <lightning-input type="number" label="Discount %"
                value={discountPct} onchange={handleDiscountChange}></lightning-input>
            <div class="slds-m-top_medium">
                <p>Original: \${price}</p>
                <p>Savings: \${savings}</p>
                <p><strong>Final Price: \${finalPrice}</strong></p>
            </div>
        </div>
    </lightning-card>
</template>`,
    solutionExplanation: 'Properties price and discountPct are reactive primitives. Event handlers update them via this.price = ... and this.discountPct = ..., triggering a re-render. Getters finalPrice and savings compute derived values on demand, keeping the template clean.',
    testCases: [
      {
        id: 'tc1',
        description: 'Has price and discountPct properties',
        pattern: 'price\\s*=|discountPct\\s*=',
        errorMessage: 'Define price and discountPct properties in your class.',
      },
      {
        id: 'tc2',
        description: 'Has handlePriceChange event handler',
        pattern: 'handlePriceChange|handlePrice',
        errorMessage: 'Add an event handler method for price changes.',
      },
      {
        id: 'tc3',
        description: 'Has finalPrice getter',
        pattern: 'get\\s+finalPrice',
        errorMessage: 'Add a getter named finalPrice to compute the discounted price.',
      },
      {
        id: 'tc4',
        description: 'Uses event.target.value in handler',
        pattern: 'event\\.target\\.value|event\\.detail\\.value',
        errorMessage: 'Use event.target.value (or event.detail.value) to read the input value.',
      },
    ],
  },
  {
    id: 'challenge-apex-callouts',
    lessonId: 'apex-callouts',
    title: 'User Profile Fetcher',
    description: 'Write an Apex class that makes a GET callout to a mock user API, checks the status code, and parses the JSON response.',
    difficulty: 'intermediate',
    instructions: [
      'Create a class UserApiService with a static method getUserName(String userId)',
      'Build an HttpRequest with GET method to: https://jsonplaceholder.typicode.com/users/' + 'userId',
      'Set the Accept header to application/json',
      'Send the request with new Http().send(req)',
      'If status code is 200, parse the JSON body and return the "name" field',
      'If status code is not 200, throw a CalloutException with a helpful message',
    ],
    starterCode: `public class UserApiService {

    public static String getUserName(String userId) {
        // TODO: Create HttpRequest
        // TODO: Set endpoint, method, and headers
        // TODO: Send the request
        // TODO: Check status code
        // TODO: If 200, parse JSON and return name
        // TODO: Otherwise throw CalloutException
        return null;
    }
}
`,
    hints: [
      'HttpRequest req = new HttpRequest();',
      'req.setEndpoint(\'https://jsonplaceholder.typicode.com/users/\' + userId);',
      'req.setMethod(\'GET\'); req.setHeader(\'Accept\', \'application/json\');',
      'HttpResponse res = new Http().send(req);',
      'if (res.getStatusCode() == 200) { Map<String, Object> data = (Map<String, Object>) JSON.deserializeUntyped(res.getBody()); return (String) data.get(\'name\'); }',
      'throw new CalloutException(\'Failed: \' + res.getStatusCode());',
    ],
    solution: `public class UserApiService {

    public static String getUserName(String userId) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://jsonplaceholder.typicode.com/users/' + userId);
        req.setMethod('GET');
        req.setHeader('Accept', 'application/json');

        HttpResponse res = new Http().send(req);

        if (res.getStatusCode() == 200) {
            Map<String, Object> data = (Map<String, Object>)
                JSON.deserializeUntyped(res.getBody());
            return (String) data.get('name');
        }
        throw new CalloutException('API error: ' + res.getStatusCode() + ' ' + res.getStatus());
    }
}`,
    solutionExplanation: 'We configure the request (endpoint, method, header), send it, then check the status code before parsing. deserializeUntyped returns a Map<String, Object> which we cast to access fields. The CalloutException on non-200 gives callers a clear error.',
    testCases: [
      {
        id: 'tc1',
        description: 'Creates an HttpRequest',
        pattern: 'new\\s+HttpRequest\\(\\)',
        errorMessage: 'Create an HttpRequest instance.',
      },
      {
        id: 'tc2',
        description: 'Sets method to GET',
        pattern: 'setMethod\\s*\\(\\s*\'GET\'',
        errorMessage: 'Set the HTTP method to GET using req.setMethod(\'GET\').',
      },
      {
        id: 'tc3',
        description: 'Sends request with Http().send()',
        pattern: 'new\\s+Http\\(\\)\\.send\\(',
        errorMessage: 'Send the request using new Http().send(req).',
      },
      {
        id: 'tc4',
        description: 'Checks status code 200',
        pattern: 'getStatusCode\\(\\)\\s*==\\s*200',
        errorMessage: 'Check if res.getStatusCode() == 200 before parsing the response body.',
      },
      {
        id: 'tc5',
        description: 'Parses JSON response',
        pattern: 'JSON\\.deserializeUntyped|JSON\\.deserialize',
        errorMessage: 'Use JSON.deserializeUntyped() to parse the response body.',
      },
    ],
  },
  {
    id: 'challenge-triggers-handler',
    lessonId: 'apex-triggers-handler',
    title: 'Build a Contact Trigger Handler',
    description: 'Implement the trigger handler pattern for the Contact object — a thin trigger and a separate handler class.',
    difficulty: 'intermediate',
    instructions: [
      'Create a trigger named ContactTrigger on Contact for before insert and before update',
      'The trigger should instantiate a ContactTriggerHandler and delegate to beforeInsert() or beforeUpdate()',
      'Create class ContactTriggerHandler with a constructor that accepts List<Contact> and Map<Id,Contact>',
      'beforeInsert(): if Email is blank, set it to "noemail@placeholder.com"',
      'beforeUpdate(): if Phone changed, set Description to "Phone updated on " + Date.today()',
    ],
    starterCode: `// ContactTrigger.trigger
trigger ContactTrigger on Contact (before insert, before update) {
    // TODO: Instantiate ContactTriggerHandler and delegate
}

// ContactTriggerHandler.cls
public class ContactTriggerHandler {
    private List<Contact> newRecords;
    private Map<Id, Contact> oldMap;

    // TODO: Constructor
    // TODO: beforeInsert() method
    // TODO: beforeUpdate() method
}
`,
    hints: [
      'Trigger body: ContactTriggerHandler h = new ContactTriggerHandler(Trigger.new, Trigger.oldMap);',
      'Then: if (Trigger.isBefore && Trigger.isInsert) h.beforeInsert();',
      'Constructor: this.newRecords = newRecs; this.oldMap = oldMap != null ? oldMap : new Map<Id,Contact>();',
      'beforeInsert: for (Contact c : newRecords) { if (String.isBlank(c.Email)) c.Email = \'noemail@placeholder.com\'; }',
      'beforeUpdate: Contact old = oldMap.get(c.Id); if (c.Phone != old.Phone) c.Description = \'Phone updated on \' + Date.today();',
    ],
    solution: `trigger ContactTrigger on Contact (before insert, before update) {
    ContactTriggerHandler handler = new ContactTriggerHandler(Trigger.new, Trigger.oldMap);
    if (Trigger.isBefore) {
        if (Trigger.isInsert) handler.beforeInsert();
        if (Trigger.isUpdate) handler.beforeUpdate();
    }
}

public class ContactTriggerHandler {
    private List<Contact> newRecords;
    private Map<Id, Contact> oldMap;

    public ContactTriggerHandler(List<Contact> newRecs, Map<Id, Contact> oldMap) {
        this.newRecords = newRecs;
        this.oldMap = oldMap != null ? oldMap : new Map<Id, Contact>();
    }

    public void beforeInsert() {
        for (Contact c : newRecords) {
            if (String.isBlank(c.Email)) {
                c.Email = 'noemail@placeholder.com';
            }
        }
    }

    public void beforeUpdate() {
        for (Contact c : newRecords) {
            Contact old = oldMap.get(c.Id);
            if (c.Phone != old.Phone) {
                c.Description = 'Phone updated on ' + Date.today();
            }
        }
    }
}`,
    solutionExplanation: 'The trigger is a thin router that delegates to the handler class. The handler receives context data via its constructor and exposes one method per trigger event. All logic lives in the handler — making it independently testable.',
    testCases: [
      {
        id: 'tc1',
        description: 'Trigger instantiates the handler class',
        pattern: 'new\\s+ContactTriggerHandler',
        errorMessage: 'The trigger should instantiate a ContactTriggerHandler.',
      },
      {
        id: 'tc2',
        description: 'Handler class has a constructor',
        pattern: 'public\\s+ContactTriggerHandler\\s*\\(',
        errorMessage: 'Add a public constructor to ContactTriggerHandler that accepts the trigger lists.',
      },
      {
        id: 'tc3',
        description: 'beforeInsert method exists',
        pattern: 'public\\s+void\\s+beforeInsert',
        errorMessage: 'Add a public void beforeInsert() method to the handler.',
      },
      {
        id: 'tc4',
        description: 'beforeUpdate method exists',
        pattern: 'public\\s+void\\s+beforeUpdate',
        errorMessage: 'Add a public void beforeUpdate() method to the handler.',
      },
    ],
  },
  {
    id: 'challenge-lwc-intro',
    lessonId: 'lwc-intro',
    title: 'Product Card Component',
    description: 'Build an LWC component that displays a list of product cards with name, price, and availability status.',
    difficulty: 'beginner',
    instructions: [
      'Create an LWC component with a products array (defined in JS)',
      'Each product object has: id, name, price (Decimal), inStock (Boolean)',
      'Use for:each in the template to render each product',
      'Show "In Stock" if inStock is true, "Out of Stock" if false (use if:true / if:false)',
      'Display the product name and price in each item',
      'Use key={product.id} on the repeated element',
    ],
    starterCode: `// productCards.js
import { LightningElement } from 'lwc';

export default class ProductCards extends LightningElement {
    // TODO: Define a products array with at least 3 products
    // Each product: { id, name, price, inStock }

    products = [
        // TODO: add product objects here
    ];
}

<!-- productCards.html -->
<template>
    <lightning-card title="Products">
        <div class="slds-p-around_medium">
            <!-- TODO: Use for:each to render each product -->
            <!-- Show name, price, and In Stock / Out of Stock -->
        </div>
    </lightning-card>
</template>
`,
    hints: [
      'Product object: { id: \'1\', name: \'Widget A\', price: 29.99, inStock: true }',
      'for:each syntax: <template for:each={products} for:item="product">',
      'Each repeated element needs: key={product.id}',
      'Conditional: <template if:true={product.inStock}><span>In Stock</span></template>',
      'Price display: {product.price}',
    ],
    solution: `// productCards.js
import { LightningElement } from 'lwc';

export default class ProductCards extends LightningElement {
    products = [
        { id: '1', name: 'Widget A', price: 29.99, inStock: true },
        { id: '2', name: 'Gadget Pro', price: 149.99, inStock: false },
        { id: '3', name: 'Super Tool', price: 79.99, inStock: true },
    ];
}

<!-- productCards.html -->
<template>
    <lightning-card title="Products">
        <div class="slds-p-around_medium">
            <template for:each={products} for:item="product">
                <div key={product.id} class="slds-box slds-m-bottom_small">
                    <p><strong>{product.name}</strong></p>
                    <p>Price: \${product.price}</p>
                    <template if:true={product.inStock}>
                        <span class="slds-badge slds-badge_success">In Stock</span>
                    </template>
                    <template if:false={product.inStock}>
                        <span class="slds-badge">Out of Stock</span>
                    </template>
                </div>
            </template>
        </div>
    </lightning-card>
</template>`,
    solutionExplanation: 'We define the products array in the JS controller and use for:each in the template to iterate it. Each product card uses if:true and if:false to show the correct stock status. The key attribute on the repeated element is required for efficient DOM updates.',
    testCases: [
      {
        id: 'tc1',
        description: 'Defines products array with at least one item',
        pattern: 'products\\s*=\\s*\\[\\s*\\{',
        errorMessage: 'Define a products array in your class with at least one product object inside: products = [{ id: ..., name: ... }]',
      },
      {
        id: 'tc2',
        description: 'Uses for:each directive',
        pattern: 'for:each=\\{products\\}',
        errorMessage: 'Use for:each={products} in the template to render the list.',
      },
      {
        id: 'tc3',
        description: 'Uses for:item directive',
        pattern: 'for:item=',
        errorMessage: 'Add for:item="product" alongside for:each to name the loop variable.',
      },
      {
        id: 'tc4',
        description: 'Has key attribute on repeated element',
        pattern: 'key=\\{',
        errorMessage: 'Add key={product.id} to the element directly inside the for:each template.',
      },
      {
        id: 'tc5',
        description: 'Uses if:true or if:false for inStock',
        pattern: 'if:true=\\{|if:false=\\{',
        errorMessage: 'Use if:true or if:false to conditionally show In Stock / Out of Stock.',
      },
    ],
  },
  {
    id: 'challenge-triggers-intro',
    lessonId: 'apex-triggers-intro',
    title: 'Lead Auto-Enrichment Trigger',
    description: 'Write a before insert trigger on Lead that sets default field values when a new Lead is created.',
    difficulty: 'intermediate',
    instructions: [
      'Create a trigger named LeadTrigger on the Lead object for before insert',
      'If the Lead\'s LeadSource is blank, set it to "Web"',
      'If the Lead\'s Rating is null, set it to "Cold"',
      'If the Lead\'s Company is blank, set Company to "Unknown"',
      'Loop through Trigger.new and apply the defaults',
      'Do NOT use any DML statements (before trigger saves automatically)',
    ],
    starterCode: `// Write a before insert trigger on Lead
// Set defaults: LeadSource = 'Web', Rating = 'Cold', Company = 'Unknown'

trigger LeadTrigger on Lead (before insert) {
    // TODO: Loop through Trigger.new
    // TODO: Set LeadSource to 'Web' if blank
    // TODO: Set Rating to 'Cold' if null
    // TODO: Set Company to 'Unknown' if blank
}
`,
    hints: [
      'Use: for (Lead l : Trigger.new) { ... }',
      'Check blank: if (String.isBlank(l.LeadSource)) { l.LeadSource = \'Web\'; }',
      'Check null: if (l.Rating == null) { l.Rating = \'Cold\'; }',
      'No update or insert statement needed — before trigger changes are saved automatically',
    ],
    solution: `trigger LeadTrigger on Lead (before insert) {
    for (Lead l : Trigger.new) {
        if (String.isBlank(l.LeadSource)) {
            l.LeadSource = 'Web';
        }
        if (l.Rating == null) {
            l.Rating = 'Cold';
        }
        if (String.isBlank(l.Company)) {
            l.Company = 'Unknown';
        }
    }
}`,
    solutionExplanation: 'In a before insert trigger, we iterate Trigger.new and directly set field values. No update DML is needed — the platform automatically saves these modified values when the transaction completes.',
    testCases: [
      {
        id: 'tc1',
        description: 'Loops through Trigger.new',
        pattern: 'for\\s*\\(\\s*Lead\\s+\\w+\\s*:\\s*Trigger\\.new\\s*\\)',
        errorMessage: 'Loop through Trigger.new using a for-each: for (Lead l : Trigger.new)',
      },
      {
        id: 'tc2',
        description: 'Uses String.isBlank to check LeadSource',
        pattern: 'String\\.isBlank\\s*\\([^)]*LeadSource|isBlank\\s*\\([^)]*LeadSource',
        errorMessage: 'Check if LeadSource is blank using String.isBlank(l.LeadSource).',
      },
      {
        id: 'tc3',
        description: 'Sets LeadSource to Web when blank',
        pattern: 'LeadSource\\s*=\\s*\'Web\'',
        errorMessage: 'Set l.LeadSource = \'Web\' when it is blank.',
      },
      {
        id: 'tc4',
        description: 'Sets Rating to Cold when null',
        pattern: 'Rating\\s*=\\s*\'Cold\'',
        errorMessage: 'Set l.Rating = \'Cold\' when it is null.',
      },
      {
        id: 'tc5',
        description: 'Sets Company to Unknown when blank',
        pattern: 'Company\\s*=\\s*\'Unknown\'',
        errorMessage: 'Set l.Company = \'Unknown\' when it is blank. No DML needed in a before trigger.',
      },
    ],
  },
  {
    id: 'challenge-triggers-context',
    lessonId: 'apex-triggers-context',
    title: 'Opportunity Stage Change Tracker',
    description: 'Write a trigger that detects when an Opportunity\'s StageName changes and stamps a custom field with the previous stage.',
    difficulty: 'intermediate',
    instructions: [
      'Create a before update trigger on Opportunity',
      'Loop through Trigger.new',
      'For each opportunity, get the old version from Trigger.oldMap',
      'If StageName has changed, set the custom field Previous_Stage__c to the OLD stage name',
      'If StageName changed to "Closed Won", also set CloseDate to today if CloseDate is null',
    ],
    starterCode: `trigger OpportunityTrigger on Opportunity (before update) {
    for (Opportunity opp : Trigger.new) {
        // TODO: Get the old Opportunity from Trigger.oldMap
        // TODO: Check if StageName changed
        // TODO: If changed, set Previous_Stage__c to the old StageName
        // TODO: If new stage is 'Closed Won' and CloseDate is null, set CloseDate to today
    }
}
`,
    hints: [
      'Get old record: Opportunity old = Trigger.oldMap.get(opp.Id);',
      'Check field change: if (opp.StageName != old.StageName) { ... }',
      'Set previous stage: opp.Previous_Stage__c = old.StageName;',
      'Set close date: if (opp.StageName == \'Closed Won\' && opp.CloseDate == null) { opp.CloseDate = Date.today(); }',
    ],
    solution: `trigger OpportunityTrigger on Opportunity (before update) {
    for (Opportunity opp : Trigger.new) {
        Opportunity old = Trigger.oldMap.get(opp.Id);
        if (opp.StageName != old.StageName) {
            opp.Previous_Stage__c = old.StageName;
            if (opp.StageName == 'Closed Won' && opp.CloseDate == null) {
                opp.CloseDate = Date.today();
            }
        }
    }
}`,
    solutionExplanation: 'We access each record\'s previous values via Trigger.oldMap.get(opp.Id). Comparing the new StageName to the old one detects changes. All field assignments happen directly on Trigger.new records — no extra DML needed in a before trigger.',
    testCases: [
      {
        id: 'tc1',
        description: 'Uses Trigger.oldMap to get the old record',
        pattern: 'Trigger\\.oldMap\\.get\\(',
        errorMessage: 'Get the old Opportunity from Trigger.oldMap: Opportunity old = Trigger.oldMap.get(opp.Id);',
      },
      {
        id: 'tc2',
        description: 'Compares StageName old vs new',
        pattern: 'StageName\\s*!=',
        errorMessage: 'Compare opp.StageName to old.StageName to detect a stage change.',
      },
      {
        id: 'tc3',
        description: 'Compares StageName old vs new',
        pattern: 'StageName\\s*!=',
        errorMessage: 'Compare opp.StageName to old.StageName to detect a stage change.',
      },
      {
        id: 'tc4',
        description: 'Sets Previous_Stage__c to the old stage value',
        pattern: 'Previous_Stage__c\\s*=\\s*old\\.StageName',
        errorMessage: 'Set opp.Previous_Stage__c = old.StageName to record the previous stage.',
      },
    ],
  },
  // ─── APEX EXCEPTIONS CHALLENGE ───────────────────────────────────────────────
  {
    id: 'challenge-apex-exceptions',
    lessonId: 'apex-exception-handling',
    title: 'Build a Safe Account Lookup Service',
    description: 'Write an AccountLookupService class that gracefully handles missing records and reports errors instead of crashing.',
    difficulty: 'beginner',
    instructions: [
      'Create a public class AccountLookupService',
      'Add a custom inner exception class: AccountNotFoundException extending Exception',
      'Create a static method getAccountName(Id accountId) that returns a String',
      'Inside the method, use a try/catch block to query Account by Id',
      'If the query returns no results (QueryException), throw AccountNotFoundException with a descriptive message',
      'Add a finally block that logs "Lookup complete" with System.debug',
      'Return the account Name on success',
    ],
    starterCode: `public class AccountLookupService {

    // TODO: Define custom exception class here
    // public class ??? extends Exception {}

    public static String getAccountName(Id accountId) {
        // TODO: Implement try/catch/finally
        // try: query Account WHERE Id = :accountId LIMIT 1, return acc.Name
        // catch: QueryException -> throw AccountNotFoundException
        // finally: System.debug('Lookup complete')
    }
}`,
    solution: `public class AccountLookupService {

    public class AccountNotFoundException extends Exception {}

    public static String getAccountName(Id accountId) {
        try {
            Account acc = [SELECT Id, Name FROM Account WHERE Id = :accountId LIMIT 1];
            return acc.Name;
        } catch (QueryException e) {
            throw new AccountNotFoundException('Account not found: ' + accountId + ' - ' + e.getMessage());
        } finally {
            System.debug('Lookup complete');
        }
    }
}`,
    hints: [
      'Custom exceptions use: public class MyException extends Exception {}',
      'Catch QueryException specifically before the generic Exception',
      'The finally block runs even when you throw a new exception from catch',
      'Use accountId in the AccountNotFoundException message to help debugging',
    ],
    solutionExplanation: 'The key insight is using specific exception types in the right order: catch QueryException for missing records, then throw a custom AccountNotFoundException so callers get a meaningful error. The finally block always executes, making it ideal for cleanup and logging.',
    testCases: [
      {
        id: 'tc1',
        description: 'Defines custom AccountNotFoundException',
        pattern: 'AccountNotFoundException\\s+extends\\s+Exception',
        errorMessage: 'Define a custom inner class: public class AccountNotFoundException extends Exception {}',
      },
      {
        id: 'tc2',
        description: 'Uses try block with SOQL query',
        pattern: 'try\\s*\\{',
        errorMessage: 'Wrap the SOQL query in a try block.',
      },
      {
        id: 'tc3',
        description: 'Catches QueryException',
        pattern: 'catch\\s*\\(\\s*QueryException',
        errorMessage: 'Catch QueryException specifically to handle missing records.',
      },
      {
        id: 'tc4',
        description: 'Throws AccountNotFoundException from catch',
        pattern: 'throw\\s+new\\s+AccountNotFoundException',
        errorMessage: 'Throw a new AccountNotFoundException from the catch block.',
      },
      {
        id: 'tc5',
        description: 'Has finally block that logs Lookup complete',
        pattern: 'finally\\s*\\{[\\s\\S]*?System\\.debug\\([^)]*[Ll]ookup',
        errorMessage: 'Add a finally block with System.debug(\'Lookup complete\') — it runs whether the query succeeds or fails.',
      },
    ],
  },
  // ─── APEX TEST BASICS CHALLENGE ───────────────────────────────────────────────
  {
    id: 'challenge-apex-test-basics',
    lessonId: 'apex-test-basics',
    title: 'Write Tests for a Discount Calculator',
    description: 'Write a complete test class for the DiscountCalculator class, covering happy path, edge cases, and verifying governor limit isolation.',
    difficulty: 'intermediate',
    instructions: [
      'Create a test class DiscountCalculatorTest annotated with @isTest',
      'Write a test method testApplyDiscount_twentyPercent that verifies 20% discount on $100 = $80',
      'Write a test method testApplyDiscount_noDiscount that verifies 0% discount returns the original price',
      'Write a test method testApplyDiscount_fullDiscount that verifies 100% discount returns $0',
      'Wrap the method-under-test call with Test.startTest() and Test.stopTest()',
      'Use System.assertEquals(expected, actual, message) with correct argument order',
    ],
    starterCode: `// The class you are testing (already exists in the org):
// public class DiscountCalculator {
//     public static Decimal applyDiscount(Decimal price, Decimal discountRate) {
//         return price * (1 - discountRate);
//     }
// }

@isTest
private class DiscountCalculatorTest {

    @isTest
    static void testApplyDiscount_twentyPercent() {
        // TODO: Test that applyDiscount(100, 0.20) == 80.00
        // Remember: Test.startTest() / Test.stopTest() around the call
        // Use System.assertEquals(expected, actual, message)
    }

    @isTest
    static void testApplyDiscount_noDiscount() {
        // TODO: Test that applyDiscount(50, 0) == 50.00
    }

    @isTest
    static void testApplyDiscount_fullDiscount() {
        // TODO: Test that applyDiscount(200, 1.0) == 0.00
    }
}`,
    solution: `@isTest
private class DiscountCalculatorTest {

    @isTest
    static void testApplyDiscount_twentyPercent() {
        Test.startTest();
        Decimal result = DiscountCalculator.applyDiscount(100, 0.20);
        Test.stopTest();
        System.assertEquals(80.00, result, '20% discount on $100 should be $80');
    }

    @isTest
    static void testApplyDiscount_noDiscount() {
        Test.startTest();
        Decimal result = DiscountCalculator.applyDiscount(50, 0);
        Test.stopTest();
        System.assertEquals(50.00, result, '0% discount should return the original price');
    }

    @isTest
    static void testApplyDiscount_fullDiscount() {
        Test.startTest();
        Decimal result = DiscountCalculator.applyDiscount(200, 1.0);
        Test.stopTest();
        System.assertEquals(0.00, result, '100% discount should return $0');
    }
}`,
    hints: [
      'Annotate the class with @isTest and make it private',
      'Each test method must also be annotated with @isTest and be static void',
      'System.assertEquals(expected, actual) — expected value comes first',
      'Wrap the DiscountCalculator.applyDiscount() call between Test.startTest() and Test.stopTest()',
    ],
    solutionExplanation: 'Well-structured tests follow Arrange-Act-Assert. Test.startTest() and Test.stopTest() isolate the code under test with fresh governor limits. System.assertEquals(expected, actual, message) with expected first ensures failure messages are human-readable.',
    testCases: [
      {
        id: 'tc1',
        description: 'Class is annotated with @isTest',
        pattern: '@isTest\\s+private\\s+class',
        errorMessage: 'Annotate the class with @isTest: @isTest private class DiscountCalculatorTest {}',
      },
      {
        id: 'tc2',
        description: 'Uses Test.startTest()',
        pattern: 'Test\\.startTest\\(\\)',
        errorMessage: 'Call Test.startTest() before the code under test to give it fresh governor limits.',
      },
      {
        id: 'tc3',
        description: 'Uses Test.stopTest()',
        pattern: 'Test\\.stopTest\\(\\)',
        errorMessage: 'Call Test.stopTest() after the code under test.',
      },
      {
        id: 'tc4',
        description: 'Uses System.assertEquals',
        pattern: 'System\\.assertEquals\\(',
        errorMessage: 'Use System.assertEquals(expected, actual, message) to assert the results.',
      },
      {
        id: 'tc5',
        description: 'Has at least two test methods',
        pattern: '@isTest[\\s\\S]*?static\\s+void\\s+test[A-Za-z]+[\\s\\S]*?@isTest[\\s\\S]*?static\\s+void\\s+test[A-Za-z]+',
        errorMessage: 'Write at least two @isTest static void test methods.',
      },
    ],
  },
  // ─── APEX TEST DATA CHALLENGE ─────────────────────────────────────────────────
  {
    id: 'challenge-apex-test-data',
    lessonId: 'apex-test-data',
    title: 'Build a Test Data Factory',
    description: 'Create a reusable TestDataFactory class and use @testSetup to write an efficient test class for an AccountService.',
    difficulty: 'intermediate',
    instructions: [
      'Create a @isTest public class named TestDataFactory',
      'Add a static method createAccount(String name) that inserts and returns an Account',
      'Add a static method createContacts(Id accountId, Integer count) that inserts and returns a List<Contact>',
      'Create a separate @isTest private class AccountServiceTest',
      'Add a @testSetup method that uses TestDataFactory to create 1 Account and 3 Contacts',
      'Write a test method that re-queries and asserts the contacts count equals 3',
    ],
    starterCode: `@isTest
public class TestDataFactory {

    // TODO: static method createAccount(String name)
    // - New Account with the given name
    // - Insert it
    // - Return it

    // TODO: static method createContacts(Id accountId, Integer count)
    // - Use a loop to build a List<Contact>
    // - Set AccountId and a unique LastName for each
    // - Insert the list
    // - Return the list
}

@isTest
private class AccountServiceTest {

    @testSetup
    static void setupData() {
        // TODO: Use TestDataFactory to create 1 Account and 3 Contacts
    }

    @isTest
    static void testContactCount() {
        // TODO: Re-query contacts, assert count is 3
    }
}`,
    solution: `@isTest
public class TestDataFactory {

    public static Account createAccount(String name) {
        Account acc = new Account(Name = name);
        insert acc;
        return acc;
    }

    public static List<Contact> createContacts(Id accountId, Integer count) {
        List<Contact> contacts = new List<Contact>();
        for (Integer i = 0; i < count; i++) {
            contacts.add(new Contact(
                LastName = 'TestContact' + i,
                AccountId = accountId
            ));
        }
        insert contacts;
        return contacts;
    }
}

@isTest
private class AccountServiceTest {

    @testSetup
    static void setupData() {
        Account acc = TestDataFactory.createAccount('Factory Test Corp');
        TestDataFactory.createContacts(acc.Id, 3);
    }

    @isTest
    static void testContactCount() {
        List<Contact> contacts = [SELECT Id FROM Contact];
        System.assertEquals(3, contacts.size(), 'Should have 3 test contacts');
    }
}`,
    hints: [
      'TestDataFactory must be annotated with @isTest to access test data creation',
      'In createContacts, use a loop from 0 to count-1 and append i to LastName for uniqueness',
      'In @testSetup, call TestDataFactory.createAccount() first to get an Id for contacts',
      'In testContactCount, re-query [SELECT Id FROM Contact] — do not reuse the list from @testSetup',
    ],
    solutionExplanation: 'The @testSetup method runs once and inserts data into the test database. Each test method re-queries to get a fresh snapshot. The TestDataFactory pattern centralizes record creation so all test classes use consistent data.',
    testCases: [
      {
        id: 'tc1',
        description: 'TestDataFactory class is annotated with @isTest',
        pattern: '@isTest[\\s\\S]*?public\\s+class\\s+TestDataFactory',
        errorMessage: 'Annotate TestDataFactory with @isTest.',
      },
      {
        id: 'tc2',
        description: 'Has createAccount method that inserts and returns Account',
        pattern: 'static\\s+Account\\s+createAccount',
        errorMessage: 'Add a static Account createAccount(String name) method.',
      },
      {
        id: 'tc3',
        description: 'Has createContacts method',
        pattern: 'static\\s+List<Contact>\\s+createContacts',
        errorMessage: 'Add a static List<Contact> createContacts(Id accountId, Integer count) method.',
      },
      {
        id: 'tc4',
        description: 'Uses @testSetup',
        pattern: '@testSetup',
        errorMessage: 'Add a @testSetup method to create shared test data once per class.',
      },
      {
        id: 'tc5',
        description: 'Asserts contact count with assertEquals',
        pattern: 'System\\.assertEquals\\(3',
        errorMessage: 'Assert that the contact count equals 3 using System.assertEquals(3, contacts.size(), message).',
      },
    ],
  },
  // ─── GOVERNOR LIMITS CHALLENGE ────────────────────────────────────────────────
  {
    id: 'challenge-apex-governor-limits',
    lessonId: 'apex-governor-limits',
    title: 'Fix the Bulkification Bug',
    description: 'Refactor a trigger that has SOQL-in-a-loop and DML-in-a-loop anti-patterns to be governor-limit safe.',
    difficulty: 'intermediate',
    instructions: [
      'Start with the given LeadTrigger that has SOQL and DML inside loops',
      'Extract all Lead AccountId equivalents (Company field) into a Set<String>',
      'Issue ONE SOQL query outside the loop to find matching Accounts',
      'Build a Map<String, Account> keyed by Account Name for fast lookup',
      'Collect new Tasks into a List<Task> inside the loop — no insert inside the loop',
      'Insert the list once AFTER the loop',
    ],
    starterCode: `// BAD version with SOQL and DML in loops — refactor this:
trigger LeadTrigger on Lead (after insert) {
    for (Lead lead : Trigger.new) {
        // BAD: SOQL in loop
        List<Account> matches = [
            SELECT Id, Name FROM Account WHERE Name = :lead.Company LIMIT 1
        ];

        if (!matches.isEmpty()) {
            Task t = new Task(
                Subject = 'Follow up with ' + lead.Name,
                WhatId = matches[0].Id
            );
            // BAD: DML in loop
            insert t;
        }
    }
}

// TODO: Rewrite this trigger to:
// 1. Collect company names from Trigger.new
// 2. ONE SOQL query: SELECT Id, Name FROM Account WHERE Name IN :companyNames
// 3. Build Map<String, Account> accountsByName
// 4. Loop through Trigger.new, build List<Task> (no insert inside loop)
// 5. ONE insert statement outside the loop`,
    solution: `trigger LeadTrigger on Lead (after insert) {
    // Step 1: Collect all company names
    Set<String> companyNames = new Set<String>();
    for (Lead lead : Trigger.new) {
        if (lead.Company != null) {
            companyNames.add(lead.Company);
        }
    }

    // Step 2: ONE SOQL query
    Map<String, Account> accountsByName = new Map<String, Account>();
    for (Account acc : [SELECT Id, Name FROM Account WHERE Name IN :companyNames]) {
        accountsByName.put(acc.Name, acc);
    }

    // Step 3: Build task list — no DML inside the loop
    List<Task> newTasks = new List<Task>();
    for (Lead lead : Trigger.new) {
        Account matchingAcc = accountsByName.get(lead.Company);
        if (matchingAcc != null) {
            newTasks.add(new Task(
                Subject = 'Follow up with ' + lead.Name,
                WhatId = matchingAcc.Id
            ));
        }
    }

    // Step 4: ONE DML statement
    if (!newTasks.isEmpty()) {
        insert newTasks;
    }
}`,
    hints: [
      'Collect company names into a Set<String> using a first loop over Trigger.new',
      'Use WHERE Name IN :companyNames for the bulk query',
      'Map<String, Account> lets you look up an account by company name in O(1)',
      'Build a List<Task> in the loop, then insert after the loop',
    ],
    solutionExplanation: 'The bulkification pattern: collect IDs into a Set, run one SOQL query with WHERE Id IN :set, build a Map for O(1) lookups, collect DML records in a List, and insert once after the loop. This turns N queries and N DML statements into 1 each.',
    testCases: [
      {
        id: 'tc1',
        description: 'Collects company names into a Set',
        pattern: 'Set<String>\\s+\\w+\\s*=\\s*new\\s+Set<String>',
        errorMessage: 'Create a Set<String> to collect company names from Trigger.new before the SOQL query.',
      },
      {
        id: 'tc2',
        description: 'Uses WHERE Name IN :set for bulk query',
        pattern: 'WHERE\\s+Name\\s+IN\\s*:',
        errorMessage: 'Use WHERE Name IN :companyNames to query all matching accounts in one SOQL call.',
      },
      {
        id: 'tc3',
        description: 'Builds a Map for account lookup',
        pattern: 'Map<String,\\s*Account>',
        errorMessage: 'Build a Map<String, Account> keyed by account name for fast lookup inside the loop.',
      },
      {
        id: 'tc4',
        description: 'Builds task list before inserting',
        pattern: 'List<Task>\\s+\\w+\\s*=\\s*new\\s+List<Task>',
        errorMessage: 'Create a List<Task> to collect tasks, then insert once after the loop.',
      },
      {
        id: 'tc5',
        description: 'Single insert outside the loop',
        pattern: 'if\\s*\\(!\\w+\\.isEmpty\\(\\)\\)\\s*\\{?\\s*insert',
        errorMessage: 'Insert the task list once after the loop, guarded by !isEmpty() to avoid empty DML.',
      },
    ],
  },
  // ─── FUTURE / QUEUEABLE CHALLENGE ────────────────────────────────────────────
  {
    id: 'challenge-apex-future-queueable',
    lessonId: 'apex-future-queueable',
    title: 'Build a Queueable CRM Sync Job',
    description: 'Implement a Queueable class that accepts a list of Contact IDs and simulates syncing them to an external CRM via HTTP callout.',
    difficulty: 'intermediate',
    instructions: [
      'Create a public class ContactSyncJob that implements Queueable and Database.AllowsCallouts',
      'Add a private List<Id> field contactIds and a constructor that accepts it',
      'Implement the execute(QueueableContext ctx) method',
      'Inside execute, query the contacts by ID',
      'For each contact, build an HttpRequest POST to endpoint "callout:CRM_API/sync"',
      'Send each request and log the status code with System.debug',
    ],
    starterCode: `public class ContactSyncJob implements Queueable, Database.AllowsCallouts {

    // TODO: private List<Id> contactIds field

    // TODO: Constructor that accepts List<Id>
    public ContactSyncJob(List<Id> contactIds) {
        // assign the field
    }

    // TODO: execute method
    public void execute(QueueableContext ctx) {
        // 1. Query contacts by contactIds
        // 2. For each contact, build an HttpRequest POST to 'callout:CRM_API/sync'
        //    with JSON body: JSON.serialize(c)
        // 3. Send and log the status code
    }
}`,
    solution: `public class ContactSyncJob implements Queueable, Database.AllowsCallouts {

    private List<Id> contactIds;

    public ContactSyncJob(List<Id> contactIds) {
        this.contactIds = contactIds;
    }

    public void execute(QueueableContext ctx) {
        List<Contact> contacts = [
            SELECT Id, FirstName, LastName, Email
            FROM Contact WHERE Id IN :contactIds
        ];

        for (Contact c : contacts) {
            HttpRequest req = new HttpRequest();
            req.setEndpoint('callout:CRM_API/sync');
            req.setMethod('POST');
            req.setBody(JSON.serialize(c));

            HttpResponse res = new Http().send(req);
            System.debug('CRM sync status: ' + res.getStatusCode());
        }
    }
}`,
    hints: [
      'Implement both Queueable and Database.AllowsCallouts to allow callouts in async context',
      'Store contactIds as a private instance field — assign it in the constructor',
      'Use WHERE Id IN :contactIds for the bulk query',
      'JSON.serialize(c) converts a Contact record to a JSON string for the HTTP body',
    ],
    solutionExplanation: 'Queueable classes implement Queueable and Database.AllowsCallouts. The execute() method re-queries using the stored IDs (never pass sObjects to async context) and processes each contact. System.enqueueJob() would chain a next job.',
    testCases: [
      {
        id: 'tc1',
        description: 'Implements Queueable and Database.AllowsCallouts',
        pattern: 'implements\\s+Queueable.*Database\\.AllowsCallouts|implements\\s+Database\\.AllowsCallouts.*Queueable',
        errorMessage: 'Implement both Queueable and Database.AllowsCallouts to enable callouts in async context.',
      },
      {
        id: 'tc2',
        description: 'Has a List<Id> field for contactIds',
        pattern: 'List<Id>\\s+contactIds',
        errorMessage: 'Declare a private List<Id> contactIds field.',
      },
      {
        id: 'tc3',
        description: 'Has execute(QueueableContext ctx) method',
        pattern: 'void\\s+execute\\s*\\(\\s*QueueableContext',
        errorMessage: 'Implement the execute(QueueableContext ctx) method.',
      },
      {
        id: 'tc4',
        description: 'Queries contacts inside execute',
        pattern: 'SELECT.*FROM\\s+Contact\\s+WHERE\\s+Id\\s+IN',
        errorMessage: 'Query contacts using WHERE Id IN :contactIds inside execute().',
      },
      {
        id: 'tc5',
        description: 'Makes HTTP callout',
        pattern: 'new\\s+Http\\(\\)\\.send|Http\\s+http.*http\\.send',
        errorMessage: 'Make an HTTP callout using new Http().send(req) for each contact.',
      },
    ],
  },
  // ─── BATCH APEX CHALLENGE ─────────────────────────────────────────────────────
  {
    id: 'challenge-apex-batch',
    lessonId: 'apex-batch-apex',
    title: 'Write a Batch Job to Archive Old Cases',
    description: 'Build a batch class that finds Cases closed more than 365 days ago and sets their IsArchived__c field to true.',
    difficulty: 'intermediate',
    instructions: [
      'Create a public class ArchiveCasesBatch that implements Database.Batchable<SObject>',
      'Implement start() — return a QueryLocator for Cases where Status = "Closed" and ClosedDate <= 365 days ago',
      'Implement execute() — set IsArchived__c = true on each Case in scope, then update scope (not in a loop)',
      'Implement finish() — log "Archive batch complete" with System.debug',
    ],
    starterCode: `public class ArchiveCasesBatch implements Database.Batchable<SObject> {

    // TODO: start() method
    // Query: Cases WHERE Status = 'Closed' AND ClosedDate <= LAST_N_DAYS:365
    public Database.QueryLocator start(Database.BatchableContext ctx) {
        // return Database.getQueryLocator('...')
    }

    // TODO: execute() method
    // Set IsArchived__c = true on each Case
    // ONE update call after the loop
    public void execute(Database.BatchableContext ctx, List<Case> scope) {

    }

    // TODO: finish() method
    // Log 'Archive batch complete'
    public void finish(Database.BatchableContext ctx) {

    }
}`,
    solution: `public class ArchiveCasesBatch implements Database.Batchable<SObject> {

    public Database.QueryLocator start(Database.BatchableContext ctx) {
        return Database.getQueryLocator(
            'SELECT Id, IsArchived__c FROM Case WHERE Status = \'Closed\' AND ClosedDate <= LAST_N_DAYS:365'
        );
    }

    public void execute(Database.BatchableContext ctx, List<Case> scope) {
        for (Case c : scope) {
            c.IsArchived__c = true;
        }
        update scope;
    }

    public void finish(Database.BatchableContext ctx) {
        System.debug('Archive batch complete');
    }
}`,
    hints: [
      'Use Database.getQueryLocator() in start() — not a list query',
      'LAST_N_DAYS:365 is a SOQL date literal for the last 365 days',
      'In execute(), modify all records in the loop first, then call update scope once after',
      'finish() receives a BatchableContext but you can ignore it if you just want to log',
    ],
    solutionExplanation: 'Database.getQueryLocator() in start() enables processing of millions of records. execute() receives scope (a chunk) with fresh limits — modify all records in the loop then update scope once. finish() runs after all chunks complete.',
    testCases: [
      {
        id: 'tc1',
        description: 'Implements Database.Batchable<SObject>',
        pattern: 'implements\\s+Database\\.Batchable<SObject>',
        errorMessage: 'The class must implement Database.Batchable<SObject>.',
      },
      {
        id: 'tc2',
        description: 'start() uses Database.getQueryLocator',
        pattern: 'Database\\.getQueryLocator',
        errorMessage: 'Use Database.getQueryLocator() in start() to return a query cursor.',
      },
      {
        id: 'tc3',
        description: 'Queries for Closed cases',
        pattern: "Status\\s*=\\s*'Closed'",
        errorMessage: "Filter cases with Status = 'Closed' in your SOQL query.",
      },
      {
        id: 'tc4',
        description: 'execute() updates scope outside the loop',
        pattern: 'update\\s+scope',
        errorMessage: 'Call update scope once after the for loop in execute() — not inside the loop.',
      },
      {
        id: 'tc5',
        description: 'finish() logs completion',
        pattern: 'System\\.debug.*[Aa]rchive.*[Cc]omplete|System\\.debug.*[Cc]omplete.*[Aa]rchive',
        errorMessage: "In finish(), use System.debug to log that the archive batch is complete.",
      },
    ],
  },
  // ─── APEX SHARING CHALLENGE ───────────────────────────────────────────────────
  {
    id: 'challenge-apex-sharing',
    lessonId: 'apex-sharing-security',
    title: 'Secure a Contact Read Service',
    description: 'Write a ContactReadService class that enforces both record-level sharing and field-level security using with sharing and Security.stripInaccessible().',
    difficulty: 'intermediate',
    instructions: [
      'Create a public with sharing class ContactReadService',
      'Add a static method getContacts() that returns List<Contact>',
      'Inside the method, query Id, FirstName, LastName, and SSN__c from Contact',
      'Apply Security.stripInaccessible(AccessType.READABLE, contacts) to enforce FLS',
      'Return the filtered records from decision.getRecords()',
    ],
    starterCode: `// TODO: Declare the class with correct sharing keyword
public class ContactReadService {

    public static List<Contact> getContacts() {
        // Step 1: Query contacts including sensitive field SSN__c
        List<Contact> contacts = [SELECT Id, FirstName, LastName, SSN__c FROM Contact LIMIT 100];

        // Step 2: Strip inaccessible fields using Security.stripInaccessible()
        // SObjectAccessDecision decision = Security.stripInaccessible(AccessType.READABLE, contacts);

        // Step 3: Return decision.getRecords() cast to List<Contact>
        return contacts; // Replace this with the sanitized list
    }
}`,
    solution: `public with sharing class ContactReadService {

    public static List<Contact> getContacts() {
        List<Contact> contacts = [SELECT Id, FirstName, LastName, SSN__c FROM Contact LIMIT 100];

        SObjectAccessDecision decision = Security.stripInaccessible(
            AccessType.READABLE,
            contacts
        );

        return (List<Contact>) decision.getRecords();
    }
}`,
    hints: [
      'Add "with sharing" between "public" and "class" in the class declaration',
      'Security.stripInaccessible() takes two arguments: AccessType.READABLE and your record list',
      'The result is an SObjectAccessDecision — call .getRecords() to get the sanitized list',
      'Cast the result: (List<Contact>) decision.getRecords()',
    ],
    solutionExplanation: 'with sharing enforces record-level security. Security.stripInaccessible(AccessType.READABLE, records) returns an SObjectAccessDecision — calling getRecords() gives you the same records but with any fields the user lacks FLS read access to removed.',
    testCases: [
      {
        id: 'tc1',
        description: 'Class uses with sharing',
        pattern: 'public\\s+with\\s+sharing\\s+class',
        errorMessage: 'Declare the class with "public with sharing class ContactReadService".',
      },
      {
        id: 'tc2',
        description: 'Queries Contact with sensitive fields',
        pattern: 'SELECT.*SSN__c.*FROM\\s+Contact|SELECT.*FROM\\s+Contact.*SSN__c',
        errorMessage: 'Query contacts including the SSN__c field to demonstrate FLS stripping.',
      },
      {
        id: 'tc3',
        description: 'Uses Security.stripInaccessible',
        pattern: 'Security\\.stripInaccessible',
        errorMessage: 'Use Security.stripInaccessible(AccessType.READABLE, contacts) to enforce FLS.',
      },
      {
        id: 'tc4',
        description: 'Uses AccessType.READABLE',
        pattern: 'AccessType\\.READABLE',
        errorMessage: 'Pass AccessType.READABLE as the first argument to Security.stripInaccessible().',
      },
      {
        id: 'tc5',
        description: 'Returns decision.getRecords()',
        pattern: '\\.getRecords\\(\\)',
        errorMessage: 'Return decision.getRecords() cast to List<Contact> as the sanitized result.',
      },
    ],
  },
  // ─── DYNAMIC SOQL CHALLENGE ───────────────────────────────────────────────────
  {
    id: 'challenge-soql-dynamic',
    lessonId: 'soql-dynamic-sosl',
    title: 'Build a Safe Dynamic Account Search',
    description: 'Write a dynamic SOQL method that filters Accounts by optional Industry and Rating parameters, safely escaping user input.',
    difficulty: 'intermediate',
    instructions: [
      'Create a public class AccountSearchService',
      'Add a static method search(String industry, String rating) that returns List<Account>',
      'Start with a base SOQL string selecting Id, Name, Industry, Rating from Account',
      'If industry is not blank, escape it and append an AND Industry filter',
      'If rating is not blank, escape it and append an AND Rating filter',
      'Execute with Database.query() and return the result',
    ],
    starterCode: `public class AccountSearchService {

    public static List<Account> search(String industry, String rating) {
        // Base query — always valid even with no filters
        String soql = 'SELECT Id, Name, Industry, Rating FROM Account WHERE Id != null';

        // TODO: If industry is not blank:
        //   escape it with String.escapeSingleQuotes()
        //   append: AND Industry = '...'

        // TODO: If rating is not blank:
        //   escape it
        //   append: AND Rating = '...'

        soql += ' ORDER BY Name LIMIT 100';

        // TODO: Execute with Database.query() and return result
        return new List<Account>();
    }
}`,
    solution: `public class AccountSearchService {

    public static List<Account> search(String industry, String rating) {
        String soql = 'SELECT Id, Name, Industry, Rating FROM Account WHERE Id != null';

        if (String.isNotBlank(industry)) {
            soql += ' AND Industry = \'' + String.escapeSingleQuotes(industry) + '\'';
        }
        if (String.isNotBlank(rating)) {
            soql += ' AND Rating = \'' + String.escapeSingleQuotes(rating) + '\'';
        }

        soql += ' ORDER BY Name LIMIT 100';

        return Database.query(soql);
    }
}`,
    hints: [
      'Use String.isNotBlank(industry) to check if the filter was provided',
      'Always call String.escapeSingleQuotes() before embedding user input in SOQL',
      'Wrap the escaped value in single quotes: \' + String.escapeSingleQuotes(industry) + \'',
      'Database.query(soql) returns List<SObject> — it can be directly assigned to List<Account>',
    ],
    solutionExplanation: 'The base query starts with a valid WHERE clause. String.isNotBlank() checks if filters were provided. String.escapeSingleQuotes() prevents SOQL injection. Database.query(soql) executes the string at runtime.',
    testCases: [
      {
        id: 'tc1',
        description: 'Starts with a valid base SOQL string',
        pattern: "SELECT.*FROM\\s+Account\\s+WHERE",
        errorMessage: 'Start with a base SOQL string with a WHERE clause so it is always valid.',
      },
      {
        id: 'tc2',
        description: 'Uses String.isNotBlank for conditional filters',
        pattern: 'String\\.isNotBlank',
        errorMessage: 'Use String.isNotBlank() to check if each filter parameter was provided.',
      },
      {
        id: 'tc3',
        description: 'Escapes user input with String.escapeSingleQuotes',
        pattern: 'String\\.escapeSingleQuotes',
        errorMessage: 'Use String.escapeSingleQuotes() on user-supplied values to prevent SOQL injection.',
      },
      {
        id: 'tc4',
        description: 'Executes with Database.query()',
        pattern: 'Database\\.query\\(',
        errorMessage: 'Execute the dynamic SOQL string using Database.query(soql).',
      },
    ],
  },
  // ─── PLATFORM EVENTS CHALLENGE ───────────────────────────────────────────────
  {
    id: 'challenge-platform-events',
    lessonId: 'platform-events-intro',
    title: 'Publish a Payment Received Event',
    description: 'Write an Apex class that publishes a Payment_Received__e Platform Event when an Order is marked as paid.',
    difficulty: 'advanced',
    instructions: [
      'Create a public class PaymentService',
      'Add a static method markOrderPaid(Id orderId, Decimal amount) returning void',
      'Inside the method, build a Payment_Received__e event with Order_Id__c = orderId and Amount__c = amount',
      'Publish the event using EventBus.publish()',
      'Check the SaveResult and log success or error message with System.debug',
    ],
    starterCode: `public class PaymentService {

    public static void markOrderPaid(Id orderId, Decimal amount) {
        // TODO: Create a Payment_Received__e event
        // Fields: Order_Id__c (Id), Amount__c (Decimal)

        // TODO: Publish with EventBus.publish()
        // Capture the SaveResult

        // TODO: Log success or error
    }
}`,
    solution: `public class PaymentService {

    public static void markOrderPaid(Id orderId, Decimal amount) {
        Payment_Received__e event = new Payment_Received__e(
            Order_Id__c = orderId,
            Amount__c = amount
        );

        Database.SaveResult result = EventBus.publish(event);

        if (result.isSuccess()) {
            System.debug('Payment_Received__e published for order: ' + orderId);
        } else {
            System.debug('Publish failed: ' + result.getErrors()[0].getMessage());
        }
    }
}`,
    hints: [
      'Platform Event objects end in __e (Payment_Received__e)',
      'Use EventBus.publish(event) — not insert',
      'EventBus.publish() returns a Database.SaveResult',
      'Check result.isSuccess() to determine success or failure',
    ],
    solutionExplanation: 'Platform Events are published with EventBus.publish(), not insert. The event fields are set in the constructor. SaveResult.isSuccess() checks whether the publish succeeded and lets you log errors.',
    testCases: [
      {
        id: 'tc1',
        description: 'Creates a Platform Event instance',
        pattern: 'new\\s+Payment_Received__e',
        errorMessage: 'Create a new Payment_Received__e instance with the event fields.',
      },
      {
        id: 'tc2',
        description: 'Sets Order_Id__c field',
        pattern: 'Order_Id__c\\s*=\\s*orderId',
        errorMessage: 'Set Order_Id__c = orderId on the event.',
      },
      {
        id: 'tc3',
        description: 'Sets Amount__c field',
        pattern: 'Amount__c\\s*=\\s*amount',
        errorMessage: 'Set Amount__c = amount on the event.',
      },
      {
        id: 'tc4',
        description: 'Publishes with EventBus.publish()',
        pattern: 'EventBus\\.publish',
        errorMessage: 'Use EventBus.publish(event) to publish the Platform Event — not insert.',
      },
      {
        id: 'tc5',
        description: 'Checks SaveResult',
        pattern: '\\.isSuccess\\(\\)',
        errorMessage: 'Check result.isSuccess() and log a message based on the outcome.',
      },
    ],
  },
  // ─── INVOCABLE METHOD CHALLENGE ───────────────────────────────────────────────
  {
    id: 'challenge-invocable-method',
    lessonId: 'flows-invocable-methods',
    title: 'Build an @InvocableMethod for Lead Scoring',
    description: 'Create an Apex class with an @InvocableMethod that Flow can call to calculate a lead score and return the result.',
    difficulty: 'intermediate',
    instructions: [
      'Create a public class LeadScoringService',
      'Create a public inner class LeadScoreInput with @InvocableVariable fields: leadId (Id) and industry (String)',
      'Create a public inner class LeadScoreOutput with @InvocableVariable field: score (Integer)',
      'Add an @InvocableMethod(label=\'Calculate Lead Score\') static method that takes List<LeadScoreInput> and returns List<LeadScoreOutput>',
      'Score logic: Technology = 90, Healthcare = 80, Finance = 85, default = 50',
    ],
    starterCode: `public class LeadScoringService {

    // TODO: Input wrapper class with @InvocableVariable fields
    // - leadId (Id)
    // - industry (String)
    public class LeadScoreInput {

    }

    // TODO: Output wrapper class with @InvocableVariable fields
    // - score (Integer)
    public class LeadScoreOutput {

    }

    // TODO: @InvocableMethod(label='Calculate Lead Score')
    // Takes List<LeadScoreInput>, returns List<LeadScoreOutput>
    // Score: Technology=90, Healthcare=80, Finance=85, default=50
    public static List<LeadScoreOutput> calculateScore(List<LeadScoreInput> inputs) {
        List<LeadScoreOutput> outputs = new List<LeadScoreOutput>();
        // TODO: Loop inputs, calculate score, add to outputs
        return outputs;
    }
}`,
    solution: `public class LeadScoringService {

    public class LeadScoreInput {
        @InvocableVariable(label='Lead Id' required=true)
        public Id leadId;

        @InvocableVariable(label='Industry')
        public String industry;
    }

    public class LeadScoreOutput {
        @InvocableVariable(label='Score')
        public Integer score;
    }

    @InvocableMethod(label='Calculate Lead Score')
    public static List<LeadScoreOutput> calculateScore(List<LeadScoreInput> inputs) {
        List<LeadScoreOutput> outputs = new List<LeadScoreOutput>();

        for (LeadScoreInput input : inputs) {
            LeadScoreOutput output = new LeadScoreOutput();

            if (input.industry == 'Technology') {
                output.score = 90;
            } else if (input.industry == 'Healthcare') {
                output.score = 80;
            } else if (input.industry == 'Finance') {
                output.score = 85;
            } else {
                output.score = 50;
            }

            outputs.add(output);
        }

        return outputs;
    }
}`,
    hints: [
      'Each field in the wrapper classes needs @InvocableVariable(label=\'...\') annotation',
      'The method parameter must be List<LeadScoreInput> — not a single input',
      'Create a new LeadScoreOutput for each input and add it to the outputs list',
      'Return the outputs list — it must be the same size as inputs',
    ],
    solutionExplanation: '@InvocableVariable on each field makes it visible in Flow Builder. The method must accept List<Input> because Flows batch records. The score is calculated per-input inside a loop, with a LeadScoreOutput for each input.',
    testCases: [
      {
        id: 'tc1',
        description: 'Has @InvocableMethod annotation',
        pattern: "@InvocableMethod",
        errorMessage: "Add @InvocableMethod(label='Calculate Lead Score') to the calculateScore method.",
      },
      {
        id: 'tc2',
        description: 'Input class has @InvocableVariable fields',
        pattern: '@InvocableVariable[\\s\\S]*?public\\s+Id\\s+leadId',
        errorMessage: 'Add @InvocableVariable annotation to the leadId field in LeadScoreInput.',
      },
      {
        id: 'tc3',
        description: 'Method takes List<LeadScoreInput>',
        pattern: 'List<LeadScoreInput>',
        errorMessage: 'The method must accept List<LeadScoreInput> as its parameter.',
      },
      {
        id: 'tc4',
        description: 'Returns List<LeadScoreOutput>',
        pattern: 'List<LeadScoreOutput>',
        errorMessage: 'The method must return List<LeadScoreOutput>.',
      },
      {
        id: 'tc5',
        description: 'Scores Technology industry at 90',
        pattern: "industry.*==.*'Technology'[\\s\\S]*?score\\s*=\\s*90|score\\s*=\\s*90[\\s\\S]*?Technology",
        errorMessage: "Set score = 90 when industry is 'Technology'.",
      },
    ],
  },
  // ─── TRIGGER HANDLER PATTERN CHALLENGE ───────────────────────────────────────
  {
    id: 'challenge-trigger-handler-pattern',
    lessonId: 'apex-trigger-handler-pattern',
    title: 'Refactor to the Handler Pattern',
    description: 'Refactor a trigger that has logic in the body into the proper thin-trigger + handler class pattern.',
    difficulty: 'intermediate',
    instructions: [
      'Create a LeadTriggerHandler class',
      'Move the beforeInsert logic (setting default LeadSource) into a beforeInsert(List<Lead>) method on the handler',
      'Move the afterInsert logic (creating Task) into an afterInsert(List<Lead>, Map<Id,Lead>) method',
      'Rewrite the LeadTrigger to only route to handler methods',
    ],
    starterCode: `// CURRENT (bad) trigger — logic in the body
// Refactor this to use a handler class

trigger LeadTrigger on Lead (before insert, after insert) {
    // before insert logic — set default LeadSource
    if (Trigger.isBefore && Trigger.isInsert) {
        for (Lead l : Trigger.new) {
            if (l.LeadSource == null) {
                l.LeadSource = 'Web';
            }
        }
    }

    // after insert logic — create follow-up Task
    if (Trigger.isAfter && Trigger.isInsert) {
        List<Task> tasks = new List<Task>();
        for (Lead l : Trigger.new) {
            tasks.add(new Task(Subject = 'Follow up', WhoId = l.Id));
        }
        if (!tasks.isEmpty()) insert tasks;
    }
}

// TODO: Create LeadTriggerHandler class with:
// - beforeInsert(List<Lead> newLeads) method
// - afterInsert(List<Lead> newLeads, Map<Id,Lead> newMap) method
// Then rewrite LeadTrigger to use it`,
    solution: `public with sharing class LeadTriggerHandler {

    public void beforeInsert(List<Lead> newLeads) {
        for (Lead l : newLeads) {
            if (l.LeadSource == null) {
                l.LeadSource = 'Web';
            }
        }
    }

    public void afterInsert(List<Lead> newLeads, Map<Id, Lead> newMap) {
        List<Task> tasks = new List<Task>();
        for (Lead l : newLeads) {
            tasks.add(new Task(Subject = 'Follow up', WhoId = l.Id));
        }
        if (!tasks.isEmpty()) insert tasks;
    }
}

trigger LeadTrigger on Lead (before insert, after insert) {
    LeadTriggerHandler handler = new LeadTriggerHandler();
    if (Trigger.isBefore && Trigger.isInsert) handler.beforeInsert(Trigger.new);
    if (Trigger.isAfter && Trigger.isInsert) handler.afterInsert(Trigger.new, Trigger.newMap);
}`,
    hints: [
      'Create a LeadTriggerHandler class with two public methods: beforeInsert and afterInsert',
      'beforeInsert takes List<Lead> — the method sets LeadSource = \'Web\' if null',
      'afterInsert takes List<Lead> and Map<Id, Lead> — creates Tasks',
      'The trigger body should only instantiate the handler and call the right method',
    ],
    solutionExplanation: 'The thin trigger only routes — instantiating the handler and calling the right method based on Trigger context. All logic lives in the handler, making it directly testable without DML. This is the standard professional Salesforce pattern.',
    testCases: [
      {
        id: 'tc1',
        description: 'Handler class is defined',
        pattern: 'class\\s+LeadTriggerHandler',
        errorMessage: 'Create a class named LeadTriggerHandler.',
      },
      {
        id: 'tc2',
        description: 'Handler has beforeInsert method',
        pattern: 'void\\s+beforeInsert\\s*\\(\\s*List<Lead>',
        errorMessage: 'Add a beforeInsert(List<Lead> newLeads) method to the handler.',
      },
      {
        id: 'tc3',
        description: 'Handler has afterInsert method',
        pattern: 'void\\s+afterInsert\\s*\\(\\s*List<Lead>',
        errorMessage: 'Add an afterInsert(List<Lead> newLeads, Map<Id, Lead> newMap) method.',
      },
      {
        id: 'tc4',
        description: 'Trigger instantiates handler',
        pattern: 'new\\s+LeadTriggerHandler',
        errorMessage: 'The trigger should instantiate LeadTriggerHandler and delegate to it.',
      },
      {
        id: 'tc5',
        description: 'Trigger calls handler.beforeInsert',
        pattern: 'handler\\.beforeInsert\\(',
        errorMessage: 'The trigger should call handler.beforeInsert() for the before insert event.',
      },
    ],
  },
  // ─── SERVICE SELECTOR CHALLENGE ───────────────────────────────────────────────
  {
    id: 'challenge-service-selector',
    lessonId: 'apex-service-selector',
    title: 'Build an OpportunitySelector',
    description: 'Create an OpportunitySelector class that centralizes SOQL queries for the Opportunity object.',
    difficulty: 'advanced',
    instructions: [
      'Create a public with sharing class OpportunitySelector',
      'Add a method selectById(Set<Id> oppIds) that queries Id, Name, StageName, Amount, AccountId',
      'Add a method selectClosedWon() that queries the same fields where StageName = \'Closed Won\'',
      'Add a method selectByAccountId(Id accountId) that queries opps for a specific Account',
    ],
    starterCode: `public with sharing class OpportunitySelector {

    // TODO: selectById(Set<Id> oppIds) - returns List<Opportunity>
    // Query: SELECT Id, Name, StageName, Amount, AccountId FROM Opportunity WHERE Id IN :oppIds

    // TODO: selectClosedWon() - returns List<Opportunity>
    // Query: WHERE StageName = 'Closed Won'

    // TODO: selectByAccountId(Id accountId) - returns List<Opportunity>
    // Query: WHERE AccountId = :accountId
}`,
    solution: `public with sharing class OpportunitySelector {

    public List<Opportunity> selectById(Set<Id> oppIds) {
        return [
            SELECT Id, Name, StageName, Amount, AccountId
            FROM Opportunity
            WHERE Id IN :oppIds
        ];
    }

    public List<Opportunity> selectClosedWon() {
        return [
            SELECT Id, Name, StageName, Amount, AccountId
            FROM Opportunity
            WHERE StageName = 'Closed Won'
        ];
    }

    public List<Opportunity> selectByAccountId(Id accountId) {
        return [
            SELECT Id, Name, StageName, Amount, AccountId
            FROM Opportunity
            WHERE AccountId = :accountId
        ];
    }
}`,
    hints: [
      'Use with sharing so queries respect the running user\'s record access',
      'All three methods should select: Id, Name, StageName, Amount, AccountId',
      'selectById uses WHERE Id IN :oppIds (Set<Id> bind variable)',
      'selectClosedWon uses WHERE StageName = \'Closed Won\'',
    ],
    solutionExplanation: 'Each Selector method returns List<Opportunity> with consistent field selection. with sharing ensures queries respect the running user\'s access. Centralizing SOQL here means adding a field requires only one change.',
    testCases: [
      {
        id: 'tc1',
        description: 'Class uses with sharing',
        pattern: 'public\\s+with\\s+sharing\\s+class\\s+OpportunitySelector',
        errorMessage: 'Declare the class as: public with sharing class OpportunitySelector',
      },
      {
        id: 'tc2',
        description: 'Has selectById method',
        pattern: 'List<Opportunity>\\s+selectById\\s*\\(\\s*Set<Id>',
        errorMessage: 'Add: public List<Opportunity> selectById(Set<Id> oppIds) method.',
      },
      {
        id: 'tc3',
        description: 'selectById uses WHERE Id IN',
        pattern: 'WHERE\\s+Id\\s+IN\\s*:oppIds',
        errorMessage: 'Use WHERE Id IN :oppIds in the selectById query.',
      },
      {
        id: 'tc4',
        description: 'Has selectClosedWon method',
        pattern: "List<Opportunity>\\s+selectClosedWon",
        errorMessage: 'Add a selectClosedWon() method that queries WHERE StageName = \'Closed Won\'.',
      },
      {
        id: 'tc5',
        description: 'Has selectByAccountId method',
        pattern: 'List<Opportunity>\\s+selectByAccountId\\s*\\(\\s*Id',
        errorMessage: 'Add a selectByAccountId(Id accountId) method.',
      },
    ],
  },
  // ─── DEPLOYMENT CHALLENGE ─────────────────────────────────────────────────────
  {
    id: 'challenge-deployment',
    lessonId: 'salesforce-deployment',
    title: 'Write a Deployment Checklist Script',
    description: 'Write a simple Apex class that validates an org is "deployment ready" by checking test coverage and pending DML.',
    difficulty: 'intermediate',
    instructions: [
      'Create a public class DeploymentValidator',
      'Add a static method validateCoverage(Integer coverage) that returns Boolean',
      'Return true if coverage >= 75, false otherwise',
      'Add a static method getDeploymentStatus(Integer coverage, Boolean testsPass) that returns a String',
      'Return "Ready" if coverage >= 75 AND testsPass is true, otherwise return "Not Ready: " with a reason',
    ],
    starterCode: `public class DeploymentValidator {

    // Returns true if coverage meets the production threshold
    public static Boolean validateCoverage(Integer coverage) {
        // TODO: Return true if coverage >= 75
    }

    // Returns a deployment status string
    public static String getDeploymentStatus(Integer coverage, Boolean testsPass) {
        // TODO: If coverage >= 75 AND testsPass, return 'Ready'
        // If coverage < 75, return 'Not Ready: Insufficient coverage (' + coverage + '%)'
        // If testsPass == false, return 'Not Ready: Tests are failing'
    }
}`,
    solution: `public class DeploymentValidator {

    public static Boolean validateCoverage(Integer coverage) {
        return coverage >= 75;
    }

    public static String getDeploymentStatus(Integer coverage, Boolean testsPass) {
        if (coverage < 75) {
            return 'Not Ready: Insufficient coverage (' + coverage + '%)';
        }
        if (!testsPass) {
            return 'Not Ready: Tests are failing';
        }
        return 'Ready';
    }
}`,
    hints: [
      'validateCoverage should return a simple Boolean comparison: coverage >= 75',
      'In getDeploymentStatus, check coverage first — it is more specific than testsPass',
      'Return the exact strings: "Ready" and "Not Ready: ..." to match the test cases',
    ],
    solutionExplanation: 'validateCoverage is a simple >= comparison. getDeploymentStatus checks the most specific condition first (coverage) then testsPass, following the pattern of handling specific cases before general ones.',
    testCases: [
      {
        id: 'tc1',
        description: 'Has validateCoverage method',
        pattern: 'Boolean\\s+validateCoverage\\s*\\(\\s*Integer',
        errorMessage: 'Add: public static Boolean validateCoverage(Integer coverage)',
      },
      {
        id: 'tc2',
        description: 'Returns true for coverage >= 75',
        pattern: 'coverage\\s*>=\\s*75',
        errorMessage: 'Return true when coverage >= 75.',
      },
      {
        id: 'tc3',
        description: 'Has getDeploymentStatus method',
        pattern: 'String\\s+getDeploymentStatus\\s*\\(\\s*Integer',
        errorMessage: 'Add: public static String getDeploymentStatus(Integer coverage, Boolean testsPass)',
      },
      {
        id: 'tc4',
        description: 'Returns "Ready" when qualified',
        pattern: "return\\s+'Ready'",
        errorMessage: "Return 'Ready' when both coverage >= 75 and testsPass is true.",
      },
      {
        id: 'tc5',
        description: 'Returns Not Ready message',
        pattern: "return\\s+'Not Ready",
        errorMessage: "Return a 'Not Ready: ...' message when deployment conditions are not met.",
      },
    ],
  },
  // ─── DATA MODEL CHALLENGE ─────────────────────────────────────────────────────
  {
    id: 'challenge-data-model',
    lessonId: 'salesforce-data-model',
    title: 'Query a Job Board Data Model',
    description: 'Write SOQL queries against a Job Board data model (Job_Opening__c and Application__c) using relationship queries.',
    difficulty: 'beginner',
    instructions: [
      'Write a class JobBoardService with a method getOpenJobs() that queries all Job_Opening__c with Status__c = \'Open\'',
      'Write a method getApplicationsForJob(Id jobOpeningId) that returns all Application__c for the given Job Opening',
      'Write a method getCandidateApplications(Id contactId) that returns all Application__c for a given candidate',
      'Use SOQL relationship queries — include at least Id, Status__c, and one related field in each query',
    ],
    starterCode: `public with sharing class JobBoardService {

    // TODO: Get all open job openings
    // SELECT Id, Title__c, Department__c, Status__c FROM Job_Opening__c WHERE Status__c = 'Open'
    public static List<Job_Opening__c> getOpenJobs() {

    }

    // TODO: Get all applications for a specific job opening
    // SELECT Id, Status__c, Applied_Date__c, Candidate__c FROM Application__c WHERE Job_Opening__c = :jobOpeningId
    public static List<Application__c> getApplicationsForJob(Id jobOpeningId) {

    }

    // TODO: Get all applications for a candidate (contact)
    // SELECT Id, Status__c, Applied_Date__c, Job_Opening__r.Title__c FROM Application__c WHERE Candidate__c = :contactId
    public static List<Application__c> getCandidateApplications(Id contactId) {

    }
}`,
    solution: `public with sharing class JobBoardService {

    public static List<Job_Opening__c> getOpenJobs() {
        return [
            SELECT Id, Title__c, Department__c, Status__c
            FROM Job_Opening__c
            WHERE Status__c = 'Open'
        ];
    }

    public static List<Application__c> getApplicationsForJob(Id jobOpeningId) {
        return [
            SELECT Id, Status__c, Applied_Date__c, Candidate__c
            FROM Application__c
            WHERE Job_Opening__c = :jobOpeningId
        ];
    }

    public static List<Application__c> getCandidateApplications(Id contactId) {
        return [
            SELECT Id, Status__c, Applied_Date__c, Job_Opening__r.Title__c
            FROM Application__c
            WHERE Candidate__c = :contactId
        ];
    }
}`,
    hints: [
      'Custom object API names end in __c (Job_Opening__c, Application__c)',
      'Relationship queries use __r instead of __c: Job_Opening__r.Title__c',
      'Filter by lookup field using WHERE Job_Opening__c = :jobOpeningId',
      'Make the class with sharing to enforce record-level security',
    ],
    solutionExplanation: 'Custom objects end in __c in SOQL. Relationship traversal uses __r instead of __c to navigate to the parent. Filtering by lookup fields uses WHERE Job_Opening__c = :id. with sharing ensures records are filtered by user access.',
    testCases: [
      {
        id: 'tc1',
        description: 'Has getOpenJobs method querying Job_Opening__c',
        pattern: 'FROM\\s+Job_Opening__c\\s+WHERE\\s+Status__c',
        errorMessage: "Add getOpenJobs() that queries Job_Opening__c WHERE Status__c = 'Open'.",
      },
      {
        id: 'tc2',
        description: 'Has getApplicationsForJob method',
        pattern: 'List<Application__c>\\s+getApplicationsForJob',
        errorMessage: 'Add getApplicationsForJob(Id jobOpeningId) returning List<Application__c>.',
      },
      {
        id: 'tc3',
        description: 'getApplicationsForJob filters by Job_Opening__c field',
        pattern: 'WHERE\\s+Job_Opening__c\\s*=\\s*:jobOpeningId',
        errorMessage: 'Filter Application__c by WHERE Job_Opening__c = :jobOpeningId.',
      },
      {
        id: 'tc4',
        description: 'Has getCandidateApplications method',
        pattern: 'List<Application__c>\\s+getCandidateApplications',
        errorMessage: 'Add getCandidateApplications(Id contactId) returning List<Application__c>.',
      },
      {
        id: 'tc5',
        description: 'Uses relationship query with __r',
        pattern: 'Job_Opening__r\\.',
        errorMessage: 'Use a relationship query in getCandidateApplications: Job_Opening__r.Title__c',
      },
    ],
  },
  // ─── PERMISSIONS CHALLENGE ────────────────────────────────────────────────────
  {
    id: 'challenge-permissions',
    lessonId: 'profiles-permissions-intro',
    title: 'Write a Permission Check Service',
    description: 'Write a PermissionCheckService class that uses Schema.sObjectType to verify CRUD permissions before performing DML operations.',
    difficulty: 'intermediate',
    instructions: [
      'Create a public with sharing class PermissionCheckService',
      'Add a static method canInsertAccount() that returns Boolean',
      'Use Schema.sObjectType.Account.isCreateable() to check create permission',
      'Add a static method canReadContact() that returns Boolean using Schema.sObjectType.Contact.isAccessible()',
      'Add a static method safeInsertAccount(Account acc) that checks canInsertAccount() first, then inserts or throws an exception',
    ],
    starterCode: `public with sharing class PermissionCheckService {

    // Returns true if the running user can create Account records
    public static Boolean canInsertAccount() {
        // TODO: return Schema.sObjectType.Account.isCreateable()
    }

    // Returns true if the running user can read Contact records
    public static Boolean canReadContact() {
        // TODO: return Schema.sObjectType.Contact.isAccessible()
    }

    // Inserts the Account only if the user has create permission
    // Throws an exception if user lacks permission
    public static void safeInsertAccount(Account acc) {
        // TODO: if !canInsertAccount() throw new System.NoAccessException()
        // Otherwise insert acc
    }
}`,
    solution: `public with sharing class PermissionCheckService {

    public static Boolean canInsertAccount() {
        return Schema.sObjectType.Account.isCreateable();
    }

    public static Boolean canReadContact() {
        return Schema.sObjectType.Contact.isAccessible();
    }

    public static void safeInsertAccount(Account acc) {
        if (!canInsertAccount()) {
            throw new System.NoAccessException();
        }
        insert acc;
    }
}`,
    hints: [
      'Schema.sObjectType.Account.isCreateable() returns true if user has Create CRUD on Account',
      'Schema.sObjectType.Contact.isAccessible() returns true if user has Read CRUD on Contact',
      'In safeInsertAccount, check the permission first with an if statement',
      'Throw new System.NoAccessException() if the user lacks permission',
    ],
    solutionExplanation: 'Schema.sObjectType.Account.isCreateable() checks the running user\'s CRUD permissions programmatically. Calling this before DML is explicit CRUD/FLS enforcement. System.NoAccessException is the standard exception for permission failures.',
    testCases: [
      {
        id: 'tc1',
        description: 'Has canInsertAccount method',
        pattern: 'Boolean\\s+canInsertAccount',
        errorMessage: 'Add: public static Boolean canInsertAccount()',
      },
      {
        id: 'tc2',
        description: 'Uses Schema.sObjectType.Account.isCreateable()',
        pattern: 'Schema\\.sObjectType\\.Account\\.isCreateable\\(\\)',
        errorMessage: 'Use Schema.sObjectType.Account.isCreateable() to check create permission.',
      },
      {
        id: 'tc3',
        description: 'Has canReadContact method using isAccessible',
        pattern: 'Schema\\.sObjectType\\.Contact\\.isAccessible\\(\\)',
        errorMessage: 'Use Schema.sObjectType.Contact.isAccessible() to check read permission.',
      },
      {
        id: 'tc4',
        description: 'Has safeInsertAccount method',
        pattern: 'void\\s+safeInsertAccount\\s*\\(\\s*Account',
        errorMessage: 'Add: public static void safeInsertAccount(Account acc)',
      },
      {
        id: 'tc5',
        description: 'Throws NoAccessException on permission failure',
        pattern: 'throw\\s+new\\s+System\\.NoAccessException',
        errorMessage: 'Throw new System.NoAccessException() if the user lacks insert permission.',
      },
    ],
  },
  // ─── REPORTS CHALLENGE ────────────────────────────────────────────────────────
  {
    id: 'challenge-reports',
    lessonId: 'reports-dashboards-intro',
    title: 'Build a Report Summary Class',
    description: 'Write a ReportSummaryService class that queries opportunity pipeline data and formats it like a Summary report output.',
    difficulty: 'beginner',
    instructions: [
      'Create a public with sharing class ReportSummaryService',
      'Add a method getPipelineByStage() that returns Map<String, Decimal>',
      'Query Opportunities closing this quarter, group by StageName',
      'Return a Map where each key is a StageName and the value is the total Amount for that stage',
    ],
    starterCode: `public with sharing class ReportSummaryService {

    // Returns a Map of StageName -> Total Amount for opps closing this quarter
    public static Map<String, Decimal> getPipelineByStage() {
        Map<String, Decimal> pipelineByStage = new Map<String, Decimal>();

        // TODO: Query Opportunities where CloseDate = THIS_QUARTER
        // Use an aggregate query: SELECT StageName, SUM(Amount) total FROM Opportunity
        //   WHERE CloseDate = THIS_QUARTER GROUP BY StageName
        // For each AggregateResult: add StageName -> total to the map

        return pipelineByStage;
    }
}`,
    solution: `public with sharing class ReportSummaryService {

    public static Map<String, Decimal> getPipelineByStage() {
        Map<String, Decimal> pipelineByStage = new Map<String, Decimal>();

        for (AggregateResult ar : [
            SELECT StageName, SUM(Amount) total
            FROM Opportunity
            WHERE CloseDate = THIS_QUARTER
            GROUP BY StageName
        ]) {
            String stage = (String) ar.get('StageName');
            Decimal total = (Decimal) ar.get('total');
            pipelineByStage.put(stage, total);
        }

        return pipelineByStage;
    }
}`,
    hints: [
      'Use an aggregate SOQL query with GROUP BY StageName and SUM(Amount) total',
      'Loop over AggregateResult records to build the map',
      'Cast results: (String) ar.get(\'StageName\') and (Decimal) ar.get(\'total\')',
      'THIS_QUARTER is a SOQL date literal for opportunities closing in the current quarter',
    ],
    solutionExplanation: 'Aggregate SOQL with GROUP BY produces one row per group. AggregateResult.get(\'fieldOrAlias\') returns values that must be cast to the right type. THIS_QUARTER is a SOQL date literal that evaluates to the current fiscal quarter.',
    testCases: [
      {
        id: 'tc1',
        description: 'Returns Map<String, Decimal>',
        pattern: 'Map<String,\\s*Decimal>\\s+getPipelineByStage',
        errorMessage: 'The method signature must be: public static Map<String, Decimal> getPipelineByStage()',
      },
      {
        id: 'tc2',
        description: 'Uses GROUP BY StageName',
        pattern: 'GROUP\\s+BY\\s+StageName',
        errorMessage: 'Use GROUP BY StageName in your aggregate SOQL query.',
      },
      {
        id: 'tc3',
        description: 'Uses SUM(Amount)',
        pattern: 'SUM\\(Amount\\)',
        errorMessage: 'Use SUM(Amount) in the aggregate query to total up opportunity amounts.',
      },
      {
        id: 'tc4',
        description: 'Iterates over AggregateResult',
        pattern: 'AggregateResult',
        errorMessage: 'Loop over AggregateResult records to extract grouped data.',
      },
      {
        id: 'tc5',
        description: 'Puts results in the map',
        pattern: 'pipelineByStage\\.put',
        errorMessage: 'Add each stage and its total to the pipelineByStage map using .put(stage, total).',
      },
    ],
  },
  // ─── LWC WIRE CHALLENGE ───────────────────────────────────────────────────────
  {
    id: 'challenge-lwc-wire',
    lessonId: 'lwc-wire-apex',
    title: 'Expose and Wire an Apex Method',
    description: 'Write an Apex class with a @AuraEnabled(cacheable=true) method and the LWC JavaScript to @wire it.',
    difficulty: 'intermediate',
    instructions: [
      'Create an Apex class ContactListService with a method getContactsByAccount(Id accountId)',
      'Annotate the method with @AuraEnabled(cacheable=true) and query Contact Id, Name, Email',
      'In a JavaScript file, import getContactsByAccount and use @wire to call it with accountId',
      'Expose a getter hasContacts that returns true when contacts.data has records',
    ],
    starterCode: `// ContactListService.cls
public with sharing class ContactListService {

    // TODO: Add @AuraEnabled(cacheable=true) annotation
    public static List<Contact> getContactsByAccount(Id accountId) {
        // TODO: Return SELECT Id, Name, Email FROM Contact WHERE AccountId = :accountId
    }
}

// contactList.js
import { LightningElement, api, wire } from 'lwc';
// TODO: Import getContactsByAccount from apex

export default class ContactList extends LightningElement {
    @api recordId;

    // TODO: @wire getContactsByAccount with accountId: '$recordId'
    // Property name: contacts

    // TODO: Getter hasContacts — returns true if contacts.data has records
}`,
    solution: `// ContactListService.cls
public with sharing class ContactListService {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsByAccount(Id accountId) {
        return [
            SELECT Id, Name, Email
            FROM Contact
            WHERE AccountId = :accountId
        ];
    }
}

// contactList.js
import { LightningElement, api, wire } from 'lwc';
import getContactsByAccount from '@salesforce/apex/ContactListService.getContactsByAccount';

export default class ContactList extends LightningElement {
    @api recordId;

    @wire(getContactsByAccount, { accountId: '$recordId' })
    contacts;

    get hasContacts() {
        return this.contacts.data && this.contacts.data.length > 0;
    }
}`,
    hints: [
      '@AuraEnabled(cacheable=true) must be on the Apex method for @wire to work',
      'Import path: @salesforce/apex/ClassName.methodName',
      '@wire(methodName, { paramName: \'$property\' }) binds the wire adapter',
      'The $ prefix on \'$recordId\' makes it reactive — re-fetches when recordId changes',
    ],
    solutionExplanation: '@AuraEnabled(cacheable=true) is required for @wire to call the method. The import path is @salesforce/apex/ClassName.methodName. The $ prefix on $recordId makes the wire reactive — it re-calls when recordId changes.',
    testCases: [
      {
        id: 'tc1',
        description: 'Apex method has @AuraEnabled(cacheable=true)',
        pattern: '@AuraEnabled\\(cacheable\\s*=\\s*true\\)',
        errorMessage: 'Add @AuraEnabled(cacheable=true) to the Apex method.',
      },
      {
        id: 'tc2',
        description: 'Apex method queries Contact',
        pattern: 'SELECT.*FROM\\s+Contact\\s+WHERE\\s+AccountId',
        errorMessage: 'Query Contact records filtering by AccountId = :accountId.',
      },
      {
        id: 'tc3',
        description: 'LWC imports the Apex method',
        pattern: "import.*getContactsByAccount.*from\\s+'@salesforce/apex/ContactListService",
        errorMessage: "Import getContactsByAccount from '@salesforce/apex/ContactListService.getContactsByAccount'",
      },
      {
        id: 'tc4',
        description: 'Uses @wire with reactive accountId',
        pattern: "@wire\\s*\\(\\s*getContactsByAccount.*\\$recordId",
        errorMessage: "Use @wire(getContactsByAccount, { accountId: '$recordId' }) contacts;",
      },
      {
        id: 'tc5',
        description: 'Has hasContacts getter',
        pattern: 'get\\s+hasContacts',
        errorMessage: 'Add a getter hasContacts that returns true when contacts.data has records.',
      },
    ],
  },
];

export const getChallengeById = (id: string): Challenge | undefined =>
  challenges.find(c => c.id === id);

export const getChallengeByLessonId = (lessonId: string): Challenge | undefined =>
  challenges.find(c => c.lessonId === lessonId);
