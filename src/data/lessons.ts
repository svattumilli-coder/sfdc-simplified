import type { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 'apex-variables',
    moduleId: 'apex-basics',
    order: 1,
    title: 'Variables and Data Types',
    subtitle: 'The building blocks of every Apex program',
    description: 'Learn how to store and work with different kinds of data in Apex — from numbers and text to dates and Salesforce record IDs.',
    duration: 20,
    difficulty: 'beginner',
    tags: ['apex', 'variables', 'data types'],
    prerequisites: [],
    learningObjectives: [
      'Declare variables using primitive data types',
      'Understand when to use Integer vs Decimal vs Long',
      'Work with String, Boolean, Date, and ID types',
      'Understand null values and type safety',
    ],
    content: [
      {
        type: 'explanation',
        title: 'What is a Variable?',
        text: 'A variable is a named container that holds a value your program can use and change. In Apex, every variable must have a declared type — this tells Salesforce exactly what kind of data it will store.',
      },
      {
        type: 'explanation',
        title: 'Primitive Data Types',
        text: 'Apex has several built-in primitive types:\n\n• **Integer** — whole numbers from -2 billion to 2 billion (e.g., 42, -7)\n• **Long** — larger whole numbers when Integer is not big enough\n• **Decimal** — numbers with decimal places, used for currency (e.g., 99.99)\n• **Double** — floating-point numbers for scientific calculations\n• **String** — text enclosed in single quotes\n• **Boolean** — true or false only\n• **Date** — a calendar date (no time)\n• **DateTime** — a date with a time component\n• **ID** — an 18-character Salesforce record identifier',
      },
      {
        type: 'example',
        title: 'Declaring Variables in Apex',
        text: 'Here is how you declare variables of each type:',
        code: `// Integer — whole numbers
Integer score = 95;
Integer errorCount = 0;

// Decimal — numbers with decimal places (great for currency)
Decimal price = 149.99;
Decimal taxRate = 0.085;

// String — text in single quotes
String firstName = 'Sarah';
String greeting = 'Hello, ' + firstName + '!';

// Boolean — only true or false
Boolean isActive = true;
Boolean hasError = false;

// Date — just a calendar date
Date today = Date.today();
Date birthday = Date.newInstance(1990, 6, 15);

// DateTime — date + time
DateTime now = DateTime.now();

// ID — a Salesforce record identifier
ID accountId = '001000000000001AAA';

System.debug('Score: ' + score);
System.debug('Price: $' + price);
System.debug('Greeting: ' + greeting);
System.debug('Is Active: ' + isActive);
System.debug('Today: ' + today);`,
        output: 'Score: 95\nPrice: $149.99\nGreeting: Hello, Sarah!\nIs Active: true\nToday: 2024-01-15',
      },
      {
        type: 'note',
        title: 'String Concatenation with +',
        text: 'In Apex, the + operator joins strings together. When you combine a String with a non-String (like an Integer), Apex automatically converts it. This is called implicit type conversion.',
      },
      {
        type: 'explanation',
        title: 'Null Values',
        text: 'A variable that has been declared but not assigned a value is null. Null means "no value" — it is different from zero or an empty string. Accessing a method on a null variable causes a NullPointerException, a very common bug in Apex.',
      },
      {
        type: 'example',
        title: 'Null Values and Type Defaults',
        text: 'Understanding null is critical for writing safe Apex code:',
        code: `// Uninitialized variables are null
String name;
System.debug(name);         // Outputs: null
System.debug(name == null); // Outputs: true

// This would throw a NullPointerException!
// Integer len = name.length(); // ERROR!

// Safe pattern — always check for null first
if (name != null) {
    System.debug(name.length());
} else {
    System.debug('Name has no value');
}

// Assigning a value removes the null
name = 'Alex';
System.debug(name.length()); // Outputs: 4

// Boolean defaults to null (not false!)
Boolean isVIP;
System.debug(isVIP); // Outputs: null`,
        output: 'null\ntrue\nName has no value\n4\nnull',
      },
      {
        type: 'tip',
        title: 'Use Meaningful Variable Names',
        text: 'Always name variables to describe what they hold. Write accountName instead of a, or totalPrice instead of t. Code is read far more than it is written.',
      },
      {
        type: 'example',
        title: 'Type Conversion',
        text: 'Sometimes you need to convert between types. Apex provides built-in methods for this:',
        code: `// String to Integer
String numStr = '42';
Integer num = Integer.valueOf(numStr);
System.debug(num + 8); // Outputs: 50

// Integer to String
Integer count = 7;
String msg = 'There are ' + String.valueOf(count) + ' items';
System.debug(msg); // Outputs: There are 7 items

// String to Decimal
String priceStr = '29.95';
Decimal price = Decimal.valueOf(priceStr);
System.debug(price * 2); // Outputs: 59.90

// Date to String
Date today = Date.today();
String dateStr = String.valueOf(today);
System.debug(dateStr); // Outputs: 2024-01-15`,
        output: '50\nThere are 7 items\n59.90\n2024-01-15',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'Which data type would you use to store a product price of $49.99?',
        options: ['Integer', 'Decimal', 'String', 'Boolean'],
        correct: 1,
        explanation: 'Decimal is the correct choice for monetary values because it supports decimal places with precise arithmetic. Integer only stores whole numbers.',
      },
      {
        id: 'q2',
        question: 'What is the output of: String s; System.debug(s);',
        options: ['"" (empty string)', '0', 'null', 'An error is thrown'],
        correct: 2,
        explanation: 'An uninitialized String variable is null in Apex, not an empty string. Null means "no value has been assigned".',
      },
      {
        id: 'q3',
        question: 'What will this output? Integer x = 5; String msg = "Value: " + x; System.debug(msg);',
        options: ['An error', '"Value: " + x', 'Value: 5', 'Value: Integer'],
        correct: 2,
        explanation: 'Apex automatically converts the Integer to a String when using the + operator with a String, so the output is "Value: 5".',
      },
      {
        id: 'q4',
        question: 'Which is the correct way to declare a Boolean variable set to true?',
        options: ['bool isActive = true;', 'Boolean isActive = true;', 'Boolean isActive = "true";', 'bool isActive = 1;'],
        correct: 1,
        explanation: 'In Apex, the correct type name is "Boolean" (capital B). The value must be the literal true or false, not a string or number.',
      },
    ],
    challengeId: 'challenge-variables',
  },
  {
    id: 'apex-strings',
    moduleId: 'apex-basics',
    order: 2,
    title: 'Working with Strings',
    subtitle: 'Text manipulation and common String methods',
    description: 'Master Apex String methods to search, transform, and format text — essential skills for every Salesforce developer.',
    duration: 25,
    difficulty: 'beginner',
    tags: ['apex', 'strings', 'methods'],
    prerequisites: ['apex-variables'],
    learningObjectives: [
      'Use common String methods like length(), toUpperCase(), contains()',
      'Check for null and empty strings safely',
      'Format strings with String.format()',
      'Split and join strings',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Strings in Apex',
        text: 'A String is a sequence of characters. Salesforce uses strings constantly — account names, email addresses, error messages, JSON payloads, and more. Apex provides a rich set of built-in String methods to work with text.',
      },
      {
        type: 'example',
        title: 'Essential String Methods',
        text: 'These are the most common String methods you will use as a Salesforce developer:',
        code: `String email = '  Sarah.Connor@example.com  ';

// Trim whitespace from both ends
String trimmed = email.trim();
System.debug(trimmed); // Sarah.Connor@example.com

// Length — number of characters
System.debug(trimmed.length()); // 24

// Case conversion
System.debug(trimmed.toLowerCase()); // sarah.connor@example.com
System.debug(trimmed.toUpperCase()); // SARAH.CONNOR@EXAMPLE.COM

// Check if string contains a substring
System.debug(trimmed.contains('@')); // true
System.debug(trimmed.contains('gmail')); // false

// Check if starts or ends with something
System.debug(trimmed.startsWith('Sarah')); // true
System.debug(trimmed.endsWith('.com')); // true

// Find position of a substring (0-indexed, -1 if not found)
Integer atPos = trimmed.indexOf('@');
System.debug(atPos); // 13

// Extract part of a string
String domain = trimmed.substring(atPos + 1);
System.debug(domain); // example.com`,
        output: 'Sarah.Connor@example.com\n24\nsarah.connor@example.com\nSARAH.CONNOR@EXAMPLE.COM\ntrue\nfalse\ntrue\ntrue\n13\nexample.com',
      },
      {
        type: 'example',
        title: 'Replace and Split',
        text: 'Replace parts of a string or break it into pieces:',
        code: `String csv = 'apple,banana,cherry,date';

// Split into a List using a delimiter
List<String> fruits = csv.split(',');
System.debug(fruits.size());  // 4
System.debug(fruits[0]);      // apple
System.debug(fruits[2]);      // cherry

// Replace using regex
String phone = '(555) 123-4567';
String cleaned = phone.replaceAll('[^0-9]', '');
System.debug(cleaned); // 5551234567

// Join a list back into a string
String joined = String.join(fruits, ' | ');
System.debug(joined); // apple | banana | cherry | date`,
        output: '4\napple\ncherry\n5551234567\napple | banana | cherry | date',
      },
      {
        type: 'note',
        title: 'String.isBlank() vs String.isEmpty()',
        text: 'Use String.isBlank(s) to check if a string is null, empty (""), or only whitespace. Use String.isEmpty(s) only for null and empty. isBlank() is almost always the safer choice.',
      },
      {
        type: 'example',
        title: 'Null-Safe String Checks',
        text: 'Always validate strings before using them to avoid NullPointerException:',
        code: `String name = null;

// Good — use String.isBlank()
if (String.isBlank(name)) {
    System.debug('Name is required');
} else {
    System.debug('Name: ' + name);
}

// String.format() for structured messages
String template = 'Welcome, {0}! You have {1} new notifications.';
String message = String.format(template, new List<Object>{ 'Alex', 5 });
System.debug(message);

// Padding — useful for formatting reports
String padded = 'Hello'.leftPad(10);
System.debug('|' + padded + '|'); // |     Hello|`,
        output: 'Name is required\nWelcome, Alex! You have 5 new notifications.\n|     Hello|',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What does String.isBlank(s) return for s = "   " (three spaces)?',
        options: ['false, because it has characters', 'true, because spaces-only is considered blank', 'null', 'An error'],
        correct: 1,
        explanation: 'String.isBlank() returns true for null, empty (""), and strings that contain only whitespace.',
      },
      {
        id: 'q2',
        question: 'What is the output of "Hello".indexOf("x")?',
        options: ['0', 'null', '-1', 'An error'],
        correct: 2,
        explanation: 'indexOf() returns -1 when the substring is not found.',
      },
      {
        id: 'q3',
        question: 'How do you get the first 5 characters of a String s?',
        options: ['s.substring(5)', 's.substring(0, 5)', 's.left(5)', 's.slice(0, 5)'],
        correct: 1,
        explanation: 'substring(startIndex, endIndex) extracts from startIndex up to (not including) endIndex. substring(0, 5) gives characters at positions 0-4.',
      },
    ],
    challengeId: 'challenge-strings',
  },
  {
    id: 'apex-conditionals',
    moduleId: 'apex-basics',
    order: 3,
    title: 'Conditionals: if, else, and switch',
    subtitle: 'Make decisions in your code',
    description: 'Learn how to write code that makes decisions based on conditions — the foundation of business logic in Salesforce automation.',
    duration: 25,
    difficulty: 'beginner',
    tags: ['apex', 'conditionals', 'logic', 'if-else'],
    prerequisites: ['apex-variables'],
    learningObjectives: [
      'Write if, else if, and else blocks',
      'Use comparison operators (==, !=, >, <, >=, <=)',
      'Combine conditions with && (AND) and || (OR)',
      'Use switch statements for multiple-choice logic',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Making Decisions with if/else',
        text: 'An if statement runs a block of code only when a condition is true. This is how you build business rules — "if the opportunity amount is over $10,000, require manager approval."',
      },
      {
        type: 'example',
        title: 'Basic if / else if / else',
        text: 'Build a lead scoring system using conditionals:',
        code: `Integer annualRevenue = 500000;
String leadScore;

if (annualRevenue >= 1000000) {
    leadScore = 'Hot';
} else if (annualRevenue >= 250000) {
    leadScore = 'Warm';
} else if (annualRevenue >= 50000) {
    leadScore = 'Cool';
} else {
    leadScore = 'Cold';
}

System.debug('Lead Score: ' + leadScore); // Warm

Boolean isDecisionMaker = true;
Boolean hasUsedCompetitor = false;

if (annualRevenue >= 250000 && isDecisionMaker && !hasUsedCompetitor) {
    System.debug('High priority — send to enterprise team');
} else {
    System.debug('Standard nurture sequence');
}`,
        output: 'Lead Score: Warm\nHigh priority — send to enterprise team',
      },
      {
        type: 'explanation',
        title: 'Comparison Operators',
        text: '**==** equals | **!=** not equals | **>** greater than | **<** less than | **>=** greater than or equal | **<=** less than or equal\n\nIn Apex, use **==** to compare Strings. Apex\'s == for Strings is case-insensitive by default.',
      },
      {
        type: 'example',
        title: 'Logical Operators: AND, OR, NOT',
        text: 'Combine conditions to express complex business rules:',
        code: `Boolean isPremium = true;
Boolean isOverdue = false;
Integer supportTickets = 3;

// AND: both conditions must be true
if (isPremium && supportTickets > 0) {
    System.debug('Priority support applies');
}

// OR: at least one condition must be true
if (isOverdue || supportTickets > 5) {
    System.debug('Escalate to account manager');
} else {
    System.debug('Account is in good standing');
}

// NOT: inverts a boolean
if (!isOverdue) {
    System.debug('Payment is current');
}`,
        output: 'Priority support applies\nAccount is in good standing\nPayment is current',
      },
      {
        type: 'example',
        title: 'switch Statements',
        text: 'When checking one variable against many possible values, switch is cleaner than a long if/else chain:',
        code: `String opportunityStage = 'Negotiation/Review';

switch on opportunityStage {
    when 'Prospecting' {
        System.debug('Send intro materials');
    }
    when 'Qualification' {
        System.debug('Schedule discovery call');
    }
    when 'Negotiation/Review' {
        System.debug('Loop in legal team');
    }
    when 'Closed Won' {
        System.debug('Trigger onboarding workflow');
    }
    when else {
        System.debug('Unknown stage: ' + opportunityStage);
    }
}`,
        output: 'Loop in legal team',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'Integer x = 10; if (x > 5 && x < 8) outputs?',
        options: ['A', 'B', 'Both A and B', 'Nothing'],
        correct: 1,
        explanation: 'x = 10 satisfies x > 5 but NOT x < 8. With AND (&&), both must be true. The else branch runs.',
      },
      {
        id: 'q2',
        question: 'Which keyword is used in Apex switch statements instead of "case"?',
        options: ['case', 'when', 'match', 'on'],
        correct: 1,
        explanation: 'Apex uses "when" in switch statements. The syntax is: switch on variable { when value { ... } }',
      },
      {
        id: 'q3',
        question: "String a = 'hello'; String b = 'HELLO'; System.debug(a == b); outputs?",
        options: ['false', 'true', 'An error', 'null'],
        correct: 1,
        explanation: "Apex's == operator for Strings is case-insensitive, so 'hello' == 'HELLO' returns true.",
      },
    ],
    challengeId: 'challenge-conditionals',
  },
  {
    id: 'apex-loops',
    moduleId: 'apex-basics',
    order: 4,
    title: 'Loops: for, while, and for-each',
    subtitle: 'Repeat actions and process collections',
    description: 'Learn how to repeat operations, iterate over lists, and process Salesforce records in bulk using Apex loops.',
    duration: 30,
    difficulty: 'beginner',
    tags: ['apex', 'loops', 'iteration', 'collections'],
    prerequisites: ['apex-variables', 'apex-conditionals'],
    learningObjectives: [
      'Write traditional for loops with a counter',
      'Use for-each loops to iterate over collections',
      'Use while loops for condition-based repetition',
      'Understand break and continue statements',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Why Loops?',
        text: 'In Salesforce, you often need to process many records at once — update 500 Contacts, calculate totals across related Opportunities, or validate a list of imported Leads. Loops let you write the logic once and apply it to every item.',
      },
      {
        type: 'example',
        title: 'Traditional for Loop',
        text: 'Use a traditional for loop when you need a counter or want to iterate a specific number of times:',
        code: `// Basic counting loop
for (Integer i = 1; i <= 5; i++) {
    System.debug('Processing item #' + i);
}

// Generate multiplication table
Integer multiplier = 3;
for (Integer i = 1; i <= 5; i++) {
    System.debug(multiplier + ' x ' + i + ' = ' + (multiplier * i));
}`,
        output: 'Processing item #1\nProcessing item #2\nProcessing item #3\nProcessing item #4\nProcessing item #5\n3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15',
      },
      {
        type: 'example',
        title: 'For-Each Loop (List Iteration)',
        text: 'The for-each loop is the most common loop in Salesforce code:',
        code: `List<String> stages = new List<String>{
    'Prospecting', 'Qualification', 'Proposal',
    'Negotiation', 'Closed Won'
};

for (String stage : stages) {
    System.debug('Stage: ' + stage);
}

// Calculate total
List<Decimal> amounts = new List<Decimal>{ 1500.00, 3200.50, 800.00, 12000.00 };
Decimal total = 0;
Integer highValueCount = 0;

for (Decimal amount : amounts) {
    total += amount;
    if (amount >= 5000) {
        highValueCount++;
    }
}

System.debug('Total: $' + total);
System.debug('High-value deals: ' + highValueCount);`,
        output: 'Stage: Prospecting\nStage: Qualification\nStage: Proposal\nStage: Negotiation\nStage: Closed Won\nTotal: $17500.50\nHigh-value deals: 1',
      },
      {
        type: 'example',
        title: 'while Loop',
        text: 'Use a while loop when you do not know in advance how many iterations are needed:',
        code: `Integer value = 1000;
Integer steps = 0;

while (value > 1) {
    value = value / 2;
    steps++;
}

System.debug('Steps to reach 1: ' + steps);
System.debug('Final value: ' + value);`,
        output: 'Steps to reach 1: 10\nFinal value: 0',
      },
      {
        type: 'example',
        title: 'break and continue',
        text: 'Control loop execution:',
        code: `List<Integer> numbers = new List<Integer>{ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// continue — skip even numbers
for (Integer n : numbers) {
    if (Math.mod(n, 2) == 0) continue;
    System.debug(n);
}

// break — stop when condition is met
for (Integer n : numbers) {
    if (n == 5) break;
    System.debug(n);
}`,
        output: '1\n3\n5\n7\n9\n1\n2\n3\n4',
      },
      {
        type: 'warning',
        title: 'Governor Limits: Never Query Inside a Loop',
        text: 'The most important rule: NEVER put a SOQL query inside a loop. Doing so can hit the 100-query limit instantly. Always query outside the loop, then iterate over the results. This is called "bulkification" and is the #1 pattern every Salesforce developer must learn.',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What is the output of: for (Integer i = 0; i < 3; i++) { System.debug(i); }',
        options: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '1, 2'],
        correct: 1,
        explanation: 'The loop starts at i=0, runs while i < 3, so it outputs 0, 1, 2.',
      },
      {
        id: 'q2',
        question: 'Which statement exits a loop immediately?',
        options: ['continue', 'return', 'break', 'exit'],
        correct: 2,
        explanation: '"break" immediately exits the enclosing loop. "continue" skips to next iteration.',
      },
      {
        id: 'q3',
        question: 'Why should you never put a SOQL query inside a loop?',
        options: ['It causes a syntax error', 'Salesforce limits you to 100 SOQL queries per transaction', 'SOQL does not work inside loops', 'It makes the code harder to read'],
        correct: 1,
        explanation: 'Salesforce governor limits allow only 100 SOQL queries per transaction. Always bulkify: query once outside, then iterate.',
      },
    ],
    challengeId: 'challenge-loops',
  },
  {
    id: 'apex-lists',
    moduleId: 'apex-basics',
    order: 5,
    title: 'Lists',
    subtitle: 'Ordered collections in Apex',
    description: 'Learn to create, populate, and manipulate ordered lists — the most widely used collection type in Salesforce Apex.',
    duration: 30,
    difficulty: 'beginner',
    tags: ['apex', 'lists', 'collections'],
    prerequisites: ['apex-variables', 'apex-loops'],
    learningObjectives: [
      'Create and initialize Lists',
      'Add, remove, and access elements',
      'Iterate over Lists with for-each',
      'Sort and search Lists',
    ],
    content: [
      {
        type: 'explanation',
        title: 'What is a List?',
        text: 'A List is an ordered collection of items, all of the same type. Lists are zero-indexed — the first element is at index 0. They grow dynamically, so you can add as many items as needed (up to governor limits).',
      },
      {
        type: 'example',
        title: 'Creating and Using Lists',
        text: 'The List class provides many methods for managing ordered collections:',
        code: `// Create an empty list
List<String> names = new List<String>();

// Create with initial values
List<Integer> scores = new List<Integer>{ 85, 92, 78, 96, 88 };

// Add elements
names.add('Alice');
names.add('Bob');
names.add('Charlie');

// Access by index (0-based)
System.debug(names[0]);         // Alice
System.debug(names.get(1));     // Bob

// Size
System.debug(names.size());     // 3

// Check if contains a value
System.debug(names.contains('Bob')); // true

// Remove by index
names.remove(1); // removes Bob
System.debug(names); // (Alice, Charlie)

// Clear all
names.clear();
System.debug(names.size()); // 0`,
        output: 'Alice\nBob\n3\ntrue\n(Alice, Charlie)\n0',
      },
      {
        type: 'example',
        title: 'Sorting and Searching',
        text: 'Sort a List in place and find items:',
        code: `List<Integer> nums = new List<Integer>{ 5, 2, 8, 1, 9, 3 };
nums.sort();
System.debug(nums); // (1, 2, 3, 5, 8, 9)

List<String> fruits = new List<String>{ 'Mango', 'Apple', 'Banana' };
fruits.sort();
System.debug(fruits); // (Apple, Banana, Mango)

// Find max manually
List<Integer> values = new List<Integer>{ 14, 67, 23, 89, 45 };
Integer maxVal = values[0];
for (Integer v : values) {
    if (v > maxVal) maxVal = v;
}
System.debug('Max: ' + maxVal); // Max: 89`,
        output: '(1, 2, 3, 5, 8, 9)\n(Apple, Banana, Mango)\nMax: 89',
      },
      {
        type: 'example',
        title: 'Lists of Salesforce Records',
        text: 'In Salesforce, you frequently work with Lists of sObject records:',
        code: `List<Account> accounts = new List<Account>();

Account acct1 = new Account(Name = 'Acme Corp', Industry = 'Technology');
Account acct2 = new Account(Name = 'Globex Inc', Industry = 'Manufacturing');
Account acct3 = new Account(Name = 'Initech', Industry = 'Technology');

accounts.add(acct1);
accounts.add(acct2);
accounts.add(acct3);

for (Account a : accounts) {
    if (a.Industry == 'Technology') {
        System.debug('Tech company: ' + a.Name);
    }
}`,
        output: 'Tech company: Acme Corp\nTech company: Initech',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What index is the FIRST element of a List in Apex?',
        options: ['1', '0', '-1', 'It depends on the list'],
        correct: 1,
        explanation: 'Apex Lists are zero-indexed. The first element is at index 0, the second at index 1.',
      },
      {
        id: 'q2',
        question: 'What does list.sort() do?',
        options: ['Returns a new sorted list', 'Sorts the list in place (modifies the original)', 'Sorts in descending order', 'Throws an error for non-numeric lists'],
        correct: 1,
        explanation: 'list.sort() sorts the list in-place in ascending order. It modifies the original list.',
      },
      {
        id: 'q3',
        question: 'What happens if you access list[5] on a list with 3 elements?',
        options: ['Returns null', 'Returns 0', 'Throws a System.ListException', 'Returns the last element'],
        correct: 2,
        explanation: 'Accessing an out-of-bounds index throws a System.ListException at runtime.',
      },
    ],
    challengeId: 'challenge-lists',
  },
  {
    id: 'apex-sets',
    moduleId: 'apex-basics',
    order: 6,
    title: 'Sets',
    subtitle: 'Unique, unordered collections',
    description: 'Learn when and how to use Sets — perfect for deduplication, membership checks, and collecting IDs in Salesforce.',
    duration: 20,
    difficulty: 'beginner',
    tags: ['apex', 'sets', 'collections', 'deduplication'],
    prerequisites: ['apex-lists'],
    learningObjectives: [
      'Create and populate Sets',
      'Understand why Sets prevent duplicates',
      'Use Sets for efficient membership checks',
      'Convert between Sets and Lists',
    ],
    content: [
      {
        type: 'explanation',
        title: 'What is a Set?',
        text: 'A Set is a collection that automatically eliminates duplicates. Unlike a List, a Set has no defined order and cannot contain the same value twice. Sets are commonly used for:\n\n• Collecting unique IDs to query\n• Deduplicating imported data\n• Fast membership checks (is this ID in the set?)',
      },
      {
        type: 'example',
        title: 'Creating and Using Sets',
        text: 'Sets automatically reject duplicate values:',
        code: `Set<String> industries = new Set<String>();

industries.add('Technology');
industries.add('Healthcare');
industries.add('Technology'); // Duplicate — ignored!
industries.add('Finance');

System.debug(industries.size());              // 3
System.debug(industries.contains('Finance')); // true
System.debug(industries.contains('Retail'));  // false

// Iterate — order is not guaranteed!
for (String ind : industries) {
    System.debug('Industry: ' + ind);
}`,
        output: '3\ntrue\nfalse\nIndustry: Technology\nIndustry: Healthcare\nIndustry: Finance',
      },
      {
        type: 'example',
        title: 'Collecting IDs for Bulk Queries',
        text: 'One of the most common Set patterns in Salesforce:',
        code: `// Collect unique Account IDs from a list of Contacts
List<Contact> contacts = new List<Contact>();
contacts.add(new Contact(LastName = 'Smith', AccountId = '001000000000001'));
contacts.add(new Contact(LastName = 'Jones', AccountId = '001000000000002'));
contacts.add(new Contact(LastName = 'Brown', AccountId = '001000000000001')); // same Account!

Set<ID> accountIds = new Set<ID>();
for (Contact c : contacts) {
    accountIds.add(c.AccountId);
}

System.debug('Unique accounts to query: ' + accountIds.size()); // 2

// Now query once with all IDs (not in a loop!)
// List<Account> accounts = [SELECT Id, Name FROM Account WHERE Id IN :accountIds];`,
        output: 'Unique accounts to query: 2',
      },
      {
        type: 'example',
        title: 'Converting Between Set and List',
        text: 'Sets and Lists can be easily converted to each other:',
        code: `// List to Set — removes duplicates
List<String> rawTags = new List<String>{ 'vip', 'prospect', 'vip', 'hot' };
Set<String> uniqueTags = new Set<String>(rawTags);
System.debug(uniqueTags.size()); // 3

// Set to List — so you can sort or access by index
List<String> sortedTags = new List<String>(uniqueTags);
sortedTags.sort();
System.debug(sortedTags); // (hot, prospect, vip)`,
        output: '3\n(hot, prospect, vip)',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What happens when you add a duplicate value to a Set?',
        options: ['It throws an exception', 'The Set stores both copies', 'The new value replaces the old one', 'The add() call is silently ignored'],
        correct: 3,
        explanation: 'Sets silently ignore duplicate adds. set.add() returns false if the value already exists, size stays the same.',
      },
      {
        id: 'q2',
        question: 'Why are Sets commonly used to collect Salesforce IDs before a SOQL query?',
        options: ['Sets are faster to iterate than Lists', 'To deduplicate IDs so you only query each record once', 'SOQL only accepts Set types', 'IDs cannot be stored in Lists'],
        correct: 1,
        explanation: 'Using a Set ensures you query each record at most once, avoiding unnecessary governor limit usage.',
      },
    ],
    challengeId: 'challenge-sets',
  },
  {
    id: 'apex-maps',
    moduleId: 'apex-basics',
    order: 7,
    title: 'Maps',
    subtitle: 'Key-value pair collections',
    description: 'Master Maps — one of the most powerful data structures in Apex for fast lookups and indexed access.',
    duration: 30,
    difficulty: 'beginner',
    tags: ['apex', 'maps', 'collections', 'key-value'],
    prerequisites: ['apex-lists', 'apex-sets'],
    learningObjectives: [
      'Create and populate Maps',
      'Get, put, and remove key-value pairs',
      'Iterate over keys, values, and entries',
      'Use Map<ID, sObject> for efficient record lookup',
    ],
    content: [
      {
        type: 'explanation',
        title: 'What is a Map?',
        text: 'A Map stores data as key → value pairs, where each key is unique. Think of it like a dictionary: you look up a word (key) to get its definition (value). Maps allow constant-time lookup, making them ideal for finding records by ID.',
      },
      {
        type: 'example',
        title: 'Creating and Using Maps',
        text: 'Basic Map operations:',
        code: `Map<String, Integer> stageOrder = new Map<String, Integer>();

stageOrder.put('Prospecting', 1);
stageOrder.put('Qualification', 2);
stageOrder.put('Proposal', 3);
stageOrder.put('Negotiation', 4);
stageOrder.put('Closed Won', 5);

// Get a value by key
Integer order = stageOrder.get('Proposal');
System.debug('Proposal is step: ' + order); // 3

// Check if key exists
System.debug(stageOrder.containsKey('Demo'));        // false
System.debug(stageOrder.containsKey('Negotiation')); // true

// Size
System.debug(stageOrder.size()); // 5

// Iterate over entries
for (String stage : stageOrder.keySet()) {
    System.debug(stage + ' -> ' + stageOrder.get(stage));
}`,
        output: 'Proposal is step: 3\nfalse\ntrue\n5\nProspecting -> 1\nQualification -> 2\n...',
      },
      {
        type: 'example',
        title: 'Map<ID, Account>: The Most Important Pattern',
        text: 'Build a Map from a SOQL query for fast record lookup:',
        code: `// Build a lookup map from SOQL results
// Map<ID, Account> accountMap = new Map<ID, Account>(
//   [SELECT Id, Name FROM Account LIMIT 100]
// );

// Iterate over a Map with pricing
Map<String, Decimal> prices = new Map<String, Decimal>{
    'Starter' => 29.99,
    'Professional' => 79.99,
    'Enterprise' => 299.99
};

for (String plan : prices.keySet()) {
    Decimal price = prices.get(plan);
    System.debug(plan + ': $' + price);
}

// Safe lookup with null check
Decimal startPrice = prices.get('Starter');
if (startPrice != null) {
    System.debug('Starter plan costs: $' + startPrice);
}`,
        output: 'Starter: $29.99\nProfessional: $79.99\nEnterprise: $299.99\nStarter plan costs: $29.99',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What does map.get(key) return if the key does not exist?',
        options: ['An empty string', '0', 'null', 'It throws a KeyNotFoundException'],
        correct: 2,
        explanation: 'map.get(key) returns null if the key does not exist. Always check for null before using the result.',
      },
      {
        id: 'q2',
        question: 'What is the key type in a Map<ID, Account>?',
        options: ['Account', 'ID', 'String', 'sObject'],
        correct: 1,
        explanation: 'In Map<K, V>, the first type parameter is the key type. In Map<ID, Account>, ID is the key type.',
      },
    ],
    challengeId: 'challenge-maps',
  },
  {
    id: 'apex-classes',
    moduleId: 'apex-basics',
    order: 8,
    title: 'Apex Classes and Methods',
    subtitle: 'Organize your code into reusable units',
    description: 'Learn how to create Apex classes with properties and methods to build organized, reusable business logic.',
    duration: 35,
    difficulty: 'beginner',
    tags: ['apex', 'classes', 'methods', 'oop'],
    prerequisites: ['apex-variables', 'apex-conditionals', 'apex-loops'],
    learningObjectives: [
      'Create Apex classes with properties',
      'Write methods with parameters and return values',
      'Understand access modifiers (public, private)',
      'Create constructors',
    ],
    content: [
      {
        type: 'explanation',
        title: 'What is an Apex Class?',
        text: 'A class is a blueprint for creating objects. It bundles related data (properties) and behavior (methods) together. In Salesforce, all Apex code lives inside classes — triggers call them, flows invoke them, and APIs use them.',
      },
      {
        type: 'example',
        title: 'Your First Apex Class',
        text: 'A simple class to model a pricing calculator:',
        code: `public class PricingCalculator {

    private Decimal basePrice;
    private Decimal discountRate;
    public String currency;

    // Constructor
    public PricingCalculator(Decimal price) {
        this.basePrice = price;
        this.discountRate = 0;
        this.currency = 'USD';
    }

    // Constructor with discount
    public PricingCalculator(Decimal price, Decimal discount) {
        this.basePrice = price;
        this.discountRate = discount;
        this.currency = 'USD';
    }

    public Decimal getFinalPrice() {
        return basePrice - (basePrice * discountRate);
    }

    public String formatPrice() {
        return currency + ' ' + getFinalPrice().setScale(2);
    }

    // Static method — doesn't need an instance
    public static Decimal applyTax(Decimal price, Decimal taxRate) {
        return price * (1 + taxRate);
    }
}

// Using the class:
PricingCalculator calc = new PricingCalculator(100.00, 0.20);
System.debug(calc.getFinalPrice());                  // 80.00
System.debug(calc.formatPrice());                    // USD 80.00
System.debug(PricingCalculator.applyTax(80, 0.08)); // 86.40`,
        output: '80.00\nUSD 80.00\n86.40',
      },
      {
        type: 'explanation',
        title: 'Access Modifiers',
        text: '**public** — accessible from anywhere\n**private** — only accessible within the same class\n**protected** — accessible within the class and subclasses\n**global** — accessible from any Apex code, including external packages\n\nBest practice: keep properties private and expose them through methods (encapsulation).',
      },
      {
        type: 'example',
        title: 'Static vs Instance Members',
        text: 'Static members belong to the class; instance members belong to each object:',
        code: `public class Counter {
    private Integer count;
    private static Integer totalCreated = 0;

    public Counter() {
        count = 0;
        totalCreated++;
    }

    public void increment() { count++; }
    public Integer getCount() { return count; }

    public static Integer getTotalCreated() {
        return totalCreated;
    }
}

Counter c1 = new Counter();
Counter c2 = new Counter();
c1.increment();
c1.increment();
c2.increment();

System.debug('c1 count: ' + c1.getCount()); // 2
System.debug('c2 count: ' + c2.getCount()); // 1
System.debug('Total: ' + Counter.getTotalCreated()); // 2`,
        output: 'c1 count: 2\nc2 count: 1\nTotal: 2',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What access modifier makes a method accessible only within its own class?',
        options: ['public', 'protected', 'private', 'local'],
        correct: 2,
        explanation: '"private" restricts access to only code within the same class.',
      },
      {
        id: 'q2',
        question: 'How do you call a static method named calculate() on a class named TaxHelper?',
        options: ['new TaxHelper().calculate()', 'TaxHelper.calculate()', 'TaxHelper::calculate()', 'static.TaxHelper.calculate()'],
        correct: 1,
        explanation: 'Static methods are called on the class directly: ClassName.methodName(). No new keyword needed.',
      },
      {
        id: 'q3',
        question: 'What is a constructor used for?',
        options: ['To destroy an object when done', 'To define the return type', 'To initialize an object when created with "new"', 'To declare static variables'],
        correct: 2,
        explanation: 'A constructor runs automatically when you create a new instance with "new ClassName()". It sets up initial property values.',
      },
    ],
    challengeId: 'challenge-classes',
  },
  {
    id: 'soql-basics',
    moduleId: 'soql',
    order: 9,
    title: 'SOQL Fundamentals',
    subtitle: 'Query your Salesforce data like a pro',
    description: 'Learn how to write SOQL queries to read data from Salesforce objects',
    duration: 30,
    difficulty: 'beginner',
    tags: ['soql', 'queries', 'select', 'where', 'order by'],
    prerequisites: ['apex-classes'],
    learningObjectives: [
      'Write a basic SELECT query',
      'Filter records with WHERE clauses',
      'Sort and limit results',
      'Query related objects with relationship queries',
      'Use aggregate functions like COUNT and SUM',
    ],
    content: [
      {
        type: 'explanation',
        title: 'What is SOQL?',
        text: `SOQL stands for Salesforce Object Query Language. It is how you read data stored in Salesforce.

Think of it like asking a question to your database:
"Give me all Accounts where the industry is Technology, sorted by name."

SOQL only reads data — it never creates, updates, or deletes records. For that, you use DML (covered in the next lesson).

SOQL looks very similar to SQL if you have seen it before, but it is designed specifically for the Salesforce data model.`,
      },
      {
        type: 'example',
        title: 'Basic SELECT Query',
        text: `The simplest SOQL query has three parts:

SELECT   — which fields you want
FROM     — which object to query

\`\`\`sql
SELECT Id, Name, Industry
FROM Account
\`\`\`

This returns all Account records with their Id, Name, and Industry fields.

You can select as many fields as you need, separated by commas. Always include Id — it is the unique identifier for every record.`,
      },
      {
        type: 'example',
        title: 'Filtering with WHERE',
        text: `Use WHERE to filter which records you get back.

\`\`\`sql
SELECT Id, Name, Industry
FROM Account
WHERE Industry = 'Technology'
\`\`\`

Common comparison operators:
  =      equals
  !=     not equals
  >      greater than
  <      less than
  >=     greater than or equal
  <=     less than or equal
  LIKE   pattern matching (use % as wildcard)
  IN     matches any value in a list

Examples:

\`\`\`sql
-- Accounts with more than 500 employees
SELECT Id, Name, NumberOfEmployees
FROM Account
WHERE NumberOfEmployees > 500

-- Contacts with a Gmail address
SELECT Id, FirstName, LastName, Email
FROM Contact
WHERE Email LIKE '%@gmail.com'

-- Opportunities in specific stages
SELECT Id, Name, StageName, Amount
FROM Opportunity
WHERE StageName IN ('Prospecting', 'Qualification', 'Proposal')
\`\`\``,
      },
      {
        type: 'example',
        title: 'Combining Conditions with AND / OR',
        text: `You can combine multiple conditions using AND and OR.

\`\`\`sql
-- Technology accounts with more than 100 employees
SELECT Id, Name, Industry, NumberOfEmployees
FROM Account
WHERE Industry = 'Technology'
AND NumberOfEmployees > 100

-- Accounts in Technology OR Finance
SELECT Id, Name, Industry
FROM Account
WHERE Industry = 'Technology'
OR Industry = 'Finance'
\`\`\`

Use parentheses to group conditions and control precedence:

\`\`\`sql
SELECT Id, Name, Industry, NumberOfEmployees
FROM Account
WHERE (Industry = 'Technology' OR Industry = 'Finance')
AND NumberOfEmployees > 200
\`\`\``,
      },
      {
        type: 'example',
        title: 'Sorting with ORDER BY',
        text: `Use ORDER BY to sort results. Add ASC (ascending, A→Z) or DESC (descending, Z→A).

\`\`\`sql
-- Sort accounts alphabetically by name
SELECT Id, Name
FROM Account
ORDER BY Name ASC

-- Sort opportunities by amount, largest first
SELECT Id, Name, Amount
FROM Opportunity
ORDER BY Amount DESC

-- Sort by multiple fields
SELECT Id, LastName, FirstName
FROM Contact
ORDER BY LastName ASC, FirstName ASC
\`\`\``,
      },
      {
        type: 'example',
        title: 'Limiting Results with LIMIT',
        text: `LIMIT caps how many records are returned. Always use LIMIT to avoid pulling thousands of records unnecessarily.

\`\`\`sql
-- Get the 10 most recently created accounts
SELECT Id, Name, CreatedDate
FROM Account
ORDER BY CreatedDate DESC
LIMIT 10

-- Get just one record
SELECT Id, Name
FROM Account
WHERE Name = 'Acme Corp'
LIMIT 1
\`\`\`

LIMIT is required when running SOQL in loops (governor limits). You can query a maximum of 50,000 records per transaction.`,
      },
      {
        type: 'example',
        title: 'NULL Checks',
        text: `To check if a field is empty, use = null or != null (not IS NULL like in standard SQL).

\`\`\`sql
-- Contacts without an email address
SELECT Id, FirstName, LastName
FROM Contact
WHERE Email = null

-- Opportunities that have a close date set
SELECT Id, Name, CloseDate
FROM Opportunity
WHERE CloseDate != null
\`\`\``,
      },
      {
        type: 'example',
        title: 'Relationship Queries (Parent → Child)',
        text: `Salesforce records are connected. You can query related data in one query.

CHILD TO PARENT — use dot notation to get fields from a parent record:

\`\`\`sql
-- Get contact name AND their account name in one query
SELECT Id, FirstName, LastName, Account.Name, Account.Industry
FROM Contact
WHERE Account.Industry = 'Technology'
\`\`\`

PARENT TO CHILD — use a subquery to get related child records:

\`\`\`sql
-- Get accounts and all their contacts
SELECT Id, Name,
  (SELECT Id, FirstName, LastName FROM Contacts)
FROM Account
WHERE Industry = 'Technology'
\`\`\`

The child object name in a subquery uses the relationship name (usually the plural of the child object — Contacts, Opportunities, Cases).`,
      },
      {
        type: 'example',
        title: 'Aggregate Functions',
        text: `SOQL supports aggregate functions to calculate summaries across records.

\`\`\`sql
-- Count all accounts
SELECT COUNT()
FROM Account

-- Count accounts per industry
SELECT Industry, COUNT(Id)
FROM Account
GROUP BY Industry

-- Total opportunity amount per stage
SELECT StageName, SUM(Amount), COUNT(Id)
FROM Opportunity
GROUP BY StageName

-- Average employee count
SELECT AVG(NumberOfEmployees)
FROM Account
WHERE Industry = 'Technology'
\`\`\`

Available aggregate functions: COUNT(), SUM(), AVG(), MIN(), MAX()

Use GROUP BY when you want totals broken down by a field. Use HAVING to filter groups (like WHERE but for aggregates):

\`\`\`sql
-- Industries with more than 5 accounts
SELECT Industry, COUNT(Id)
FROM Account
GROUP BY Industry
HAVING COUNT(Id) > 5
\`\`\``,
      },
      {
        type: 'note',
        title: 'SOQL vs SQL — Key Differences',
        text: `If you know SQL, here are the important differences in SOQL:

✓ No SELECT * — you must list field names explicitly (or use Id, Name, etc.)
✓ No JOIN — use relationship queries (dot notation or subqueries) instead
✓ Use = null instead of IS NULL
✓ String values use single quotes: WHERE Name = 'Acme'
✓ Dates use a special format: WHERE CloseDate > 2024-01-01
✓ There is no DISTINCT keyword
✓ Governor limit: max 50,000 records per query, 100 queries per transaction`,
      },
      {
        type: 'tip',
        title: 'Query Builder in This App',
        text: `Use the SOQL Explorer tool in this app to build and test queries visually. You can select fields, add filters, sort results, and see the matching records from the sample dataset — all without needing a real Salesforce org.`,
      },
    ],
    quiz: [
      {
        id: 'soql-q1',
        question: 'What keyword do you use to filter records in a SOQL query?',
        options: ['FILTER', 'WHERE', 'HAVING', 'CONDITION'],
        correct: 1,
        explanation: 'WHERE is used to filter which records are returned. HAVING is used to filter grouped aggregate results.',
      },
      {
        id: 'soql-q2',
        question: 'Which query returns accounts sorted from most employees to fewest?',
        options: [
          'SELECT Id, Name FROM Account SORT BY NumberOfEmployees',
          'SELECT Id, Name FROM Account ORDER BY NumberOfEmployees DESC',
          'SELECT Id, Name FROM Account ORDER BY NumberOfEmployees ASC',
          'SELECT Id, Name FROM Account WHERE NumberOfEmployees > 0',
        ],
        correct: 1,
        explanation: 'ORDER BY field DESC sorts in descending order (largest to smallest). ASC is ascending (smallest to largest).',
      },
      {
        id: 'soql-q3',
        question: 'How do you check if a field has no value in SOQL?',
        options: [
          'WHERE Email IS NULL',
          'WHERE Email = NULL',
          'WHERE Email = null',
          'WHERE Email == null',
        ],
        correct: 2,
        explanation: 'SOQL uses = null (lowercase) to check for empty fields, unlike SQL which uses IS NULL.',
      },
      {
        id: 'soql-q4',
        question: 'What does LIMIT 10 do in a SOQL query?',
        options: [
          'Skips the first 10 records',
          'Returns only the first 10 records',
          'Filters records where a field is less than 10',
          'Groups records into batches of 10',
        ],
        correct: 1,
        explanation: 'LIMIT caps the number of records returned. LIMIT 10 means at most 10 records come back.',
      },
    ],
    challengeId: 'challenge-soql',
  },
  {
    id: 'apex-dml',
    moduleId: 'dml',
    order: 1,
    title: 'DML: Saving Data to Salesforce',
    subtitle: 'Insert, update, delete, and upsert records',
    description: 'Learn how to create, modify, and delete Salesforce records using Data Manipulation Language (DML) operations in Apex.',
    duration: 35,
    difficulty: 'beginner',
    tags: ['apex', 'dml', 'database', 'insert', 'update'],
    prerequisites: ['soql-basics', 'apex-lists'],
    learningObjectives: [
      'Use insert to create new records',
      'Use update to modify existing records',
      'Use delete to remove records',
      'Use upsert to insert or update based on a key',
      'Handle DML exceptions safely',
    ],
    content: [
      {
        type: 'explanation',
        title: 'What is DML?',
        text: 'DML (Data Manipulation Language) is how you write data to the Salesforce database. Five main DML operations:\n\n• **insert** — create new records\n• **update** — modify existing records\n• **delete** — remove records\n• **upsert** — insert if new, update if exists\n• **undelete** — restore deleted records from the recycle bin',
      },
      {
        type: 'example',
        title: 'Insert: Creating Records',
        text: 'Create single or bulk records:',
        code: `// Insert a single record
Account newAcct = new Account(
    Name = 'Stellar Dynamics',
    Industry = 'Technology',
    Phone = '415-555-0100'
);
insert newAcct;
// After insert, newAcct.Id is populated!
System.debug('Created Account ID: ' + newAcct.Id);

// Bulk insert — ALWAYS prefer this
List<Contact> contacts = new List<Contact>();
for (Integer i = 1; i <= 5; i++) {
    contacts.add(new Contact(
        FirstName = 'Employee',
        LastName = String.valueOf(i),
        AccountId = newAcct.Id,
        Email = 'employee' + i + '@stellar.com'
    ));
}
insert contacts; // ONE DML statement for all 5 records
System.debug('Created ' + contacts.size() + ' contacts');`,
        output: 'Created Account ID: 001000000000001AAA\nCreated 5 contacts',
      },
      {
        type: 'example',
        title: 'Update and Upsert',
        text: 'Modify existing records or insert-or-update:',
        code: `// Update: query first, then modify, then save
List<Account> toUpdate = [SELECT Id, AnnualRevenue
                           FROM Account
                           WHERE Name = 'Stellar Dynamics'
                           LIMIT 1];

if (!toUpdate.isEmpty()) {
    toUpdate[0].AnnualRevenue = 5000000;
    update toUpdate[0];
    System.debug('Updated successfully');
}

// Upsert using an external ID field
Account extAcct = new Account(
    Name = 'Partner Co',
    External_ID__c = 'PARTNER-001'
);
upsert extAcct Account.External_ID__c;
// If External_ID__c = 'PARTNER-001' exists → update
// Otherwise → insert`,
        output: 'Updated successfully',
      },
      {
        type: 'example',
        title: 'DML Exception Handling',
        text: 'Handle failures gracefully with try/catch:',
        code: `try {
    Account badAcct = new Account(); // Missing required Name!
    insert badAcct;
} catch (DmlException e) {
    System.debug('DML Error: ' + e.getMessage());
}

// Database.insert with partial success
List<Account> accts = new List<Account>{
    new Account(Name = 'Good Account'),
    new Account(), // Missing name — will fail
    new Account(Name = 'Another Good One')
};

Database.SaveResult[] results = Database.insert(accts, false);
for (Integer i = 0; i < results.size(); i++) {
    if (results[i].isSuccess()) {
        System.debug('Record ' + i + ' inserted: ' + results[i].getId());
    } else {
        System.debug('Record ' + i + ' failed: ' +
            results[i].getErrors()[0].getMessage());
    }
}`,
        output: 'DML Error: Insert failed...\nRecord 0 inserted: 001...\nRecord 1 failed: Required fields are missing: [Name]\nRecord 2 inserted: 001...',
      },
      {
        type: 'warning',
        title: 'DML Governor Limits',
        text: 'Like SOQL, DML has strict limits:\n• Max 150 DML statements per transaction\n• Max 10,000 records per DML operation\n\nAlways use bulk DML (pass a List) rather than individual DML in a loop.',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'After executing "insert myAccount;", what happens to myAccount.Id?',
        options: ['It remains null', 'Salesforce populates it with the new record ID', 'It is set to "pending"', 'You must query it separately'],
        correct: 1,
        explanation: 'After a successful DML insert, Salesforce automatically populates the Id field on your Apex object.',
      },
      {
        id: 'q2',
        question: 'What does upsert do differently from insert?',
        options: ['upsert can delete records too', 'upsert inserts if the record does not exist, updates it if it does', 'upsert is faster than insert', 'upsert only works with custom objects'],
        correct: 1,
        explanation: '"upsert" combines insert + update: if a matching record exists, it updates; otherwise, it inserts.',
      },
      {
        id: 'q3',
        question: 'What is the benefit of Database.insert(list, false)?',
        options: ['It is faster', 'It allows partial success — some records can succeed even if others fail', 'It bypasses validation rules', 'It skips duplicate checking'],
        correct: 1,
        explanation: 'Database.insert(list, false) sets allOrNothing to false, allowing partial success even when some records fail.',
      },
    ],
    challengeId: 'challenge-dml',
  },
  // ─── APEX EXCEPTIONS ─────────────────────────────────────────────────────────
  {
    id: 'apex-exception-handling',
    moduleId: 'apex-exceptions',
    order: 1,
    title: 'Exception Handling in Apex',
    subtitle: 'Write bulletproof code that handles failures gracefully',
    description: 'Learn how to catch and recover from runtime errors in Apex using try/catch/finally, specific exception types, and custom exceptions.',
    duration: 25,
    difficulty: 'beginner',
    tags: ['apex', 'exceptions', 'try-catch', 'error-handling', 'DmlException'],
    prerequisites: ['apex-dml'],
    learningObjectives: [
      'Write try/catch/finally blocks to handle runtime errors',
      'Catch specific exception types like DmlException and QueryException',
      'Create custom exception classes for domain-specific errors',
      'Use e.getMessage() and e.getStackTraceString() to log errors',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Exception handling prevents small errors from crashing entire transactions:\n\n• **Bulk data imports** — when processing 200 leads, one bad record should not roll back the other 199. Catch per-record errors with Database.insert(allOrNone=false)\n• **Callout failures** — if an external API is down, catch the exception, log it, and queue a retry rather than surfacing a raw error to the user\n• **Validation feedback** — throw a custom exception with a business-readable message when data violates a rule, so the calling code can display it cleanly',
      },
      {
        type: 'example',
        title: 'try / catch / finally',
        text: 'The basic structure for handling exceptions:',
        code: `public class AccountService {

    public static Account getAccount(Id accountId) {
        try {
            // Code that might throw an exception
            Account acc = [SELECT Id, Name, AnnualRevenue
                           FROM Account WHERE Id = :accountId LIMIT 1];
            System.debug('Found: ' + acc.Name);
            return acc;

        } catch (QueryException e) {
            // Runs if the SOQL query fails (e.g. record not found)
            System.debug('Query failed: ' + e.getMessage());
            System.debug('Stack trace: ' + e.getStackTraceString());
            return null;

        } catch (Exception e) {
            // Catch-all for any other exception type
            System.debug('Unexpected error: ' + e.getMessage());
            throw e; // rethrow to let the caller handle it

        } finally {
            // Always runs — regardless of success or exception
            System.debug('getAccount() completed');
        }
    }
}`,
        output: 'getAccount() completed\n// (even if an exception occurred)',
      },
      {
        type: 'explanation',
        title: 'Common Apex Exception Types',
        text: '• **DmlException** — insert/update/delete failures (required fields missing, duplicate rules violated)\n• **QueryException** — SOQL issues (too many rows, no rows when exactly one expected with assignment)\n• **NullPointerException** — calling a method on a null variable\n• **ListException** — accessing a List index out of bounds\n• **CalloutException** — HTTP callout errors\n• **Exception** — the base class for all exceptions (catch-all)\n\nAlways catch the most specific exception first, then broader ones.',
      },
      {
        type: 'example',
        title: 'Custom Exception Classes',
        text: 'Create domain-specific exceptions with meaningful names and messages:',
        code: `// Define custom exceptions — extend Exception
public class AccountService {

    public class InsufficientCreditException extends Exception {}
    public class AccountNotFoundException extends Exception {}

    public static void processOrder(Id accountId, Decimal orderAmount) {
        Account acc;
        try {
            acc = [SELECT Id, Name, CreditLimit__c
                   FROM Account WHERE Id = :accountId LIMIT 1];
        } catch (QueryException e) {
            throw new AccountNotFoundException(
                'Account not found: ' + accountId
            );
        }

        if (acc.CreditLimit__c < orderAmount) {
            throw new InsufficientCreditException(
                acc.Name + ' has insufficient credit. ' +
                'Limit: $' + acc.CreditLimit__c + ', Order: $' + orderAmount
            );
        }

        System.debug('Order approved for ' + acc.Name);
    }
}

// Caller handles specific exceptions:
try {
    AccountService.processOrder(someId, 50000);
} catch (AccountService.InsufficientCreditException e) {
    System.debug('Credit issue: ' + e.getMessage());
} catch (AccountService.AccountNotFoundException e) {
    System.debug('Not found: ' + e.getMessage());
}`,
        output: 'Credit issue: Acme Corp has insufficient credit. Limit: $25000, Order: $50000',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What is wrong with this exception handling code?\n\n```apex\ntry {\n    Account acc = [SELECT Id FROM Account WHERE Id = :someId LIMIT 1];\n    insert acc;\n} catch (Exception e) {\n    System.debug(e.getMessage());\n} catch (DmlException e) {\n    System.debug(\'DML error: \' + e.getMessage());\n}\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'The catch blocks are in the wrong order. `catch (Exception e)` catches ALL exceptions — including DmlException. Since Exception is the base class, it catches everything first, and the `catch (DmlException e)` block is dead code that can never execute.\n\nFixed version — most specific exception first:\n```apex\ntry {\n    Account acc = [SELECT Id FROM Account WHERE Id = :someId LIMIT 1];\n    insert acc;\n} catch (QueryException e) {\n    System.debug(\'Query error: \' + e.getMessage());\n} catch (DmlException e) {\n    System.debug(\'DML error: \' + e.getMessage());\n} catch (Exception e) {\n    System.debug(\'Unexpected: \' + e.getMessage());\n}\n```\n\nAlways order catch blocks from most specific to least specific.',
      },
      {
        type: 'tip',
        title: 'Other Approaches',
        text: '**Database.insert(list, false)** (allOrNone=false) is an alternative to try/catch for DML — it returns SaveResult[] so you can check each record\'s success/failure without an exception being thrown. Use this for bulk operations where partial success is acceptable. Use try/catch for single-record operations or when you need to roll back the entire transaction on failure.',
      },
    ],
    quiz: [
      {
        id: 'exc-q1',
        question: 'Which code block always runs, whether an exception occurred or not?',
        options: ['catch', 'try', 'finally', 'throw'],
        correct: 2,
        explanation: 'The finally block always executes after try and catch — it is used for cleanup code like closing connections or logging completion.',
      },
      {
        id: 'exc-q2',
        question: 'What is wrong with this order: catch(Exception e) THEN catch(DmlException e)?',
        options: [
          'Nothing — it is correct',
          'Exception is a base class and catches everything — DmlException block is unreachable',
          'DmlException must always be caught first',
          'You cannot catch both Exception and DmlException',
        ],
        correct: 1,
        explanation: 'Exception is the superclass of all exceptions. If listed first, it catches DmlException too, making the DmlException catch unreachable. Always list specific exceptions first.',
      },
      {
        id: 'exc-q3',
        question: 'How do you create a custom exception class in Apex?',
        options: [
          'public class MyException implements Exception {}',
          'public class MyException extends Exception {}',
          'public exception class MyException {}',
          'exception MyException = new Exception();',
        ],
        correct: 1,
        explanation: 'Custom exceptions extend the Exception class: public class MyException extends Exception {}. No body is required — the constructor and getMessage() are inherited.',
      },
      {
        id: 'exc-q4',
        question: 'Which exception is thrown when you call a method on a null variable?',
        options: ['DmlException', 'CalloutException', 'NullPointerException', 'ListException'],
        correct: 2,
        explanation: 'NullPointerException is thrown when you dereference a null value, such as calling name.length() when name is null.',
      },
    ],
    challengeId: 'challenge-apex-exceptions',
  },
  // ─── APEX TESTING ─────────────────────────────────────────────────────────────
  {
    id: 'apex-test-basics',
    moduleId: 'apex-testing',
    order: 1,
    title: 'Writing Your First Apex Test Class',
    subtitle: 'Ensure your code works with automated tests',
    description: 'Learn how to write Apex test classes with @isTest, assert methods, and Test.startTest/stopTest to verify your business logic.',
    duration: 35,
    difficulty: 'intermediate',
    tags: ['apex', 'testing', '@isTest', 'unit-tests', 'coverage'],
    prerequisites: ['apex-classes', 'apex-dml'],
    learningObjectives: [
      'Create a test class using the @isTest annotation',
      'Write test methods that assert expected outcomes',
      'Use Test.startTest() and Test.stopTest() to isolate governor limits',
      'Understand the 75% code coverage requirement for production deployment',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Apex tests are mandatory in Salesforce — not optional:\n\n• **Production deployments require 75% code coverage** — Salesforce enforces this automatically; without tests, your code cannot ship\n• **Regression safety** — a test suite catches when a new trigger breaks an existing feature before it reaches users\n• **CI/CD pipelines** — automated deployments run tests on every pull request, catching bugs before merge\n• **Refactoring confidence** — tests let you restructure code aggressively knowing the behavior is verified',
      },
      {
        type: 'explanation',
        title: 'Anatomy of a Test Class',
        text: 'A test class is a regular Apex class annotated with @isTest. It never counts against your org\'s code limit. Test methods are annotated with @isTest (or the older @testMethod). Test classes cannot be instantiated by other code.\n\nKey rules:\n• Test data is not visible to production data and vice versa (SeeAllData=false by default)\n• Tests must call real Apex code — they cannot call real external services\n• Test assertions use System.assert*, System.assertEquals, System.assertNotEquals',
      },
      {
        type: 'example',
        title: 'Your First Test Class',
        text: 'Test a PricingCalculator class with happy path and edge cases:',
        code: `@isTest
private class PricingCalculatorTest {

    @isTest
    static void testGetFinalPrice_withDiscount() {
        // Arrange
        PricingCalculator calc = new PricingCalculator(100.00, 0.20);

        // Act
        Test.startTest();
        Decimal result = calc.getFinalPrice();
        Test.stopTest();

        // Assert
        System.assertEquals(80.00, result,
            'Price with 20% discount should be 80.00');
    }

    @isTest
    static void testGetFinalPrice_noDiscount() {
        PricingCalculator calc = new PricingCalculator(50.00);
        System.assertEquals(50.00, calc.getFinalPrice(),
            'No discount should return base price');
    }

    @isTest
    static void testApplyTax() {
        Decimal taxed = PricingCalculator.applyTax(100.00, 0.08);
        System.assertEquals(108.00, taxed, '8% tax on $100 should be $108');
    }

    @isTest
    static void testFormatPrice() {
        PricingCalculator calc = new PricingCalculator(100.00, 0.10);
        String formatted = calc.formatPrice();
        System.assert(formatted.contains('90'),
            'Formatted price should contain the final amount');
    }
}`,
        output: 'All tests pass — 4/4',
      },
      {
        type: 'explanation',
        title: 'Test.startTest() and Test.stopTest()',
        text: 'Wrapping the code-under-test with Test.startTest() and Test.stopTest() gives that code a **fresh set of governor limits** — separate from the test setup code. This means:\n\n• Your test setup (creating records) uses one limit allocation\n• The code being tested uses its own fresh limits\n\nAlways wrap the actual execution you are testing between startTest/stopTest. For async Apex (future, batch, queueable), stopTest() also forces the async job to run synchronously in the test.',
      },
      {
        type: 'example',
        title: 'Testing DML and Database State',
        text: 'Test that a trigger or service method correctly modifies records:',
        code: `@isTest
private class AccountServiceTest {

    @isTest
    static void testCreateAccount_setsDefaults() {
        // Arrange
        Account acc = new Account(Name = 'Test Corp');

        // Act
        Test.startTest();
        insert acc;
        Test.stopTest();

        // Assert — re-query to get trigger-modified values
        Account result = [SELECT Id, BillingCountry, Rating
                          FROM Account WHERE Id = :acc.Id];

        System.assertEquals('United States', result.BillingCountry,
            'Trigger should default BillingCountry');
        System.assertNotEquals(null, result.Rating,
            'Rating should be defaulted by trigger');
    }

    @isTest
    static void testCreateAccount_negativeCase() {
        // Test that missing required field throws an exception
        Account badAcc = new Account(); // Missing Name
        Boolean exceptionThrown = false;

        try {
            insert badAcc;
        } catch (DmlException e) {
            exceptionThrown = true;
            System.assert(e.getMessage().contains('Name'),
                'Error should mention the missing Name field');
        }

        System.assert(exceptionThrown, 'DmlException should have been thrown');
    }
}`,
        output: 'All tests pass — trigger defaults verified, error case verified',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What is wrong with this test method?\n\n```apex\n@isTest\nstatic void testCalculate() {\n    PricingCalculator calc = new PricingCalculator(100, 0.10);\n    Decimal result = calc.getFinalPrice();\n    System.assertEquals(result, 90.00); // <-- look at argument order\n}\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'System.assertEquals() takes arguments in the order **(expected, actual)**. The test has them reversed: `assertEquals(result, 90.00)` means "assert that result equals 90.00" — but the error message will say "expected: 95.00, actual: 90.00" if the test fails, which is backwards and confusing.\n\nFixed:\n```apex\nSystem.assertEquals(90.00, result, \'10% discount on $100 should be $90\');\n```\n\nAlways use: `assertEquals(expectedValue, actualValue, optionalMessage)`. Always include a message so failures are self-explanatory.',
      },
      {
        type: 'tip',
        title: 'What Code Coverage Actually Means',
        text: 'Coverage measures which lines of code are **executed** by tests — not whether the logic is correct. 100% coverage with no assertions is worthless. Focus on asserting **outcomes** (what the code should do), not just making lines execute. A well-asserted test at 80% is worth more than a coverage-only test at 100%.',
      },
    ],
    quiz: [
      {
        id: 'test-q1',
        question: 'What is the minimum code coverage required to deploy Apex to production?',
        options: ['50%', '75%', '90%', '100%'],
        correct: 1,
        explanation: 'Salesforce requires at least 75% code coverage across all Apex code (excluding test classes) before you can deploy to production.',
      },
      {
        id: 'test-q2',
        question: 'What does Test.startTest() do?',
        options: [
          'Runs all test methods in the class',
          'Gives the code-under-test a fresh set of governor limits',
          'Mocks external callouts automatically',
          'Resets the database to an empty state',
        ],
        correct: 1,
        explanation: 'Test.startTest() resets the governor limit counters, so the code being tested starts with fresh limits separate from the test setup code. Test.stopTest() forces any async jobs to run synchronously.',
      },
      {
        id: 'test-q3',
        question: 'What is the correct argument order for System.assertEquals()?',
        options: [
          '(actual, expected)',
          '(expected, actual)',
          '(message, expected, actual)',
          '(actual, expected, message)',
        ],
        correct: 1,
        explanation: 'System.assertEquals(expected, actual) — expected value first, then the actual value from your code. The optional third argument is a failure message.',
      },
      {
        id: 'test-q4',
        question: 'After inserting a record in a test, you want to verify a field that a trigger should have set. What must you do before asserting?',
        options: [
          'Nothing — the in-memory object is updated automatically',
          'Re-query the record from the database to get trigger-modified values',
          'Call Test.stopTest() first',
          'Use Trigger.new to access the modified values',
        ],
        correct: 1,
        explanation: 'Triggers modify records at the database level. The in-memory Apex object from before the insert does not automatically reflect trigger changes. You must re-query to get the trigger-modified values.',
      },
    ],
    challengeId: 'challenge-apex-test-basics',
  },
  // ─── APEX TESTING CONTINUED ──────────────────────────────────────────────────
  {
    id: 'apex-test-data',
    moduleId: 'apex-testing',
    order: 2,
    title: 'Test Data Factories & @testSetup',
    subtitle: 'Build reusable, isolated test data for fast, reliable tests',
    description: 'Learn how to use @testSetup, Test Data Factory patterns, and Database.insert with partial success to write fast, clean tests.',
    duration: 30,
    difficulty: 'intermediate',
    tags: ['apex', 'testing', 'test-data', '@testSetup', 'factory-pattern'],
    prerequisites: ['apex-test-basics'],
    learningObjectives: [
      'Use @testSetup to create shared test data once per test class',
      'Build a Test Data Factory class for reusable record creation',
      'Understand why tests must not rely on existing org data (SeeAllData=false)',
      'Use Database.insert(list, false) for bulk test data with error checking',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Test data management determines whether your test suite is fast or slow, reliable or flaky:\n\n• **Slow test suites** are often caused by each test method re-creating dozens of records. @testSetup creates data once for the whole class, cutting runtime 60-80%\n• **Flaky tests** often query existing org data with SeeAllData=true. The data changes, the test breaks. Always create your own isolated test data\n• **Test Data Factories** are the standard professional pattern — a single class creates all test records consistently across hundreds of test classes',
      },
      {
        type: 'example',
        title: '@testSetup — Create Data Once Per Class',
        text: '@testSetup runs once before any test method. All test methods in the class share the same data via fresh queries:',
        code: `@isTest
private class OpportunityServiceTest {

    // Runs ONCE before all test methods in this class
    @testSetup
    static void setupData() {
        Account acc = new Account(
            Name = 'Test Corp',
            Industry = 'Technology',
            AnnualRevenue = 1000000
        );
        insert acc;

        List<Opportunity> opps = new List<Opportunity>{
            new Opportunity(
                Name = 'Deal A',
                AccountId = acc.Id,
                StageName = 'Prospecting',
                CloseDate = Date.today().addDays(30)
            ),
            new Opportunity(
                Name = 'Deal B',
                AccountId = acc.Id,
                StageName = 'Closed Won',
                CloseDate = Date.today()
            )
        };
        insert opps;
    }

    @isTest
    static void testOpenOpportunities() {
        // Re-query the shared data — each test method gets a fresh db state
        List<Opportunity> open = [
            SELECT Id, Name FROM Opportunity WHERE StageName != 'Closed Won'
        ];
        System.assertEquals(1, open.size(), 'Should find 1 open opportunity');
    }

    @isTest
    static void testClosedOpportunities() {
        List<Opportunity> closed = [
            SELECT Id, Name FROM Opportunity WHERE StageName = 'Closed Won'
        ];
        System.assertEquals(1, closed.size(), 'Should find 1 closed opportunity');
    }
}`,
        output: 'Both tests pass — data created once, queried per test',
      },
      {
        type: 'example',
        title: 'Test Data Factory Pattern',
        text: 'A TestDataFactory class centralizes record creation across all your test classes:',
        code: `@isTest
public class TestDataFactory {

    public static Account createAccount(String name) {
        Account acc = new Account(
            Name = name,
            Industry = 'Technology',
            BillingCity = 'San Francisco'
        );
        insert acc;
        return acc;
    }

    public static List<Contact> createContacts(Account acc, Integer count) {
        List<Contact> contacts = new List<Contact>();
        for (Integer i = 0; i < count; i++) {
            contacts.add(new Contact(
                FirstName = 'Test',
                LastName = 'Contact ' + i,
                AccountId = acc.Id,
                Email = 'test' + i + '@example.com'
            ));
        }
        insert contacts;
        return contacts;
    }
}

// Usage in any test class:
@isTest
private class ContactServiceTest {
    @isTest
    static void testBulkContactProcessing() {
        Account acc = TestDataFactory.createAccount('Big Corp');
        List<Contact> contacts = TestDataFactory.createContacts(acc, 50);

        Test.startTest();
        ContactService.processAll(acc.Id);
        Test.stopTest();

        System.assertEquals(50, contacts.size(), 'Should have 50 contacts');
    }
}`,
        output: 'Factory creates 50 contacts consistently, test focuses on logic not data setup',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What is wrong with this test setup?\n\n```apex\n@isTest\nprivate class AccountTest {\n\n    @testSetup\n    static void setupData() {\n        Account acc = new Account(Name = \'Test\');\n        insert acc;\n    }\n\n    @isTest\n    static void testAccountName() {\n        // Uses the account inserted in setupData\n        System.assertEquals(\'Test\', acc.Name);\n    }\n}\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'The test method references `acc` which is a local variable from `setupData()` — it does not exist in `testAccountName()`. Variables declared in @testSetup are not accessible in test methods.\n\nFixed — re-query the data:\n```apex\n@isTest\nstatic void testAccountName() {\n    Account acc = [SELECT Id, Name FROM Account LIMIT 1];\n    System.assertEquals(\'Test\', acc.Name, \'Account name should be Test\');\n}\n```\n\n@testSetup inserts records to the test database. Test methods must re-query to access them.',
      },
      {
        type: 'tip',
        title: 'SeeAllData — Why You Should Never Use It',
        text: '`@isTest(SeeAllData=true)` lets tests access real org data. This seems convenient but causes brittle tests: a test that passes in sandbox fails in production because the org data differs. Always create your own test data with @testSetup or in the test method itself. The only exception: tests for Chatter features, which require SeeAllData=true due to a Salesforce limitation.',
      },
    ],
    quiz: [
      {
        id: 'td-q1',
        question: 'How many times does @testSetup run per test class?',
        options: ['Once per test method', 'Once per test class', 'Once per deploy', 'Every time you query data'],
        correct: 1,
        explanation: '@testSetup runs once before any test method in the class executes. This shared setup makes the test class faster since data is inserted once, not once per method.',
      },
      {
        id: 'td-q2',
        question: 'How do you access a record created in @testSetup from a test method?',
        options: [
          'Via the return value of the @testSetup method',
          'By re-querying the database inside the test method',
          'Via a class-level variable set in @testSetup',
          'Via Test.getSetupData()',
        ],
        correct: 1,
        explanation: 'Variables in @testSetup are local to that method. Test methods access the shared records by re-querying the database. Each test method gets a database snapshot that is restored to the @testSetup state between tests.',
      },
      {
        id: 'td-q3',
        question: 'What is the main advantage of a Test Data Factory class?',
        options: [
          'It automatically generates test assertions',
          'It provides one place to create test records so all test classes use consistent data',
          'It speeds up tests by using cached records',
          'It allows tests to use real production data safely',
        ],
        correct: 1,
        explanation: 'A Test Data Factory centralizes record creation. When a required field is added to Account, you update one factory method instead of 50 test classes. It also ensures tests use consistent, meaningful test data.',
      },
      {
        id: 'td-q4',
        question: 'Which annotation/attribute should you generally avoid and why?',
        options: [
          '@isTest — it slows down deployments',
          '@testSetup(SeeAllData=true) — no such annotation exists',
          '@isTest(SeeAllData=true) — it makes tests depend on unpredictable org data',
          '@testMethod — it was deprecated in API v28',
        ],
        correct: 2,
        explanation: 'SeeAllData=true lets tests query real org data. Since org data differs between sandboxes and production, tests become environment-dependent and unreliable. Always create your own isolated test data.',
      },
    ],
    challengeId: 'challenge-apex-test-data',
  },
  // ─── LWC ADVANCED ────────────────────────────────────────────────────────────
  {
    id: 'lwc-wire-apex',
    moduleId: 'lwc-advanced',
    order: 1,
    title: '@wire and Imperative Apex in LWC',
    subtitle: 'Connect Lightning Web Components to Salesforce data',
    description: 'Learn how to call Apex methods from LWC using @wire (reactive) and imperative calls, and when to use each approach.',
    duration: 40,
    difficulty: 'intermediate',
    tags: ['lwc', 'apex', '@wire', 'imperative', '@AuraEnabled', 'reactive'],
    prerequisites: ['lwc-data-binding', 'apex-classes', 'soql-basics'],
    learningObjectives: [
      'Expose an Apex method to LWC using @AuraEnabled(cacheable=true)',
      'Wire an Apex method to a component property using @wire',
      'Call Apex imperatively for user-triggered actions (button clicks)',
      'Handle loading and error states in the LWC template',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'LWC components almost always need Salesforce data:\n\n• **Account detail page** — a custom component on the Account record page shows related Cases and their recent status changes. Use @wire to reactively load Cases whenever the record page changes\n• **Search component** — a user types in a search box and clicks "Find". Use an imperative Apex call triggered by the button click to run the search\n• **Dashboard tile** — a component shows "Open Opportunities this Quarter." Use @wire(getOpenOpportunities) to load and reactively refresh the data\n\nThe rule: @wire for data you want loaded automatically and reactively. Imperative for data loaded on user action.',
      },
      {
        type: 'example',
        title: '@AuraEnabled — Exposing Apex to LWC',
        text: 'The Apex method must be annotated with @AuraEnabled before LWC can call it:',
        code: `// AccountCaseService.cls
public with sharing class AccountCaseService {

    // cacheable=true: LWC can use @wire (data is read-only)
    // Required for @wire calls
    @AuraEnabled(cacheable=true)
    public static List<Case> getOpenCases(Id accountId) {
        return [
            SELECT Id, Subject, Status, Priority, CreatedDate
            FROM Case
            WHERE AccountId = :accountId AND Status != 'Closed'
            ORDER BY CreatedDate DESC
            LIMIT 10
        ];
    }

    // No cacheable: required for methods that change data
    // Can only be called imperatively (not @wire)
    @AuraEnabled
    public static void escalateCase(Id caseId) {
        Case c = [SELECT Id, Priority FROM Case WHERE Id = :caseId];
        c.Priority = 'High';
        update c;
    }
}`,
        output: 'Methods are now available for import in LWC JavaScript',
      },
      {
        type: 'example',
        title: '@wire — Reactive Data Loading',
        text: '@wire calls the Apex method automatically when the component renders and re-calls when wired properties change:',
        code: `// accountCases.js
import { LightningElement, api, wire } from 'lwc';
import getOpenCases from '@salesforce/apex/AccountCaseService.getOpenCases';

export default class AccountCases extends LightningElement {
    @api recordId; // Automatically set when component is on a record page

    @wire(getOpenCases, { accountId: '$recordId' })
    cases; // cases.data = results array, cases.error = error object

    get hasCases() {
        return this.cases.data && this.cases.data.length > 0;
    }
}

<!-- accountCases.html -->
<template>
    <lightning-card title="Open Cases">
        <template if:true={cases.data}>
            <template if:false={hasCases}>
                <p class="slds-p-around_medium">No open cases.</p>
            </template>
            <template if:true={hasCases}>
                <template for:each={cases.data} for:item="c">
                    <p key={c.Id}>{c.Subject} — {c.Status}</p>
                </template>
            </template>
        </template>

        <template if:true={cases.error}>
            <p class="slds-text-color_error">
                Error loading cases: {cases.error.body.message}
            </p>
        </template>
    </lightning-card>
</template>`,
        output: 'Component renders Open Cases list — reactively refreshes when recordId changes',
      },
      {
        type: 'example',
        title: 'Imperative Apex — User-Triggered Calls',
        text: 'Call Apex imperatively when triggered by a button, not on page load:',
        code: `// caseEscalator.js
import { LightningElement, api } from 'lwc';
import escalateCase from '@salesforce/apex/AccountCaseService.escalateCase';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CaseEscalator extends LightningElement {
    @api caseId;
    isLoading = false;

    handleEscalate() {
        this.isLoading = true;

        escalateCase({ caseId: this.caseId })
            .then(() => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success',
                    message: 'Case escalated to High priority',
                    variant: 'success'
                }));
            })
            .catch(error => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                }));
            })
            .finally(() => {
                this.isLoading = false;
            });
    }
}

<!-- caseEscalator.html -->
<template>
    <lightning-button
        label={isLoading ? 'Escalating...' : 'Escalate Case'}
        onclick={handleEscalate}
        disabled={isLoading}>
    </lightning-button>
</template>`,
        output: 'Button click calls Apex → success toast shown → isLoading resets',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What is wrong with this Apex method used with @wire?\n\n```apex\n@AuraEnabled\npublic static List<Case> getOpenCases(Id accountId) {\n    return [SELECT Id, Subject FROM Case WHERE AccountId = :accountId];\n}\n```\n\nAnd in LWC:\n```javascript\n@wire(getOpenCases, { accountId: \'$recordId\' })\ncases;\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'The @AuraEnabled annotation is missing `cacheable=true`. When you use @wire in LWC to call an Apex method, the method MUST be annotated with `@AuraEnabled(cacheable=true)`. Without it, the @wire adapter cannot call the method and throws: "LWC component cannot call a non-cacheable method."\n\nFixed:\n```apex\n@AuraEnabled(cacheable=true)\npublic static List<Case> getOpenCases(Id accountId) {\n    return [SELECT Id, Subject FROM Case WHERE AccountId = :accountId];\n}\n```\n\nMethods with `cacheable=true` are read-only — Salesforce caches the results. For methods that modify data (insert/update/delete), do NOT use cacheable=true and call them imperatively.',
      },
      {
        type: 'tip',
        title: '@wire vs Imperative — Decision Guide',
        text: '**Use @wire when**:\n• Data should load automatically when the component renders\n• Data should refresh when input properties (like recordId) change\n• The Apex method is read-only (cacheable=true)\n• You want Salesforce to manage caching automatically\n\n**Use Imperative when**:\n• The call is triggered by a user action (button click, form submit)\n• The method modifies data (no cacheable)\n• You need fine-grained control over when to fetch (e.g., after validation)\n• You need to show a custom loading spinner during the call',
      },
    ],
    quiz: [
      {
        id: 'wire-q1',
        question: 'What annotation is required on an Apex method before you can @wire it in LWC?',
        options: [
          '@AuraEnabled',
          '@AuraEnabled(cacheable=true)',
          '@LWCEnabled',
          '@RemoteAction',
        ],
        correct: 1,
        explanation: '@wire requires @AuraEnabled(cacheable=true) on the Apex method. The cacheable=true parameter tells the platform the method is read-only and its results can be cached. Without it, @wire cannot call the method.',
      },
      {
        id: 'wire-q2',
        question: 'In a @wire property, how do you access the returned data?',
        options: ['this.cases', 'this.cases.result', 'this.cases.data', 'this.cases.value'],
        correct: 2,
        explanation: 'A @wire property returns an object with two properties: .data (the successful result) and .error (any error). Always check if(this.cases.data) before using the results.',
      },
      {
        id: 'wire-q3',
        question: 'You click a "Save" button that calls Apex to insert a record. Which approach should you use?',
        options: [
          '@wire because Apex is involved',
          'Imperative call in the button click handler',
          '@wire with cacheable=false',
          '@AuraEnabled with reactive=true',
        ],
        correct: 1,
        explanation: 'User-triggered actions (button clicks, form submissions) should use imperative Apex calls. @wire is for reactive data that loads automatically. Additionally, insert/update/delete methods cannot use cacheable=true, which is required for @wire.',
      },
      {
        id: 'wire-q4',
        question: 'What does the "$" prefix in @wire(getOpenCases, { accountId: \'$recordId\' }) mean?',
        options: [
          'It is required syntax for all @wire parameters',
          'It makes the parameter reactive — @wire re-runs when recordId changes',
          'It converts the value to a String',
          'It indicates a global variable',
        ],
        correct: 1,
        explanation: 'The $ prefix makes a @wire parameter reactive. When the value of recordId changes (e.g., the user navigates to a different record), @wire automatically re-calls the Apex method with the new value. Without $, the value is treated as a static string.',
      },
    ],
    challengeId: 'challenge-lwc-wire',
  },
  // ─── PERMISSIONS ──────────────────────────────────────────────────────────────
  {
    id: 'profiles-permissions-intro',
    moduleId: 'permission-model',
    order: 1,
    title: 'Profiles, Permission Sets & the Security Model',
    subtitle: 'Control what users can see and do in Salesforce',
    description: 'Learn how Salesforce\'s layered security model works — from org-wide defaults to profiles, permission sets, and sharing rules.',
    duration: 35,
    difficulty: 'beginner',
    tags: ['security', 'profiles', 'permission-sets', 'OWD', 'sharing-rules', 'FLS'],
    prerequisites: ['salesforce-data-model'],
    learningObjectives: [
      'Explain the four layers of Salesforce security: org, object, field, record',
      'Distinguish between Profiles and Permission Sets',
      'Configure Org-Wide Defaults (OWD) to set the baseline record visibility',
      'Use sharing rules to open up access above the OWD baseline',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'The Salesforce security model answers one question: "Can this user do this thing to this record?" The answer flows through four layers:\n\n1. **Org security** — can the user log in? (IP restrictions, login hours, MFA)\n2. **Object security** — can the user see/create/edit/delete this object type? (Profile/Permission Sets)\n3. **Field security** — can the user see/edit this specific field? (FLS on Profile/Permission Sets)\n4. **Record security** — can the user see this specific record? (OWD + Roles + Sharing Rules)\n\nAll four layers must allow access — a single denial blocks the action.',
      },
      {
        type: 'explanation',
        title: 'Profiles vs Permission Sets',
        text: '**Profile**:\n• Every user has exactly ONE profile\n• Controls baseline object/field/tab access and system permissions\n• Standard profiles are read-only; custom profiles are editable\n• Best practice: use a minimal standard profile as the baseline\n\n**Permission Sets**:\n• A user can have MANY permission sets (additive)\n• Add specific permissions ON TOP of the profile\n• Permission Set Groups combine multiple sets for easier assignment\n• Best practice: grant narrow, specific permissions via permission sets rather than creating many custom profiles\n\n**Modern approach**: Use the "Minimum Access" profile as a baseline for all users, then stack permission sets for each user\'s specific needs.',
      },
      {
        type: 'example',
        title: 'Org-Wide Defaults (OWD) and Sharing',
        text: 'OWD sets the MOST RESTRICTIVE baseline for record visibility. Sharing rules open it up:',
        code: `// OWD Settings (Setup > Sharing Settings):
// Account: Private      → Users only see their own accounts and those shared with them
// Contact: Controlled by Parent  → Inherits Account sharing
// Opportunity: Private  → Users only see their own opps

// Role Hierarchy (above OWD):
// VP Sales can see all Accounts owned by their direct reports
// This is automatic — no rules needed

// Sharing Rules (above Role Hierarchy):
// Rule 1: "Share All Accounts where Industry = Technology with the Technology Support team"
// Rule 2: "Share all Opportunities > $500k with the Executive team"

// Manual Sharing (Apex):
// A user can manually share a specific record with another user/group
// In Apex, use Account.share or AccountShare object:

AccountShare shareRecord = new AccountShare();
shareRecord.AccountId = accountId;
shareRecord.UserOrGroupId = userId;
shareRecord.AccountAccessLevel = 'Read';
shareRecord.OpportunityAccessLevel = 'None';
insert shareRecord;

System.debug('Account manually shared with user: ' + userId);`,
        output: 'Account manually shared — user can now read the Account even though OWD is Private',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What is wrong with this security configuration?\n\n> "To give the Sales team access to the new Project__c object, I modified the Standard User profile and checked \'Read, Create, Edit\' on Project__c."\n\nIdentify the problem with this approach.',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'Modifying the Standard User profile affects ALL users on that profile — including Support, Marketing, and Operations who should NOT have access to Project__c.\n\nFix — use Permission Sets:\n1. Leave the Standard User profile unchanged (no access to Project__c)\n2. Create a Permission Set "Sales Project Access" with Read/Create/Edit on Project__c\n3. Assign this permission set ONLY to users on the Sales team\n\n**Why this matters**: Profiles are broad — they affect everyone on that profile. Permission sets are targeted — assign exactly to the right users. This principle of least privilege is a security best practice and required for AppExchange review.',
      },
      {
        type: 'tip',
        title: 'The Sharing Model Flow',
        text: 'Access flows: OWD (most restrictive baseline) → Role Hierarchy (managers see subordinates\' records) → Sharing Rules (criteria-based or ownership-based) → Manual Sharing → Apex Managed Sharing.\n\nEach layer can only OPEN UP access, never restrict below the OWD. If you need to restrict access more than OWD allows, use Teams, Territory Management, or custom sharing logic.',
      },
    ],
    quiz: [
      {
        id: 'perm-q1',
        question: 'How many profiles can a user have?',
        options: ['Unlimited', 'Up to 5', 'Exactly one', 'Two maximum'],
        correct: 2,
        explanation: 'Every Salesforce user has exactly one profile. Profiles define the baseline object, field, and system permissions. Additional permissions are added via permission sets, of which a user can have many.',
      },
      {
        id: 'perm-q2',
        question: 'What do Org-Wide Defaults (OWD) control?',
        options: [
          'Which fields users can see',
          'The most restrictive baseline for who can see which records',
          'Which apps appear in the navigation bar',
          'The default currency for the org',
        ],
        correct: 1,
        explanation: 'OWD sets the most restrictive record visibility baseline. When set to Private, users only see their own records. Sharing rules, roles, and manual sharing can then open up access above this baseline.',
      },
      {
        id: 'perm-q3',
        question: 'Why should you use Permission Sets instead of modifying Profiles for new feature access?',
        options: [
          'Permission Sets are faster to configure',
          'Profiles cannot be changed in Salesforce',
          'Permission Sets can be assigned to specific users without affecting everyone on the profile',
          'Permission Sets apply to all orgs automatically',
        ],
        correct: 2,
        explanation: 'Modifying a profile affects ALL users with that profile. Permission Sets can be assigned to specific users, enabling fine-grained access control without broad profile changes. This follows the principle of least privilege.',
      },
      {
        id: 'perm-q4',
        question: 'What is the difference between FLS (Field-Level Security) and OWD?',
        options: [
          'FLS controls login access; OWD controls record access',
          'FLS controls which fields a user can see/edit; OWD controls which records a user can see',
          'OWD is for standard objects; FLS is for custom objects',
          'They are the same thing',
        ],
        correct: 1,
        explanation: 'FLS (configured on Profile/Permission Sets) controls whether a user can see or edit a specific field on a record they already have access to. OWD controls whether the user can even see the record at all. Both must allow access for a user to view a field.',
      },
    ],
    challengeId: 'challenge-permissions',
  },
  // ─── REPORTS & DASHBOARDS ────────────────────────────────────────────────────
  {
    id: 'reports-dashboards-intro',
    moduleId: 'reports-dashboards',
    order: 1,
    title: 'Reports, Dashboards & Analytics',
    subtitle: 'Surface insights from Salesforce data for business decisions',
    description: 'Learn how to build Salesforce reports and dashboards to analyze data, track KPIs, and drive business decisions without writing code.',
    duration: 30,
    difficulty: 'beginner',
    tags: ['reports', 'dashboards', 'analytics', 'report-types', 'KPIs', 'charts'],
    prerequisites: ['salesforce-data-model'],
    learningObjectives: [
      'Distinguish between the four report types: Tabular, Summary, Matrix, and Joined',
      'Group and summarize data using Summary reports',
      'Build a dashboard with multiple chart components from report data',
      'Know how report-level security (run as) affects what data dashboards show',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Reports and dashboards are how business leaders consume Salesforce data:\n\n• **Sales manager daily standup** — a dashboard showing each rep\'s open pipeline, deals closing this quarter, and win rate vs target\n• **Customer success weekly review** — a matrix report showing case volume by account and priority, identifying at-risk customers\n• **Executive QBR** — a joined report combining revenue and support metrics in one view for a full customer picture\n• **Automated scheduling** — a report emailed to the VP every Monday morning before the team meeting',
      },
      {
        type: 'explanation',
        title: 'The Four Report Types',
        text: '**Tabular**: Raw rows of data — like a spreadsheet. Use for export or when you need row-level detail. Cannot be used as a dashboard source.\n\n**Summary**: Groups data by a field and shows aggregates (SUM, COUNT, AVG, MAX). Use for grouped analysis: "Opportunities by Stage" or "Cases by Owner." Can be a dashboard source.\n\n**Matrix**: Groups by BOTH rows AND columns. Use for two-dimensional analysis: "Revenue by Quarter AND Region." Powerful for trend analysis.\n\n**Joined**: Combines multiple report blocks in one report. Use when you need data from unrelated objects side by side: "New Accounts this Quarter" alongside "Closed Won Deals this Quarter."',
      },
      {
        type: 'example',
        title: 'Building a Pipeline Summary Report',
        text: 'Create a Summary report to show pipeline by stage and owner:',
        code: `// In Salesforce Report Builder (no code needed):
// 1. Create New Report → Report Type: Opportunities
// 2. Add Columns: Account Name, Opportunity Name, Amount, Close Date, Owner
// 3. Group Rows By: Stage Name
// 4. Add Summary Field: SUM of Amount
// 5. Filter: Close Date = THIS QUARTER

// Result:
// ─────────────────────────────────────────
// Stage: Prospecting
//   Deal A        $45,000
//   Deal B        $12,000
//   SUBTOTAL                    $57,000
// Stage: Negotiation
//   Deal C       $200,000
//   SUBTOTAL                   $200,000
// Stage: Closed Won
//   Deal D       $150,000
//   SUBTOTAL                   $150,000
// ─────────────────────────────────────────
// TOTAL                        $407,000

// In Apex, you can query report results via the Analytics API:
// (Read-only — requires Reports & Dashboards API)
Reports.ReportResults results =
    Reports.ReportManager.runReport(reportId, true);
Reports.ReportFactWithDetails fact =
    (Reports.ReportFactWithDetails) results.getFactMap().get('T!T');
System.debug('Total rows: ' + fact.getRows().size());`,
        output: 'Pipeline this quarter: $407,000 across 3 stages',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What is wrong with this dashboard configuration?\n\n> "I created a dashboard to show the VP of Sales their team\'s pipeline. I set the dashboard to run as \'Me\' (the admin). The VP says the dashboard shows too much data — they can see every rep\'s opportunities including ones from other regions they don\'t manage."\n\nWhat setting caused this, and how do you fix it?',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'The dashboard "Run As" setting is set to "Me" (the admin), so the dashboard runs with admin-level access — bypassing all sharing rules and showing ALL opportunities in the org.\n\nFixed:\n• Change the dashboard "Run As" to "Running User" — each viewer sees data based on their own access\n• Or set "Run As" to a specific role or user who has the appropriate access level\n\n**Dashboard Run As options**:\n- **Me**: Always runs as the admin who created it — everyone sees the same data (admin\'s view)\n- **Running User**: Each viewer sees data they have access to — different users see different data\n- **Specified User**: Always runs as a specific user — good for a "team view" shared dashboard\n\nThe VP should use "Running User" so they see only what their role hierarchy allows.',
      },
      {
        type: 'tip',
        title: 'Report Type vs Report',
        text: 'A **Report Type** defines which objects and fields are available to build a report. A **Report** is a saved configuration using a Report Type. Standard report types (Accounts, Contacts, Opportunities) are pre-built. Custom Report Types (Setup > Report Types) are needed when you want to report on custom objects or specific relationships — for example, "Accounts with related Applications" for the job board data model.',
      },
    ],
    quiz: [
      {
        id: 'rpt-q1',
        question: 'Which report type allows you to group data by both rows and columns?',
        options: ['Tabular', 'Summary', 'Matrix', 'Joined'],
        correct: 2,
        explanation: 'Matrix reports group data by both rows and columns, enabling two-dimensional analysis like "Revenue by Quarter AND Region." They are ideal for trend analysis across two dimensions.',
      },
      {
        id: 'rpt-q2',
        question: 'Which report type CANNOT be used as a dashboard component source?',
        options: ['Summary', 'Matrix', 'Tabular', 'Joined'],
        correct: 2,
        explanation: 'Tabular reports are raw row-by-row data with no grouping or aggregation. Dashboard components require aggregated data (grouped by something), so Tabular reports cannot drive dashboard charts. Use Summary or Matrix reports for dashboards.',
      },
      {
        id: 'rpt-q3',
        question: 'A dashboard is set to "Run As: Me" (admin). What data do non-admin viewers see?',
        options: [
          'Only their own records',
          'The same data the admin sees — full org access',
          'An error — non-admins cannot view admin dashboards',
          'Records the admin has manually shared with them',
        ],
        correct: 1,
        explanation: '"Run As: Me" means the dashboard always executes with the creating admin\'s access level — everyone who views the dashboard sees the same full-access data. To show each viewer their own data, change to "Run As: Running User."',
      },
      {
        id: 'rpt-q4',
        question: 'Which report type would you use to show Opportunities AND Cases side by side in one report?',
        options: ['Tabular', 'Summary', 'Matrix', 'Joined'],
        correct: 3,
        explanation: 'Joined reports combine multiple report blocks from different report types in a single report. Use Joined when you need data from unrelated objects (Opportunities AND Cases) displayed together.',
      },
    ],
    challengeId: 'challenge-reports',
  },
  // ─── DEPLOYMENT ──────────────────────────────────────────────────────────────
  {
    id: 'salesforce-deployment',
    moduleId: 'deployment',
    order: 1,
    title: 'Salesforce Deployment: Sandboxes, Change Sets & SFDX',
    subtitle: 'Ship your code safely from development to production',
    description: 'Learn the Salesforce deployment pipeline — sandbox strategy, change sets, Salesforce CLI (sf), and CI/CD concepts for professional deployments.',
    duration: 40,
    difficulty: 'intermediate',
    tags: ['deployment', 'sandbox', 'SFDX', 'CI-CD', 'change-sets', 'metadata'],
    prerequisites: ['apex-testing'],
    learningObjectives: [
      'Explain the sandbox hierarchy and when to use each type',
      'Deploy metadata using change sets (declarative) and sf project deploy (CLI)',
      'Understand what a package.xml manifest controls',
      'Describe a basic CI/CD pipeline for Salesforce',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Every Salesforce change follows the same journey:\n\n`Developer Sandbox → QA Sandbox → UAT Sandbox → Production`\n\nWithout a proper deployment pipeline:\n• Developers overwrite each other\'s untested changes in production\n• A broken trigger ships live and locks out 500 users\n• No audit trail of what changed when\n\nLarge companies have formal CI/CD pipelines: code committed to Git triggers an automated test run, deployment to QA, and gated promotion to production.',
      },
      {
        type: 'explanation',
        title: 'Sandbox Types',
        text: '| Sandbox Type | Refresh Interval | Data | Use |\n|---|---|---|---|\n| Developer | 1 day | No | Individual dev work |\n| Developer Pro | 1 day | No | Larger dev work, integrations |\n| Partial Copy | 5 days | Subset | QA testing with real-ish data |\n| Full | 29 days | All | UAT, performance testing |\n\n**Developer sandboxes** are free and unlimited (up to your contract). **Full sandboxes** are expensive and rare — use sparingly for final pre-prod validation.',
      },
      {
        type: 'example',
        title: 'Deploying with Salesforce CLI (sf)',
        text: 'The modern way to deploy — works with version-controlled metadata:',
        code: `# Install SF CLI: npm install @salesforce/cli --global

# Authorize your org (login via browser)
sf org login web --alias myDevSandbox

# Check which org is connected
sf org list

# Deploy a specific component
sf project deploy start --source-dir force-app/main/default/classes/AccountService.cls --target-org myDevSandbox

# Deploy with running specified tests
sf project deploy start --source-dir force-app/main/default --target-org myProd --test-level RunSpecifiedTests --tests AccountServiceTest --tests ContactTriggerHandlerTest

# Check deployment status
sf project deploy report

# Deploy all metadata in the project
sf project deploy start --source-dir force-app --target-org myProd --test-level RunLocalTests`,
        output: 'Deploy ID: 0AfXX000000ABCDE\nStatus: Succeeded\nTests run: 47, Failed: 0\nCode coverage: 89%',
      },
      {
        type: 'explanation',
        title: 'Change Sets (Declarative Deployment)',
        text: 'Change Sets are the point-and-click alternative to CLI deployment:\n1. In the source org, go to Setup > Change Sets > Outbound Change Sets\n2. Create a change set, add components (Apex classes, triggers, custom objects, etc.)\n3. Upload to the target org (must have a Deployment Connection configured)\n4. In the target org, go to Inbound Change Sets and deploy\n\n**When to use Change Sets**: small teams, non-technical admins, one-off configurations\n**When to use CLI + Git**: developer teams, CI/CD pipelines, anything requiring version control',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What is wrong with this deployment approach?\n\n> "I developed a new trigger and handler directly in production. I tested it by inserting a few records manually. It works fine."\n\nIdentify at least 3 issues with this approach.',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'Issues with developing directly in production:\n1. **No safety net** — if the trigger has a bug, it fires on every real record and could corrupt live data\n2. **No code coverage gate** — Salesforce requires 75% coverage to *deploy*, but code written directly in prod has no deployment barrier\n3. **No testing isolation** — "inserting a few records manually" is not automated testing; it misses edge cases and bulk scenarios\n4. **No audit trail** — no git history, no code review, no rollback mechanism\n5. **Other users impacted** — if the trigger throws an exception, real users get error messages immediately\n\nFix: Always develop in a sandbox, write @isTest unit tests, deploy using CLI or change sets after tests pass.',
      },
      {
        type: 'tip',
        title: 'The .forceignore and package.xml',
        text: '`.forceignore` works like `.gitignore` — it tells the CLI which metadata to skip during retrieval/deployment. `package.xml` is a manifest file that explicitly lists what metadata to include in a deployment. Using `package.xml` gives you precise control over deployments without accidentally shipping every piece of metadata in your project.',
      },
    ],
    quiz: [
      {
        id: 'dep-q1',
        question: 'Which sandbox type includes ALL production data?',
        options: ['Developer', 'Developer Pro', 'Partial Copy', 'Full'],
        correct: 3,
        explanation: 'Full sandboxes are copies of all production metadata AND data. They are used for final pre-production UAT. They are expensive (count against your sandbox licenses) and can only be refreshed every 29 days.',
      },
      {
        id: 'dep-q2',
        question: 'What is the minimum code coverage required to deploy Apex to production via CLI?',
        options: ['0%', '50%', '75%', '100%'],
        correct: 2,
        explanation: 'Salesforce requires at least 75% code coverage across all Apex code (excluding test classes) for any production deployment. The sf deploy command will fail if coverage is below this threshold.',
      },
      {
        id: 'dep-q3',
        question: 'What does sf project deploy start --test-level RunLocalTests do?',
        options: [
          'Runs only the test classes you specify',
          'Skips all tests',
          'Runs all test classes in the org that do not use SeeAllData=true',
          'Runs only the tests in your deploy package',
        ],
        correct: 2,
        explanation: 'RunLocalTests runs all test classes in the org (not just in your package) that are not from managed packages. This is the typical requirement for production deployments and ensures your changes don\'t break existing tests.',
      },
      {
        id: 'dep-q4',
        question: 'Which deployment method is better suited for a developer team using version control?',
        options: [
          'Change Sets — they have a better UI',
          'Salesforce CLI + Git — enables code review, CI/CD, and version history',
          'Direct development in production',
          'Workbench deployments',
        ],
        correct: 1,
        explanation: 'Salesforce CLI + Git enables the full software development lifecycle: version history, pull requests, code review, automated CI/CD pipelines, and consistent deployments. Change sets are point-and-click and do not integrate with version control.',
      },
    ],
    challengeId: 'challenge-deployment',
  },
  // ─── DATA MODEL ───────────────────────────────────────────────────────────────
  {
    id: 'salesforce-data-model',
    moduleId: 'data-model',
    order: 1,
    title: 'Salesforce Data Model & Schema Design',
    subtitle: 'Design relationships and custom objects for real business problems',
    description: 'Learn how to design a Salesforce data model using custom objects, lookup relationships, master-detail relationships, and junction objects.',
    duration: 35,
    difficulty: 'beginner',
    tags: ['data-model', 'custom-objects', 'relationships', 'master-detail', 'lookup', 'junction-object'],
    prerequisites: ['apex-dml'],
    learningObjectives: [
      'Distinguish between Lookup and Master-Detail relationships and when to use each',
      'Design a junction object for many-to-many relationships',
      'Understand how roll-up summary fields work with Master-Detail relationships',
      'Know the naming conventions for custom objects (__c) and relationship fields',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'The data model is the foundation of every Salesforce org:\n\n• **CRM data** — Accounts, Contacts, Opportunities have standard relationships that every Salesforce org relies on\n• **Custom business objects** — a staffing company tracks "Job Openings" (parent) and "Applications" (children) in a Master-Detail relationship so deleting a Job Opening cascades to its Applications\n• **Many-to-many** — a student can be enrolled in many courses, and a course has many students. Neither is the parent — a junction object (Enrollment) connects them\n• **Roll-up summaries** — the total contract value on an Account sums up from child Opportunities automatically via Master-Detail',
      },
      {
        type: 'explanation',
        title: 'Lookup vs Master-Detail Relationships',
        text: '**Lookup Relationship**:\n• Child record can exist without the parent (parent field is optional)\n• Deleting the parent does NOT delete children (parent field becomes null)\n• No roll-up summary fields\n• More flexible, less tight coupling\n\n**Master-Detail Relationship**:\n• Child record REQUIRES a parent (parent field is mandatory)\n• Deleting the Master CASCADES to delete all Detail records\n• Enables Roll-Up Summary fields on the Master\n• The Detail record inherits the sharing/security of the Master\n• Cannot be changed to Lookup after records exist',
      },
      {
        type: 'example',
        title: 'Designing a Job Board Data Model',
        text: 'Example: a staffing agency tracking job openings and applications:',
        code: `// Standard Objects (already exist):
// Account (Employer)
// Contact (Candidate)

// Custom Objects to create in Setup:

// Job_Opening__c
// Fields:
//   Title__c (Text, required)
//   Department__c (Picklist)
//   Salary_Min__c (Currency)
//   Salary_Max__c (Currency)
//   Status__c (Picklist: Open, Filled, Cancelled)
//   Employer__c (Lookup → Account) ← Lookup: Job Opening can exist without an Account

// Application__c
// Fields:
//   Candidate__c (Lookup → Contact)
//   Job_Opening__c (Master-Detail → Job_Opening__c) ← MDR: app requires a job opening
//   Applied_Date__c (Date)
//   Status__c (Picklist: Under Review, Interview Scheduled, Offer Extended, Rejected)
//   Cover_Letter__c (Long Text Area)

// Roll-Up Summary on Job_Opening__c:
//   Total_Applications__c = COUNT of Application__c records
//   (Only possible because Application → Job_Opening is Master-Detail)

// SOQL to get all applications for a job:
List<Application__c> apps = [
    SELECT Id, Candidate__c, Status__c, Applied_Date__c
    FROM Application__c
    WHERE Job_Opening__c = :jobOpeningId
    ORDER BY Applied_Date__c ASC
];`,
        output: 'Data model: Account → (Lookup) Job_Opening__c ← (Master-Detail) Application__c',
      },
      {
        type: 'example',
        title: 'Junction Objects for Many-to-Many',
        text: 'When both sides can have multiple related records, create a junction object:',
        code: `// Problem: A Course has many Students, a Student takes many Courses
// Neither is the parent of the other — this is many-to-many

// Solution: Enrollment__c junction object
// Fields:
//   Student__c (Master-Detail → Contact)
//   Course__c (Master-Detail → Course__c)
//   Enrollment_Date__c (Date)
//   Grade__c (Picklist: A, B, C, D, F)
//   Status__c (Picklist: Active, Dropped, Completed)

// Now you can query from either direction:
// All courses for a student:
List<Enrollment__c> myEnrollments = [
    SELECT Id, Course__r.Name, Grade__c
    FROM Enrollment__c
    WHERE Student__c = :contactId
];

// All students in a course:
List<Enrollment__c> courseRoster = [
    SELECT Id, Student__r.Name, Student__r.Email
    FROM Enrollment__c
    WHERE Course__c = :courseId
];`,
        output: 'Junction object enables bidirectional many-to-many queries',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What relationship type problem exists here?\n\n> "I created a Master-Detail relationship from Order__c to Account (Account is the Master). Now I want to delete the Account for a customer who left, but the system gives an error."\n\nWhat is the issue, and what should have been used instead?',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'The relationship type was wrong for the use case. With a Master-Detail relationship, Salesforce prevents deleting the Master if doing so would orphan Detail records — or it cascades the delete to all children.\n\nIn this case:\n- Deleting the Account (Master) would cascade-delete all Order__c records (Detail) — destructive!\n- If you try to delete an Account with related Order records, Salesforce may block it to prevent accidental data loss\n\n**Fix**: Use a **Lookup** relationship instead. With a Lookup:\n- Deleting the Account just sets the Account field on Order__c to null\n- Order history is preserved\n- You lose roll-up summaries, but order data safety is more important\n\n**Rule of thumb**: Use Master-Detail only when the child records are meaningless without the parent (Application → Job Opening). Use Lookup when child records should survive parent deletion (Order → Account).',
      },
      {
        type: 'tip',
        title: 'Naming Conventions',
        text: '**Object API names**: Use singular noun + __c. `Job_Opening__c`, not `Job_Openings__c`. Spaces in label become underscores in API name.\n\n**Relationship field API names**: Name the field after what it points to. `Employer__c` on Job_Opening__c pointing to Account. The relationship name (used in SOQL subqueries) auto-generates from the field name.\n\n**Child relationship names**: Salesforce auto-generates the plural (Job_Openings__r on Account for the relationship from Job_Opening__c). You can customize this in the relationship field setup.',
      },
    ],
    quiz: [
      {
        id: 'dm-q1',
        question: 'What happens to Detail records when their Master record is deleted?',
        options: [
          'Detail records are orphaned (parent field set to null)',
          'Detail records are archived',
          'Detail records are cascade-deleted',
          'The delete operation is blocked',
        ],
        correct: 2,
        explanation: 'In a Master-Detail relationship, deleting the Master record cascade-deletes all related Detail records. This is different from a Lookup where deleting the parent just nullifies the lookup field.',
      },
      {
        id: 'dm-q2',
        question: 'Which relationship type enables Roll-Up Summary fields on the parent?',
        options: ['Lookup', 'Master-Detail', 'Hierarchical', 'External Lookup'],
        correct: 1,
        explanation: 'Roll-Up Summary fields (COUNT, SUM, MIN, MAX) are only available on Master objects in a Master-Detail relationship. Lookup relationships do not support roll-up summaries.',
      },
      {
        id: 'dm-q3',
        question: 'What is a junction object used for?',
        options: [
          'Connecting two org namespaces',
          'Implementing many-to-many relationships between two objects',
          'Creating hierarchical relationships',
          'Linking external system records',
        ],
        correct: 1,
        explanation: 'A junction object has two Master-Detail relationships pointing to two different objects, enabling many-to-many relationships. For example, an Enrollment__c with Master-Detail to both Student__c and Course__c.',
      },
      {
        id: 'dm-q4',
        question: 'You need to track Orders but want to keep Order history even if the Account is deleted. Which relationship should Order use to relate to Account?',
        options: ['Master-Detail', 'Lookup', 'Hierarchical', 'Roll-Up Summary'],
        correct: 1,
        explanation: 'Use a Lookup relationship. With a Lookup, deleting the Account sets the Account field on Order to null — Order records are preserved. A Master-Detail would cascade-delete all Orders when the Account is deleted.',
      },
    ],
    challengeId: 'challenge-data-model',
  },
  // ─── APEX DESIGN PATTERNS ────────────────────────────────────────────────────
  {
    id: 'apex-trigger-handler-pattern',
    moduleId: 'apex-design-patterns',
    order: 1,
    title: 'The Trigger Handler Design Pattern',
    subtitle: 'Keep triggers thin and logic testable',
    description: 'Learn the professional pattern for structuring Apex triggers — one trigger per object, all logic delegated to a handler class with methods per trigger event.',
    duration: 35,
    difficulty: 'intermediate',
    tags: ['apex', 'triggers', 'design-patterns', 'handler', 'best-practices'],
    prerequisites: ['apex-triggers-handler', 'apex-testing'],
    learningObjectives: [
      'Explain why all business logic belongs in a handler class, not the trigger body',
      'Structure a handler class with methods named by trigger event',
      'Write a TriggerHandler base class for consistent event routing',
      'Test trigger handler methods directly without firing the trigger',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Professional Salesforce teams universally use trigger handler patterns:\n\n• **Testability** — a bare trigger can only be tested by inserting records. A handler class can be unit-tested directly with any data\n• **Maintainability** — when logic grows, the handler class is the single place to look. No searching across multiple trigger files\n• **One trigger per object** — multiple triggers on the same object fire in unpredictable order. One thin trigger with a handler guarantees execution order\n• **Code reviews** — reviewers check the handler class, not raw trigger DML scattered everywhere',
      },
      {
        type: 'example',
        title: 'The Thin Trigger + Handler Pattern',
        text: 'The trigger is 3 lines. All logic lives in the handler:',
        code: `// AccountTrigger.trigger — thin, just routing
trigger AccountTrigger on Account (
    before insert, before update, after insert, after update, before delete
) {
    AccountTriggerHandler handler = new AccountTriggerHandler();

    if (Trigger.isBefore) {
        if (Trigger.isInsert) handler.beforeInsert(Trigger.new);
        if (Trigger.isUpdate) handler.beforeUpdate(Trigger.new, Trigger.oldMap);
        if (Trigger.isDelete) handler.beforeDelete(Trigger.old);
    } else {
        if (Trigger.isInsert) handler.afterInsert(Trigger.new, Trigger.newMap);
        if (Trigger.isUpdate) handler.afterUpdate(Trigger.new, Trigger.newMap, Trigger.oldMap);
    }
}

// AccountTriggerHandler.cls — all logic here
public with sharing class AccountTriggerHandler {

    public void beforeInsert(List<Account> newAccounts) {
        setDefaultRating(newAccounts);
        validatePhoneFormat(newAccounts);
    }

    public void beforeUpdate(List<Account> newAccounts, Map<Id, Account> oldMap) {
        detectNameChange(newAccounts, oldMap);
    }

    public void afterInsert(List<Account> newAccounts, Map<Id, Account> newMap) {
        createWelcomeTask(newAccounts);
    }

    public void afterUpdate(List<Account> newAccounts, Map<Id, Account> newMap, Map<Id, Account> oldMap) {
        syncToExternalSystem(newAccounts, oldMap);
    }

    private void setDefaultRating(List<Account> accounts) {
        for (Account acc : accounts) {
            if (acc.Rating == null) acc.Rating = 'Warm';
        }
    }

    private void createWelcomeTask(List<Account> accounts) {
        List<Task> tasks = new List<Task>();
        for (Account acc : accounts) {
            tasks.add(new Task(Subject = 'Welcome call', WhatId = acc.Id));
        }
        if (!tasks.isEmpty()) insert tasks;
    }

    // ... other private methods
}`,
        output: 'Trigger fires, delegates to handler, handler tests pass without DML',
      },
      {
        type: 'example',
        title: 'Testing the Handler Directly',
        text: 'Test handler methods directly — no trigger DML needed for most tests:',
        code: `@isTest
private class AccountTriggerHandlerTest {

    @isTest
    static void testSetDefaultRating() {
        // No insert needed — test the method directly
        List<Account> accounts = new List<Account>{
            new Account(Name = 'Test Corp', Rating = null),
            new Account(Name = 'Other Corp', Rating = 'Hot') // Should not change
        };

        Test.startTest();
        AccountTriggerHandler handler = new AccountTriggerHandler();
        handler.beforeInsert(accounts);
        Test.stopTest();

        System.assertEquals('Warm', accounts[0].Rating,
            'Null rating should default to Warm');
        System.assertEquals('Hot', accounts[1].Rating,
            'Existing rating should not be overwritten');
    }
}`,
        output: 'Test passes — no insert needed, testing pure logic in isolation',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What is structurally wrong with this trigger?\n\n```apex\ntrigger ContactTrigger on Contact (before insert, after insert) {\n    for (Contact c : Trigger.new) {\n        if (c.Email == null) {\n            c.Email = c.FirstName.toLowerCase() + \'@example.com\';\n        }\n    }\n    // 50 more lines of logic...\n}\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'All business logic is in the trigger body. This causes:\n1. **Untestable in isolation** — you must insert records to test any logic\n2. **NullPointerException risk** — `c.FirstName.toLowerCase()` throws if FirstName is null\n3. **Unmaintainable** — logic mixed with routing, no separation of concerns\n\nFixed pattern:\n```apex\ntrigger ContactTrigger on Contact (before insert, after insert) {\n    ContactTriggerHandler handler = new ContactTriggerHandler();\n    if (Trigger.isBefore && Trigger.isInsert) handler.beforeInsert(Trigger.new);\n    if (Trigger.isAfter && Trigger.isInsert) handler.afterInsert(Trigger.new, Trigger.newMap);\n}\n// All logic moved to ContactTriggerHandler with null checks\n```',
      },
      {
        type: 'tip',
        title: 'The TriggerHandler Base Class',
        text: 'Many teams implement a reusable TriggerHandler base class (popularized by Kevin O\'Hara\'s open-source pattern). It handles the if/isBefore/isAfter routing in a base class, so each handler just overrides the event methods it cares about. This eliminates routing boilerplate in every trigger. Search "Kevin O\'Hara Trigger Framework" for the full open-source implementation.',
      },
    ],
    quiz: [
      {
        id: 'thp-q1',
        question: 'Why should all trigger logic be in a handler class, not the trigger body?',
        options: [
          'Triggers have a size limit that handlers do not',
          'Handler class methods can be called and tested directly without DML',
          'Salesforce requires handler classes by default',
          'Triggers run slower when they contain logic',
        ],
        correct: 1,
        explanation: 'Handler class methods are plain Apex methods — they can be called directly in tests without inserting records. This makes testing faster and more precise, allowing you to test edge cases without expensive DML setup.',
      },
      {
        id: 'thp-q2',
        question: 'How many triggers should exist per sObject?',
        options: ['One per trigger event', 'As many as needed', 'One per object', 'Two maximum'],
        correct: 2,
        explanation: 'Best practice is one trigger per sObject (e.g., one AccountTrigger). Multiple triggers on the same object fire in an unpredictable order. One trigger with a handler class guarantees predictable execution order.',
      },
      {
        id: 'thp-q3',
        question: 'In the handler pattern, what goes in the trigger body?',
        options: [
          'All business logic',
          'SOQL queries and DML',
          'Only routing — instantiate handler, call appropriate handler method',
          'Validation rules',
        ],
        correct: 2,
        explanation: 'The trigger body should only route — check Trigger.isBefore/isAfter/isInsert/isUpdate etc., instantiate the handler, and call the appropriate handler method. No business logic, no SOQL, no DML in the trigger itself.',
      },
      {
        id: 'thp-q4',
        question: 'What is the main advantage of naming handler methods after trigger events (beforeInsert, afterUpdate)?',
        options: [
          'Required by Salesforce to compile correctly',
          'Makes the code self-documenting — it is clear which event each method handles',
          'Improves governor limit performance',
          'Allows the trigger framework to call them automatically',
        ],
        correct: 1,
        explanation: 'Naming handler methods after the trigger event (beforeInsert, afterUpdate) makes the code self-documenting. When reading the trigger, you instantly know that handler.beforeInsert() runs in the before insert context.',
      },
    ],
    challengeId: 'challenge-trigger-handler-pattern',
  },
  {
    id: 'apex-service-selector',
    moduleId: 'apex-design-patterns',
    order: 2,
    title: 'Service & Selector Layer Pattern',
    subtitle: 'Build maintainable, layered Apex architecture',
    description: 'Learn the Service/Selector/Domain layer architecture — separating SOQL queries (Selector), business logic (Service), and record operations (Domain) for large-scale Apex development.',
    duration: 40,
    difficulty: 'advanced',
    tags: ['apex', 'design-patterns', 'service-layer', 'selector', 'architecture'],
    prerequisites: ['apex-trigger-handler-pattern', 'apex-sharing-security'],
    learningObjectives: [
      'Explain the three-layer architecture: Service, Selector, Domain',
      'Write a Selector class that centralizes SOQL for a given sObject',
      'Write a Service class that orchestrates business logic',
      'Understand why centralizing SOQL in a Selector class prevents duplicate queries',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'As Salesforce orgs grow, you encounter copy-pasted SOQL queries for Account scattered across 30 classes — when a new required field is added, you have 30 places to update. The Service/Selector pattern solves this:\n\n• **Large ISV applications** — Salesforce AppExchange apps use fflib (Apex Enterprise Patterns) which implements this architecture\n• **Team scale** — when 10 developers touch the same org, the Selector ensures consistent SOQL across the codebase; no one duplicates queries\n• **Testability** — mock the Selector in service tests to test logic without querying the database',
      },
      {
        type: 'example',
        title: 'The Selector Layer — Centralizing SOQL',
        text: 'All SOQL for a given object lives in its Selector class:',
        code: `public with sharing class AccountSelector {

    // Every query for Account goes through this class
    // Add fields needed here — only one place to update
    private static final String BASE_FIELDS =
        'Id, Name, Industry, AnnualRevenue, Rating, BillingCity, BillingCountry, OwnerId';

    public List<Account> selectById(Set<Id> accountIds) {
        return Database.query(
            'SELECT ' + BASE_FIELDS + ' FROM Account WHERE Id IN :accountIds'
        );
    }

    public List<Account> selectByIndustry(String industry) {
        String safeIndustry = String.escapeSingleQuotes(industry);
        return Database.query(
            'SELECT ' + BASE_FIELDS +
            ' FROM Account WHERE Industry = \'' + safeIndustry + '\''
        );
    }

    public List<Account> selectRecentlyModified(Integer days) {
        return [
            SELECT Id, Name, Industry, AnnualRevenue, Rating,
                   BillingCity, BillingCountry, OwnerId
            FROM Account
            WHERE LastModifiedDate = LAST_N_DAYS:30
            ORDER BY LastModifiedDate DESC
        ];
    }
}`,
        output: 'All Account SOQL in one class — add a field once, all queries update',
      },
      {
        type: 'example',
        title: 'The Service Layer — Business Logic',
        text: 'The Service class calls the Selector and implements business rules:',
        code: `public with sharing class AccountService {

    private AccountSelector selector;

    public AccountService() {
        this.selector = new AccountSelector();
    }

    // For testing — inject a mock selector
    public AccountService(AccountSelector selector) {
        this.selector = selector;
    }

    public void upgradeToEnterpriseIfQualified(Set<Id> accountIds) {
        List<Account> accounts = selector.selectById(accountIds);
        List<Account> toUpdate = new List<Account>();

        for (Account acc : accounts) {
            if (acc.AnnualRevenue >= 1000000 && acc.Rating != 'Cold') {
                toUpdate.add(new Account(
                    Id = acc.Id,
                    Rating = 'Hot',
                    Industry = acc.Industry
                ));
            }
        }

        if (!toUpdate.isEmpty()) update toUpdate;
    }
}

// Called from trigger handler:
// AccountService svc = new AccountService();
// svc.upgradeToEnterpriseIfQualified(Trigger.newMap.keySet());`,
        output: 'Accounts with $1M+ revenue upgraded to Hot rating — business logic isolated in service',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What architectural issue exists in this service class?\n\n```apex\npublic class OpportunityService {\n    public void closeWonActions(Set<Id> oppIds) {\n        List<Opportunity> opps = [\n            SELECT Id, Name, AccountId, Amount FROM Opportunity WHERE Id IN :oppIds\n        ];\n        // ... 100 lines of logic\n    }\n\n    public void sendQuote(Set<Id> oppIds) {\n        List<Opportunity> opps = [\n            SELECT Id, Name, AccountId, Amount FROM Opportunity WHERE Id IN :oppIds\n        ];\n        // ... different logic, same query\n    }\n}\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'The same SOQL query is duplicated in two methods. When a new required field (e.g., StageName) needs to be added, it must be updated in two places — which will be forgotten, causing bugs.\n\nFixed with a Selector:\n```apex\n// OpportunitySelector.cls\npublic class OpportunitySelector {\n    public List<Opportunity> selectById(Set<Id> ids) {\n        return [SELECT Id, Name, AccountId, Amount, StageName FROM Opportunity WHERE Id IN :ids];\n    }\n}\n\n// OpportunityService.cls\npublic class OpportunityService {\n    private OpportunitySelector selector = new OpportunitySelector();\n\n    public void closeWonActions(Set<Id> oppIds) {\n        List<Opportunity> opps = selector.selectById(oppIds);\n        // ... logic\n    }\n\n    public void sendQuote(Set<Id> oppIds) {\n        List<Opportunity> opps = selector.selectById(oppIds);\n        // ... logic\n    }\n}\n```\n\nOne Selector query to update, guaranteed consistency.',
      },
      {
        type: 'tip',
        title: 'Start Simple, Apply Patterns When They Pay Off',
        text: 'You do not need Selectors and Services for every class. Apply them when:\n• Multiple classes query the same object (Selector pays off)\n• Business logic is complex enough to warrant testing without DML (Service pays off)\n• The team is large enough that consistent patterns reduce coordination overhead\n\nFor simple triggers on small orgs, a good handler class is sufficient. Patterns have a cost — only apply them when the benefit exceeds that cost.',
      },
    ],
    quiz: [
      {
        id: 'ssl-q1',
        question: 'What is the primary responsibility of a Selector class?',
        options: [
          'Validating record field values',
          'Centralizing all SOQL for a specific sObject in one place',
          'Handling trigger routing',
          'Managing DML operations',
        ],
        correct: 1,
        explanation: 'A Selector class centralizes all SOQL queries for a given sObject. This means field lists are maintained in one place — adding a field updates all queries. It also makes testing easier since you can inject a mock Selector.',
      },
      {
        id: 'ssl-q2',
        question: 'Which layer contains the business rules and decision logic?',
        options: ['Trigger', 'Selector', 'Service', 'Domain'],
        correct: 2,
        explanation: 'The Service layer contains business logic — it calls the Selector to get records and applies business rules, validations, and orchestrates DML. The trigger is just routing, the Selector is just querying.',
      },
      {
        id: 'ssl-q3',
        question: 'How does injecting a Selector into a Service class help with testing?',
        options: [
          'It automatically generates test data',
          'You can inject a mock Selector that returns known test data without hitting the database',
          'It runs queries faster in tests',
          'It bypasses governor limits in test context',
        ],
        correct: 1,
        explanation: 'When a Service accepts a Selector via constructor injection, tests can pass a stub/mock Selector that returns controlled test data. This lets you test Service logic without DML or SOQL, making tests faster and more precise.',
      },
      {
        id: 'ssl-q4',
        question: 'When should you apply the Service/Selector pattern?',
        options: [
          'Always — on every project, regardless of size',
          'Never — Salesforce recommends against it',
          'When the complexity and team size justify the overhead',
          'Only in LWC projects',
        ],
        correct: 2,
        explanation: 'Architectural patterns have a cost. Apply Service/Selector when multiple classes query the same object (Selector benefit) or when logic is complex enough to test in isolation (Service benefit). For simple single-class solutions, they add unnecessary overhead.',
      },
    ],
    challengeId: 'challenge-service-selector',
  },
  // ─── PLATFORM EVENTS ─────────────────────────────────────────────────────────
  {
    id: 'platform-events-intro',
    moduleId: 'platform-events',
    order: 1,
    title: 'Platform Events & Change Data Capture',
    subtitle: 'Build real-time event-driven integrations on Salesforce',
    description: 'Learn how to publish and subscribe to Platform Events for decoupled, real-time messaging between Salesforce and external systems.',
    duration: 35,
    difficulty: 'advanced',
    tags: ['platform-events', 'CDC', 'event-driven', 'publish-subscribe', 'streaming'],
    prerequisites: ['apex-triggers-handler', 'apex-callouts'],
    learningObjectives: [
      'Create a Platform Event object in Setup',
      'Publish Platform Events from Apex using EventBus.publish()',
      'Subscribe to Platform Events with an Apex trigger on the event',
      'Understand the difference between Platform Events and Change Data Capture',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Platform Events enable event-driven architecture on Salesforce:\n\n• **Decoupled integration** — instead of calling an external API synchronously (blocking the user), publish a "Order Created" event. An external system subscribes via CometD/Pub-Sub API and processes it on its own time\n• **Cross-cloud notifications** — when a lead is converted in Sales Cloud, publish an event that Service Cloud subscribes to for automatic case creation\n• **Durable replay** — events are retained for 72 hours. If a subscriber goes offline, it can replay missed events when it reconnects\n• **Change Data Capture (CDC)** — a Salesforce-managed variant that automatically publishes events for every record change without custom code',
      },
      {
        type: 'example',
        title: 'Publishing a Platform Event from Apex',
        text: 'First create an event object in Setup (Order_Shipped__e), then publish from Apex:',
        code: `// Platform Event objects end in "__e"
// Create in Setup > Platform Events: Order_Shipped__e
// Fields: Order_Id__c (Text), Carrier__c (Text), Tracking_Number__c (Text)

public class OrderService {

    public static void shipOrder(Id orderId, String carrier, String trackingNum) {
        // Update the order record
        Order__c ord = [SELECT Id, Status__c FROM Order__c WHERE Id = :orderId];
        ord.Status__c = 'Shipped';
        update ord;

        // Publish the event — decouples notification from business logic
        Order_Shipped__e event = new Order_Shipped__e(
            Order_Id__c = orderId,
            Carrier__c = carrier,
            Tracking_Number__c = trackingNum
        );

        // EventBus.publish returns a SaveResult
        Database.SaveResult result = EventBus.publish(event);

        if (result.isSuccess()) {
            System.debug('Order Shipped event published');
        } else {
            System.debug('Publish failed: ' + result.getErrors()[0].getMessage());
        }
    }
}`,
        output: 'Order Shipped event published',
      },
      {
        type: 'example',
        title: 'Subscribing with an Apex Trigger',
        text: 'An after insert trigger on the event object fires when events arrive:',
        code: `// Trigger fires for each batch of events (up to 2,000)
trigger OrderShippedTrigger on Order_Shipped__e (after insert) {

    List<Task> tasks = new List<Task>();

    for (Order_Shipped__e event : Trigger.new) {
        // Create a follow-up task for the customer
        tasks.add(new Task(
            Subject = 'Confirm delivery — Carrier: ' + event.Carrier__c,
            WhatId = event.Order_Id__c,
            ActivityDate = Date.today().addDays(7)
        ));

        System.debug('Processing shipped order: ' + event.Order_Id__c +
                     ' via ' + event.Carrier__c);
    }

    if (!tasks.isEmpty()) insert tasks;
}`,
        output: 'Processing shipped order: a0Bxx000001234 via FedEx\n// Task created for follow-up',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What is wrong with this platform event publish code?\n\n```apex\nOrder_Shipped__e event = new Order_Shipped__e(\n    Order_Id__c = orderId,\n    Carrier__c = \'FedEx\'\n);\ninsert event; // <-- here\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'Platform Events are published with `EventBus.publish()`, not `insert`. Using `insert` on a Platform Event throws a DML exception.\n\nFixed:\n```apex\nOrder_Shipped__e event = new Order_Shipped__e(\n    Order_Id__c = orderId,\n    Carrier__c = \'FedEx\'\n);\nDatabase.SaveResult result = EventBus.publish(event);\nif (!result.isSuccess()) {\n    System.debug(\'Failed: \' + result.getErrors()[0].getMessage());\n}\n```\n\nAlways use `EventBus.publish()` for Platform Events.',
      },
      {
        type: 'tip',
        title: 'Platform Events vs Change Data Capture',
        text: '**Platform Events**: Custom events you define and publish manually from Apex, Flow, or external systems. Use for business events ("Order Shipped", "Payment Received").\n\n**Change Data Capture (CDC)**: Salesforce automatically publishes events whenever a record is created, updated, deleted, or undeleted. No custom Apex needed to publish — just enable CDC for an object in Setup. Use when you need to replicate Salesforce data changes to external systems.',
      },
    ],
    quiz: [
      {
        id: 'pe-q1',
        question: 'What suffix do Platform Event API names use?',
        options: ['__pe', '__event', '__e', '__stream'],
        correct: 2,
        explanation: 'Platform Event objects use the __e suffix (e.g., Order_Shipped__e). This is similar to custom objects (__c) and custom metadata (__mdt).',
      },
      {
        id: 'pe-q2',
        question: 'Which method publishes a Platform Event from Apex?',
        options: ['insert event', 'EventBus.publish(event)', 'Platform.send(event)', 'EventBus.send(event)'],
        correct: 1,
        explanation: 'EventBus.publish() is used to publish Platform Events. Using insert throws a DML exception. EventBus.publish() returns a SaveResult you can check for success.',
      },
      {
        id: 'pe-q3',
        question: 'Which trigger event fires for a Platform Event subscriber trigger?',
        options: ['before insert', 'after insert', 'after update', 'before update'],
        correct: 1,
        explanation: 'Platform Event triggers use "after insert" — this fires when new events arrive on the event bus. No other trigger events (before, update, delete) are supported for Platform Events.',
      },
      {
        id: 'pe-q4',
        question: 'What is the main difference between Platform Events and Change Data Capture?',
        options: [
          'CDC is faster than Platform Events',
          'Platform Events are custom business events you publish manually; CDC auto-publishes on every record change',
          'Platform Events work with external systems; CDC is Salesforce-only',
          'CDC requires a trigger; Platform Events do not',
        ],
        correct: 1,
        explanation: 'Platform Events are custom-defined events you publish explicitly from code or Flow for business scenarios. CDC is a Salesforce-managed feature that automatically generates events for every record create/update/delete — no custom publish code needed.',
      },
    ],
    challengeId: 'challenge-platform-events',
  },
  // ─── FLOWS & AUTOMATION ───────────────────────────────────────────────────────
  {
    id: 'flows-invocable-methods',
    moduleId: 'flows-automation',
    order: 1,
    title: 'Calling Apex from Flows with @InvocableMethod',
    subtitle: 'Bridge declarative automation with custom Apex logic',
    description: 'Learn how to expose Apex methods to Flows using @InvocableMethod and @InvocableVariable, enabling no-code admins to call custom Apex from Record-Triggered Flows.',
    duration: 30,
    difficulty: 'intermediate',
    tags: ['flow', 'apex', '@InvocableMethod', '@InvocableVariable', 'automation'],
    prerequisites: ['apex-classes', 'apex-dml'],
    learningObjectives: [
      'Create an @InvocableMethod that Flows can call as an action',
      'Define @InvocableVariable fields on input/output wrapper classes',
      'Handle bulk invocations — Flows call invocable methods with a List of inputs',
      'Know when to use Flow vs Apex for automation',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Flows can automate most common processes without code, but sometimes you need Apex for logic too complex for Flow:\n\n• **External API calls** — a Record-Triggered Flow fires when an Account is updated, but HTTP callouts require Apex. Expose a callout method via @InvocableMethod so the admin-built Flow calls the Apex\n• **Complex calculations** — Flow formula resources have limited math. Delegate complex pricing calculations to Apex while the admin controls the trigger and routing in Flow\n• **Reusable components** — build once in Apex (@InvocableMethod), expose to any Flow across the org. Admins do not need a developer to change the trigger logic',
      },
      {
        type: 'example',
        title: 'Basic @InvocableMethod',
        text: 'Expose an Apex method to Flows with the @InvocableMethod annotation:',
        code: `public class CreditScoreService {

    // Input wrapper — Flow passes values in via @InvocableVariable fields
    public class CreditCheckInput {
        @InvocableVariable(label='Account Id' required=true)
        public Id accountId;

        @InvocableVariable(label='Requested Credit Limit')
        public Decimal requestedLimit;
    }

    // Output wrapper — Flow receives results back
    public class CreditCheckOutput {
        @InvocableVariable(label='Approved')
        public Boolean approved;

        @InvocableVariable(label='Approved Limit')
        public Decimal approvedLimit;

        @InvocableVariable(label='Reason')
        public String reason;
    }

    // The method itself — MUST take List<Input> and return List<Output>
    @InvocableMethod(
        label='Check Credit Score'
        description='Evaluates credit score and returns approval decision'
    )
    public static List<CreditCheckOutput> checkCredit(List<CreditCheckInput> inputs) {
        List<CreditCheckOutput> outputs = new List<CreditCheckOutput>();

        for (CreditCheckInput input : inputs) {
            Account acc = [SELECT Id, AnnualRevenue FROM Account WHERE Id = :input.accountId];

            CreditCheckOutput output = new CreditCheckOutput();

            if (acc.AnnualRevenue >= input.requestedLimit * 10) {
                output.approved = true;
                output.approvedLimit = input.requestedLimit;
                output.reason = 'Revenue supports the requested limit';
            } else {
                output.approved = false;
                output.approvedLimit = acc.AnnualRevenue / 10;
                output.reason = 'Insufficient revenue for requested limit';
            }

            outputs.add(output);
        }

        return outputs;
    }
}`,
        output: 'Flow calls "Check Credit Score" action — Apex runs and returns approved=true, approvedLimit=50000',
      },
      {
        type: 'explanation',
        title: 'The Bulkification Rule',
        text: 'Flows can process multiple records at once (e.g., bulk import). When they do, the @InvocableMethod is called ONCE with a List of inputs — not once per record.\n\nThis is why:\n• The method signature must be `List<Output> method(List<Input> inputs)` — always\n• You should process all inputs in a loop and return a corresponding List of outputs\n• The output list must be the same length and order as the input list\n\n**Common mistake**: doing SOQL inside the loop for each input separately. Collect all IDs from the input list first, do one query, use a Map to match results.',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What is wrong with this @InvocableMethod signature?\n\n```apex\n@InvocableMethod(label=\'Send Welcome Email\')\npublic static void sendWelcomeEmail(Contact c) {\n    // Send email to c\n}\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'Two bugs:\n1. The parameter type must be `List<Contact>`, not `Contact` — Flows always pass a list\n2. If the method needs to return values to Flow, it must return `List<Output>` not void\n\nFixed (output-less version for email send):\n```apex\n@InvocableMethod(label=\'Send Welcome Email\')\npublic static void sendWelcomeEmail(List<Id> contactIds) {\n    // Process the list\n    for (Id contactId : contactIds) {\n        // Send email...\n    }\n}\n```\n\nFor void methods with no output, `List<primitiveType>` or `List<InputWrapper>` as the input still required. Never a bare sObject — use an Id and re-query.',
      },
      {
        type: 'tip',
        title: 'Flow vs Apex — When to Use Which',
        text: '**Use Flow (declarative)** for: standard CRUD operations, field updates, email alerts, approval processes, record creation with simple logic, anything admins need to modify without a developer.\n\n**Use Apex (@InvocableMethod)** for: HTTP callouts, complex calculations, multi-step transactions that require precise error handling, integrations with external services, logic admins need to trigger but cannot implement in Flow formulas.\n\n**Golden rule**: Build the trigger and routing in Flow (admin-maintainable), delegate the complex logic to Apex (developer-owned).',
      },
    ],
    quiz: [
      {
        id: 'inv-q1',
        question: 'What is the required method signature for an @InvocableMethod?',
        options: [
          'public static void method(SObject record)',
          'public static List<Output> method(List<Input> inputs)',
          'public void method(Input input)',
          '@InvocableMethod can have any signature',
        ],
        correct: 1,
        explanation: '@InvocableMethod must accept a List (Flows call it in bulk) and return either void or a List. The input and output types must be wrapper classes with @InvocableVariable fields, or primitives/collections.',
      },
      {
        id: 'inv-q2',
        question: 'Which annotation marks a field as a Flow input or output variable?',
        options: ['@AuraEnabled', '@InvocableVariable', '@FlowField', '@ApiVariable'],
        correct: 1,
        explanation: '@InvocableVariable marks fields in a wrapper class as inputs or outputs that Flows can read and write. Add label= and required= parameters to control the Flow designer experience.',
      },
      {
        id: 'inv-q3',
        question: 'Why must @InvocableMethod accept a List instead of a single record?',
        options: [
          'It is just a convention, not a requirement',
          'Flows can process multiple records at once — the method is called once with all inputs',
          'Single records are not supported in Apex',
          'Lists perform better than single objects',
        ],
        correct: 1,
        explanation: 'When a Record-Triggered Flow processes a batch of records, the @InvocableMethod is called once with ALL records as a List — not once per record. This prevents governor limit issues and matches the bulkification pattern.',
      },
      {
        id: 'inv-q4',
        question: 'What annotation do you put on the method to expose it to Flow?',
        options: ['@AuraEnabled', '@InvocableVariable', '@InvocableMethod', '@FlowAction'],
        correct: 2,
        explanation: '@InvocableMethod on the static method makes it available as an Action in Flow Builder. Add label= and description= parameters so admins can find and understand the action in the Flow designer.',
      },
    ],
    challengeId: 'challenge-invocable-method',
  },
  // ─── APEX SECURITY ───────────────────────────────────────────────────────────
  {
    id: 'apex-sharing-security',
    moduleId: 'apex-security',
    order: 1,
    title: 'Apex Sharing & Field-Level Security',
    subtitle: 'Write code that respects Salesforce\'s security model',
    description: 'Learn how to use with sharing, without sharing, Security.stripInaccessible(), and CRUD/FLS checks to build secure Apex code.',
    duration: 35,
    difficulty: 'intermediate',
    tags: ['apex', 'security', 'sharing', 'FLS', 'CRUD', 'with-sharing'],
    prerequisites: ['apex-dml', 'apex-triggers-handler'],
    learningObjectives: [
      'Understand the difference between with sharing and without sharing',
      'Apply Security.stripInaccessible() to enforce field-level security',
      'Check CRUD permissions with Schema.sObjectType before DML operations',
      'Explain when to use each sharing keyword for different use cases',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Apex runs in system context by default — it can bypass Salesforce\'s entire permission model. Without explicit security checks, a custom button running Apex could let a sales rep read executive salary data or delete records they should never touch.\n\n• **Regulated industries** — HIPAA/PCI compliance requires that code never returns data the user is not authorized to see\n• **AppExchange ISVs** — apps submitted to AppExchange undergo a security review. Code without sharing keywords fails the review\n• **Multi-role orgs** — with sharing ensures that a "My Accounts" page actually shows only *my* accounts, respecting the org\'s sharing rules',
      },
      {
        type: 'example',
        title: 'with sharing vs without sharing',
        text: 'The sharing keyword on the class determines whether record-level sharing rules are enforced:',
        code: `// with sharing — SOQL respects the running user's record access
// Use for most controllers and service classes
public with sharing class AccountController {
    public List<Account> getMyAccounts() {
        // Returns only accounts the running user can see per sharing rules
        return [SELECT Id, Name FROM Account LIMIT 100];
    }
}

// without sharing — SOQL ignores sharing rules (runs as system)
// Use for background jobs, integrations, or admin-only utilities
public without sharing class DataMigrationJob {
    public void migrateAll() {
        // Returns ALL accounts regardless of running user's access
        List<Account> all = [SELECT Id, Name FROM Account LIMIT 50000];
        // process all...
    }
}

// inherited sharing — inherits the sharing context of the caller
// Good for utility methods called from both with/without sharing contexts
public inherited sharing class AccountUtils {
    public static String getAccountName(Id accId) {
        return [SELECT Name FROM Account WHERE Id = :accId].Name;
    }
}`,
        output: 'with sharing: 42 accounts (user\'s own)\nwithout sharing: 15,000 accounts (all)',
      },
      {
        type: 'example',
        title: 'Field-Level Security with Security.stripInaccessible()',
        text: 'Even with sharing, Apex can read fields the user cannot see in the UI. Use Security.stripInaccessible() to enforce FLS:',
        code: `public with sharing class SecureAccountService {

    public static List<Account> getAccountsForUser() {
        // This query could return Salary__c even if user doesn't have FLS read
        List<Account> rawAccounts = [
            SELECT Id, Name, AnnualRevenue, Salary__c
            FROM Account LIMIT 100
        ];

        // Strip fields the running user doesn't have FLS read access to
        SObjectAccessDecision decision = Security.stripInaccessible(
            AccessType.READABLE,
            rawAccounts
        );

        // Return only the accessible fields
        return (List<Account>) decision.getRecords();
    }

    public static void saveAccount(Account acc) {
        // Strip fields the user doesn't have FLS write access to
        SObjectAccessDecision decision = Security.stripInaccessible(
            AccessType.UPSERTABLE,
            new List<Account>{ acc }
        );
        List<Account> sanitized = (List<Account>) decision.getRecords();
        upsert sanitized;
    }
}`,
        output: 'Returns accounts without Salary__c if user lacks FLS read on that field',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What security issue exists in this code?\n\n```apex\npublic class ContactService {\n    public List<Contact> getAllContacts() {\n        return [SELECT Id, Name, SSN__c, Salary__c FROM Contact LIMIT 1000];\n    }\n}\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'Two security issues:\n1. No sharing keyword — runs in system context, returning all Contacts regardless of user access\n2. No FLS check — SSN__c and Salary__c are returned even if the user lacks FLS read on those fields\n\nFixed:\n```apex\npublic with sharing class ContactService {\n    public List<Contact> getAllContacts() {\n        List<Contact> contacts = [SELECT Id, Name, SSN__c, Salary__c FROM Contact LIMIT 1000];\n        SObjectAccessDecision decision = Security.stripInaccessible(AccessType.READABLE, contacts);\n        return (List<Contact>) decision.getRecords();\n    }\n}\n```\n\n`with sharing` enforces record-level security. `Security.stripInaccessible()` enforces field-level security.',
      },
      {
        type: 'tip',
        title: 'The Rule of Thumb',
        text: '**Default to `with sharing`** for any class that runs in a user context (controllers, service classes called from triggers). Use `without sharing` explicitly and deliberately only for background jobs, admin utilities, or cases where you have intentionally decided to bypass sharing. If a utility method could be called from either context, use `inherited sharing`.',
      },
    ],
    quiz: [
      {
        id: 'sec-q1',
        question: 'What does "with sharing" enforce in Apex?',
        options: [
          'Field-level security on SOQL results',
          'Record-level sharing rules — the running user only sees records they have access to',
          'CRUD permissions for DML operations',
          'All Salesforce security rules including FLS and CRUD',
        ],
        correct: 1,
        explanation: '"with sharing" enforces record-level sharing rules — the same sharing rules that govern what records users see in list views. It does NOT enforce FLS or CRUD automatically; you need Security.stripInaccessible() or Schema checks for those.',
      },
      {
        id: 'sec-q2',
        question: 'What does Security.stripInaccessible(AccessType.READABLE, records) do?',
        options: [
          'Deletes records the user cannot access',
          'Throws an exception if any field is inaccessible',
          'Returns a filtered record list with inaccessible fields removed',
          'Checks CRUD permissions for read operations',
        ],
        correct: 2,
        explanation: 'Security.stripInaccessible() returns an SObjectAccessDecision. Calling .getRecords() on it returns the same records but with any fields the running user lacks FLS read access to removed (set to null).',
      },
      {
        id: 'sec-q3',
        question: 'Which sharing keyword should a utility method use if it needs to work correctly whether called from a with sharing or without sharing context?',
        options: ['with sharing', 'without sharing', 'inherited sharing', 'No keyword — default is inherited'],
        correct: 2,
        explanation: '"inherited sharing" inherits the sharing context of the calling class. If called from a with sharing class, it enforces sharing; if called from without sharing, it does not. The default (no keyword) also inherits, but inherited sharing is explicit and clearer.',
      },
      {
        id: 'sec-q4',
        question: 'A "with sharing" class only returns 5 Accounts. The same query in "without sharing" returns 500. Why?',
        options: [
          'without sharing has a higher SOQL row limit',
          'with sharing applies field-level security that filters records',
          'with sharing enforces the running user\'s record-level sharing rules',
          'with sharing limits results to 5 by default',
        ],
        correct: 2,
        explanation: '"with sharing" enforces the running user\'s sharing rules. If a user owns or has explicit sharing to only 5 Accounts, with sharing returns only those 5. "without sharing" ignores sharing rules and returns all 500 records the query matches.',
      },
    ],
    challengeId: 'challenge-apex-sharing',
  },
  // ─── SOQL ADVANCED ───────────────────────────────────────────────────────────
  {
    id: 'soql-dynamic-sosl',
    moduleId: 'soql-advanced',
    order: 1,
    title: 'Dynamic SOQL & SOSL',
    subtitle: 'Build flexible queries at runtime and search across multiple objects',
    description: 'Learn how to build SOQL queries dynamically using Database.query(), use SOSL for cross-object full-text search, and avoid SOQL injection vulnerabilities.',
    duration: 35,
    difficulty: 'intermediate',
    tags: ['soql', 'sosl', 'dynamic-soql', 'Database.query', 'search', 'injection'],
    prerequisites: ['soql-basics', 'apex-classes'],
    learningObjectives: [
      'Build and execute dynamic SOQL queries using Database.query()',
      'Use String.escapeSingleQuotes() to prevent SOQL injection',
      'Write SOSL queries to search across multiple objects at once',
      'Know when to choose SOSL over SOQL for search use cases',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Static SOQL covers 80% of use cases, but some scenarios require building queries at runtime:\n\n• **Search pages with optional filters** — a user can filter by Status, Owner, or Date range in any combination. Building separate static queries for every combination is impractical\n• **Global search boxes** — when a user types "Acme" in a search bar, SOSL searches Contact, Account, and Lead simultaneously and returns the top matches from each\n• **Dynamic report builders** — admin-configured field lists determine which columns appear in a table',
      },
      {
        type: 'example',
        title: 'Dynamic SOQL with Database.query()',
        text: 'Build a query string and execute it at runtime:',
        code: `public class AccountSearchService {

    public static List<Account> searchAccounts(String industry, String rating) {
        // Build the base query
        String soql = 'SELECT Id, Name, Industry, Rating FROM Account WHERE Id != null';

        // Conditionally add filters
        if (String.isNotBlank(industry)) {
            // ALWAYS escape user-supplied strings to prevent SOQL injection
            soql += ' AND Industry = \'' + String.escapeSingleQuotes(industry) + '\'';
        }
        if (String.isNotBlank(rating)) {
            soql += ' AND Rating = \'' + String.escapeSingleQuotes(rating) + '\'';
        }

        soql += ' ORDER BY Name LIMIT 100';

        System.debug('Executing SOQL: ' + soql);

        // Database.query() executes a SOQL string at runtime
        return Database.query(soql);
    }
}

// Called with:
AccountSearchService.searchAccounts('Technology', 'Hot');
// Executes: SELECT Id, Name, Industry, Rating FROM Account
//           WHERE Id != null AND Industry = 'Technology' AND Rating = 'Hot'`,
        output: "Executing SOQL: SELECT Id, Name ... WHERE Id != null AND Industry = 'Technology' AND Rating = 'Hot'",
      },
      {
        type: 'explanation',
        title: 'SOQL Injection — Never Trust User Input',
        text: 'If you concatenate user input directly into a SOQL string without escaping, an attacker can break out of your query and read any data in the org.\n\n**Vulnerable code:**\n```apex\n// If userInput is malicious, it can inject extra conditions\n// returning ALL accounts the user should not see!\nString soql = "SELECT Id FROM Account WHERE Name = " + userInput;\n```\n\n**Always escape user input:**\n```apex\nString safe = String.escapeSingleQuotes(userInput);\nsoql += \' AND Name = \\\'\' + safe + \'\\\'\';\n```\n\nString.escapeSingleQuotes() escapes any single quotes in the input so they cannot break out of the string literal.',
      },
      {
        type: 'example',
        title: 'SOSL — Search Across Multiple Objects',
        text: 'SOSL searches the full-text search index across multiple objects simultaneously:',
        code: `// SOSL syntax: FIND {searchTerm} IN ALL FIELDS RETURNING ObjectName(fields)
List<List<SObject>> results = [
    FIND :searchTerm
    IN ALL FIELDS
    RETURNING
        Account (Id, Name, Phone),
        Contact (Id, FirstName, LastName, Email),
        Lead (Id, Name, Company)
    LIMIT 10
];

// Results come back as a list of lists — one list per object
List<Account> accounts = (List<Account>) results[0];
List<Contact> contacts = (List<Contact>) results[1];
List<Lead> leads = (List<Lead>) results[2];

System.debug('Found ' + accounts.size() + ' accounts');
System.debug('Found ' + contacts.size() + ' contacts');
System.debug('Found ' + leads.size() + ' leads');`,
        output: 'Found 3 accounts\nFound 7 contacts\nFound 2 leads',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What security vulnerability exists in this dynamic SOQL?\n\n```apex\npublic static List<Contact> findByName(String lastName) {\n    String soql = \'SELECT Id, Name FROM Contact WHERE LastName = \\\'\' + lastName + \'\\\'\';\n    return Database.query(soql);\n}\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'This is a **SOQL injection vulnerability**. If `lastName` contains a single quote (e.g., `O\'Brien`), it breaks the query syntax. Worse, a malicious input like `\' OR IsDeleted = false AND LastName != \'` could return records it should not.\n\nFixed:\n```apex\npublic static List<Contact> findByName(String lastName) {\n    String safeLastName = String.escapeSingleQuotes(lastName);\n    String soql = \'SELECT Id, Name FROM Contact WHERE LastName = \\\'\' + safeLastName + \'\\\'\';\n    return Database.query(soql);\n}\n```\n\nAlways call `String.escapeSingleQuotes()` on any user-controlled string before embedding it in a dynamic SOQL query.',
      },
      {
        type: 'tip',
        title: 'SOSL vs SOQL — When to Use Which',
        text: '**SOQL**: Use for structured queries with known filters. Returns exact field matches. Fast for filtering by specific field values. Use when you know the object and fields.\n\n**SOSL**: Use for full-text search across multiple objects. Searches the search index (like a search engine). Great for search boxes where the user types keywords and you want results from Account, Contact, and Lead at once. SOSL cannot be used in triggers — only controllers and service classes.',
      },
    ],
    quiz: [
      {
        id: 'dsoql-q1',
        question: 'Which method executes a SOQL query string built at runtime?',
        options: ['SOQL.execute()', 'Database.query()', 'Apex.query()', 'String.soql()'],
        correct: 1,
        explanation: 'Database.query(soqlString) takes a SOQL string and executes it, returning a List<SObject>. You can cast the result to your specific type.',
      },
      {
        id: 'dsoql-q2',
        question: 'Which method prevents SOQL injection from user-supplied strings?',
        options: [
          'String.sanitize()',
          'String.escapeSingleQuotes()',
          'Database.escape()',
          'SOQL.sanitize()',
        ],
        correct: 1,
        explanation: 'String.escapeSingleQuotes() escapes single quote characters in a string so they cannot break out of a SOQL string literal. Always call this on any user-provided input before concatenating it into a dynamic SOQL query.',
      },
      {
        id: 'dsoql-q3',
        question: 'What does SOSL return?',
        options: [
          'A single List<SObject>',
          'A Map<String, List<SObject>>',
          'A List<List<SObject>> — one inner list per returned object type',
          'A List<String> of matching record IDs',
        ],
        correct: 2,
        explanation: 'SOSL returns a List<List<SObject>>. Each inner list corresponds to one of the RETURNING clauses. results[0] is the first object, results[1] is the second, etc. Cast each to the appropriate type.',
      },
      {
        id: 'dsoql-q4',
        question: 'In which context can SOSL NOT be used?',
        options: [
          'Visualforce controllers',
          'Apex triggers',
          'Service classes',
          'Batch Apex execute() method',
        ],
        correct: 1,
        explanation: 'SOSL cannot be used in Apex triggers. Use SOQL in triggers. SOSL is designed for search use cases in controllers and service classes.',
      },
    ],
    challengeId: 'challenge-soql-dynamic',
  },
  // ─── ASYNC APEX ──────────────────────────────────────────────────────────────
  {
    id: 'apex-future-queueable',
    moduleId: 'async-apex',
    order: 1,
    title: 'Future Methods & Queueable Apex',
    subtitle: 'Run long-running operations outside the main transaction',
    description: 'Learn when and how to use @future methods and Queueable Apex to defer work, make callouts from triggers, and chain asynchronous jobs.',
    duration: 35,
    difficulty: 'intermediate',
    tags: ['apex', 'async', '@future', 'queueable', 'asynchronous'],
    prerequisites: ['apex-callouts', 'apex-governor-limits'],
    learningObjectives: [
      'Use @future(callout=true) to make HTTP callouts from a trigger context',
      'Understand the limitations of @future (no sObjects, no chaining)',
      'Implement the Queueable interface for more flexible async execution',
      'Chain Queueable jobs using System.enqueueJob()',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Triggers run synchronously — the user waits for them to complete before seeing their record saved. Async Apex moves slow work out of the user\'s critical path:\n\n• **Callout from trigger** — after a Contact is created, sync an external CRM without slowing down the save. Use @future(callout=true)\n• **Heavy data processing** — recalculating aggregate values on thousands of related records. Use Queueable so the user is not blocked\n• **Chained jobs** — Step 1 fetches data, Step 2 processes it, Step 3 sends a notification. Queueable jobs can enqueue the next step when finished',
      },
      {
        type: 'example',
        title: '@future Methods',
        text: '@future runs a static method in a separate transaction with its own governor limits:',
        code: `public class ExternalCrmService {

    // callout=true is required to make HTTP requests from async context
    @future(callout=true)
    public static void syncContact(Id contactId) {
        // Fresh governor limits — separate from the trigger that called this
        Contact c = [SELECT Id, FirstName, LastName, Email
                     FROM Contact WHERE Id = :contactId LIMIT 1];

        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:CRM_API/contacts');
        req.setMethod('POST');
        req.setBody(JSON.serialize(c));

        Http http = new Http();
        HttpResponse res = http.send(req);

        if (res.getStatusCode() != 200) {
            System.debug('CRM sync failed: ' + res.getBody());
        }
    }
}

// Called from trigger:
trigger ContactTrigger on Contact (after insert) {
    for (Contact c : Trigger.new) {
        ExternalCrmService.syncContact(c.Id); // Enqueues async job
    }
}`,
        output: 'Trigger completes instantly — CRM sync runs in background',
      },
      {
        type: 'explanation',
        title: '@future Limitations',
        text: '• **No sObject parameters** — you cannot pass Contact c to a @future method. Pass Id contactId instead and re-query inside\n• **No chaining** — a @future method cannot call another @future method\n• **No tracking** — you cannot monitor or cancel a @future job\n• **Max 50 per transaction** — you can enqueue at most 50 @future calls per transaction\n\nWhen you need more control, use Queueable.',
      },
      {
        type: 'example',
        title: 'Queueable Apex',
        text: 'Queueable gives you a job ID, the ability to chain, and sObject support:',
        code: `public class ContactSyncJob implements Queueable, Database.AllowsCallouts {

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
            req.setEndpoint('callout:CRM_API/contacts/' + c.Id);
            req.setMethod('PUT');
            req.setBody(JSON.serialize(c));
            new Http().send(req);
        }

        // Chain another job when this one finishes
        System.enqueueJob(new NotificationJob(contactIds));
    }
}

// Enqueue from trigger:
trigger ContactTrigger on Contact (after update) {
    List<Id> ids = new List<Id>(Trigger.newMap.keySet());
    System.enqueueJob(new ContactSyncJob(ids));
}`,
        output: 'Job ID returned — can monitor in Setup > Apex Jobs',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What is wrong with this @future method signature?\n\n```apex\n@future\npublic static void processContact(Contact c) {\n    System.debug(c.Name);\n}\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: '@future methods cannot accept sObject parameters (Contact, Account, etc.) because the data could change between when the method is enqueued and when it actually executes.\n\nFixed — pass the Id and re-query inside:\n```apex\n@future\npublic static void processContact(Id contactId) {\n    Contact c = [SELECT Id, Name FROM Contact WHERE Id = :contactId LIMIT 1];\n    System.debug(c.Name);\n}\n```\n\nAlways pass primitive types (Id, String, Integer, List<Id>) to @future methods, never sObjects.',
      },
      {
        type: 'tip',
        title: 'When to Use Which',
        text: '**@future**: simplest option for fire-and-forget operations. Use when you just need to defer a callout or simple operation. No chaining, no monitoring.\n\n**Queueable**: use when you need to pass complex data, chain jobs, or track job status. Implements an interface so it is more code but far more flexible.\n\n**Batch Apex**: use for processing 50,000+ records. Covered in the next lesson.',
      },
    ],
    quiz: [
      {
        id: 'fut-q1',
        question: 'What annotation do you need to make an HTTP callout from a @future method?',
        options: ['@future(async=true)', '@future(callout=true)', '@future(http=true)', '@future'],
        correct: 1,
        explanation: '@future(callout=true) enables HTTP callouts from the async method. Without callout=true, any attempt to make an HTTP request will throw a CalloutException.',
      },
      {
        id: 'fut-q2',
        question: 'Why can @future methods not accept sObject parameters?',
        options: [
          'sObjects are too large to serialize',
          'The sObject data could change between enqueue time and execution time',
          'Apex does not support serialization of sObjects',
          '@future only supports primitive types by design',
        ],
        correct: 1,
        explanation: '@future methods are queued and may execute seconds or minutes later. The sObject you pass might be stale or changed by another transaction. Pass an Id and re-query inside the method to get the current state.',
      },
      {
        id: 'fut-q3',
        question: 'What interface does a Queueable class implement?',
        options: ['Runnable', 'Queueable', 'AsyncApex', 'Schedulable'],
        correct: 1,
        explanation: 'Queueable classes implement the Queueable interface and must have an execute(QueueableContext ctx) method. To make callouts, also implement Database.AllowsCallouts.',
      },
      {
        id: 'fut-q4',
        question: 'How do you chain one Queueable job to run after another?',
        options: [
          'Use @future inside the execute() method',
          'Call System.enqueueJob(new NextJob()) at the end of execute()',
          'Use System.schedule() inside execute()',
          'Queueable jobs cannot be chained',
        ],
        correct: 1,
        explanation: 'At the end of a Queueable execute() method, call System.enqueueJob(new NextJob()) to enqueue the next job. This creates a chain where each job starts after the previous one completes.',
      },
    ],
    challengeId: 'challenge-apex-future-queueable',
  },
  {
    id: 'apex-batch-apex',
    moduleId: 'async-apex',
    order: 2,
    title: 'Batch Apex for Large Data Volumes',
    subtitle: 'Process millions of records safely within governor limits',
    description: 'Learn how to implement the Database.Batchable interface to process large datasets in chunks, respecting governor limits on every batch.',
    duration: 40,
    difficulty: 'intermediate',
    tags: ['apex', 'batch', 'Database.Batchable', 'large-data-volumes', 'async'],
    prerequisites: ['apex-future-queueable', 'apex-governor-limits'],
    learningObjectives: [
      'Implement the Database.Batchable interface with start, execute, and finish methods',
      'Understand how batch size controls memory and limit usage per chunk',
      'Execute a batch class and monitor it in Apex Jobs',
      'Test batch classes using Test.startTest() and Test.stopTest()',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Batch Apex is the standard solution for data migration and mass updates:\n\n• **Data cleanup** — an org has 2 million Account records where `BillingCountry` is blank. A batch job processes 200 at a time, completing over hours without hitting limits\n• **Nightly reporting** — recalculate aggregate KPI fields on all Opportunities from yesterday\n• **Data migration** — after a schema change, backfill a new field on existing records\n\nWithout Batch Apex, trying to process 2 million records in a single transaction hits the 10,000 record DML limit immediately.',
      },
      {
        type: 'example',
        title: 'The Database.Batchable Interface',
        text: 'A batch class implements three methods — start, execute, finish:',
        code: `public class AccountCountryBatch implements Database.Batchable<SObject> {

    // start() — returns the records to process (runs once)
    public Database.QueryLocator start(Database.BatchableContext ctx) {
        return Database.getQueryLocator(
            'SELECT Id, BillingCountry FROM Account WHERE BillingCountry = null'
        );
    }

    // execute() — called once per batch chunk (default: 200 records)
    public void execute(Database.BatchableContext ctx, List<Account> scope) {
        for (Account acc : scope) {
            acc.BillingCountry = 'United States';
        }
        update scope; // 1 DML per batch chunk — safe!
    }

    // finish() — called once after all batches complete
    public void finish(Database.BatchableContext ctx) {
        System.debug('Batch complete! Processed all accounts.');
        // Could send an email, trigger a follow-up job, etc.
    }
}

// Execute it:
AccountCountryBatch job = new AccountCountryBatch();
Database.executeBatch(job, 200); // 200 = records per batch chunk`,
        output: 'Job ID: 707xx000001234AAA\n// Monitor in Setup > Apex Jobs',
      },
      {
        type: 'explanation',
        title: 'Batch Size and Governor Limits',
        text: 'The second argument to `Database.executeBatch(job, batchSize)` controls how many records are passed to each `execute()` call. Each chunk gets its own fresh governor limits.\n\n• **Default**: 200 records per chunk\n• **Max**: 2,000 records per chunk\n• **Tune down** (50-100) if execute() does heavy SOQL or complex processing that could hit limits\n• **Tune up** (1,000-2,000) if execute() is simple and you want fewer total transactions\n\nThe total records processed is not limited — Batch Apex can handle tens of millions of records.',
      },
      {
        type: 'example',
        title: 'Testing a Batch Class',
        text: 'Test.stopTest() forces the batch to run synchronously in tests:',
        code: `@isTest
private class AccountCountryBatchTest {

    @isTest
    static void testBatchUpdatesCountry() {
        // Create test accounts without BillingCountry
        List<Account> accounts = new List<Account>();
        for (Integer i = 0; i < 10; i++) {
            accounts.add(new Account(Name = 'Test Account ' + i));
        }
        insert accounts;

        // Run the batch
        Test.startTest();
        AccountCountryBatch job = new AccountCountryBatch();
        Database.executeBatch(job, 200);
        Test.stopTest(); // Forces batch to complete synchronously

        // Assert results
        List<Account> updated = [
            SELECT Id, BillingCountry FROM Account WHERE BillingCountry = 'United States'
        ];
        System.assertEquals(10, updated.size(),
            'All 10 accounts should have BillingCountry set');
    }
}`,
        output: 'Test passes — batch ran synchronously between startTest/stopTest',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What is wrong with this batch class execute method?\n\n```apex\npublic void execute(Database.BatchableContext ctx, List<Account> scope) {\n    for (Account acc : scope) {\n        acc.BillingCountry = \'United States\';\n        update acc; // <-- here\n    }\n}\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: '`update acc` inside the loop is DML-in-a-loop — with 200 records per batch, this issues 200 DML statements, hitting the 150 DML limit and throwing a LimitException.\n\nFixed — collect and update once:\n```apex\npublic void execute(Database.BatchableContext ctx, List<Account> scope) {\n    for (Account acc : scope) {\n        acc.BillingCountry = \'United States\';\n        // No DML here — just modify the in-memory object\n    }\n    update scope; // ONE DML statement for the whole chunk\n}\n```\n\nBatch chunks get fresh governor limits, but the same no-DML-in-loop rule still applies within each chunk.',
      },
      {
        type: 'tip',
        title: 'Stateful Batches',
        text: 'By default, instance variables are reset between execute() calls. If you need to track state across chunks (e.g., count total records processed), implement `Database.Stateful` in addition to `Database.Batchable`. This lets instance variables persist between execute() invocations, at the cost of slightly higher memory usage.',
      },
    ],
    quiz: [
      {
        id: 'bat-q1',
        question: 'Which method in a batch class is called once per chunk of records?',
        options: ['start()', 'execute()', 'finish()', 'process()'],
        correct: 1,
        explanation: 'execute() is called once per batch chunk (by default, 200 records per chunk). start() runs once to define the query, and finish() runs once after all chunks are done.',
      },
      {
        id: 'bat-q2',
        question: 'What does Database.getQueryLocator() do in a batch start() method?',
        options: [
          'Runs the SOQL query immediately and returns a List',
          'Returns a cursor Salesforce uses to paginate through millions of records safely',
          'Validates the SOQL syntax before execution',
          'Limits the query to 50,000 records',
        ],
        correct: 1,
        explanation: 'Database.getQueryLocator() returns a cursor-based result set. Salesforce uses it to fetch records in pages (chunks), enabling batch jobs to safely process up to 50 million records total without hitting heap or query limits.',
      },
      {
        id: 'bat-q3',
        question: 'How do you force a batch job to run synchronously in an Apex test?',
        options: [
          'Use @isTest(runBatch=true)',
          'Call Database.executeBatch() with size=1',
          'Wrap the executeBatch() call between Test.startTest() and Test.stopTest()',
          'Batch jobs always run synchronously in tests',
        ],
        correct: 2,
        explanation: 'Test.stopTest() forces all async work (batch, future, queueable) that was started after Test.startTest() to run synchronously before returning. This is how you assert batch results in a test.',
      },
      {
        id: 'bat-q4',
        question: 'What interface should a batch class implement to maintain instance variable state across execute() calls?',
        options: ['Database.Stateful', 'Database.Persistent', 'Database.Stateless', 'Database.AllowsCallouts'],
        correct: 0,
        explanation: 'By default, batch instance variables are reset between execute() calls. Implementing Database.Stateful persists instance variables across all execute() calls, allowing you to accumulate totals or track cross-chunk state.',
      },
    ],
    challengeId: 'challenge-apex-batch',
  },
  // ─── GOVERNOR LIMITS ─────────────────────────────────────────────────────────
  {
    id: 'apex-governor-limits',
    moduleId: 'governor-limits',
    order: 1,
    title: 'Understanding Salesforce Governor Limits',
    subtitle: 'Write efficient code that respects the platform\'s execution guardrails',
    description: 'Learn why Salesforce enforces governor limits, what the most common limits are, and how to write bulkified code that never hits them.',
    duration: 40,
    difficulty: 'intermediate',
    tags: ['apex', 'governor-limits', 'bulkification', 'SOQL-in-loops', 'DML-in-loops'],
    prerequisites: ['apex-dml', 'apex-triggers-intro'],
    learningObjectives: [
      'Explain what governor limits are and why Salesforce enforces them',
      'Identify the most critical limits: SOQL queries, DML statements, heap size, CPU time',
      'Recognize and fix the SOQL-in-a-loop anti-pattern',
      'Recognize and fix the DML-in-a-loop anti-pattern',
      'Use Limits class methods to monitor consumption at runtime',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Governor limits exist because Salesforce is a **multi-tenant platform** — hundreds of thousands of customers share the same infrastructure. Without limits:\n\n• A runaway loop in one customer\'s code would starve every other customer\'s transactions\n• One poorly written trigger processing 10,000 records would issue 10,000 SOQL queries and consume the entire database connection pool\n\nGovernor limits are enforced **per transaction** — not per user, not per hour. A transaction is one trigger execution, one controller method call, one Visualforce page load.',
      },
      {
        type: 'explanation',
        title: 'Key Governor Limits to Know',
        text: '| Limit | Synchronous | Asynchronous |\n|---|---|---|\n| SOQL queries | 100 | 200 |\n| DML statements | 150 | 150 |\n| Records per DML | 10,000 | 10,000 |\n| Heap size | 6 MB | 12 MB |\n| CPU time | 10,000 ms | 60,000 ms |\n| Callouts | 100 | 100 |\n\nThe two most commonly violated are **SOQL queries** (100 limit) and **DML statements** (150 limit).',
      },
      {
        type: 'example',
        title: 'The SOQL-in-a-Loop Anti-Pattern',
        text: 'This trigger hits the 100 SOQL limit when processing more than 100 records:',
        code: `// BAD — SOQL inside a loop
trigger ContactTrigger on Contact (after insert) {
    for (Contact c : Trigger.new) {
        // This runs 1 SOQL query PER contact — 200 contacts = 200 queries = LIMIT EXCEEDED!
        Account acc = [SELECT Id, Name FROM Account WHERE Id = :c.AccountId];
        System.debug('Contact belongs to: ' + acc.Name);
    }
}

// GOOD — Collect IDs first, then bulk query
trigger ContactTrigger on Contact (after insert) {
    // Step 1: Collect all AccountIds
    Set<Id> accountIds = new Set<Id>();
    for (Contact c : Trigger.new) {
        if (c.AccountId != null) {
            accountIds.add(c.AccountId);
        }
    }

    // Step 2: One SOQL query for ALL related accounts (1 query, not 200)
    Map<Id, Account> accountMap = new Map<Id, Account>(
        [SELECT Id, Name FROM Account WHERE Id IN :accountIds]
    );

    // Step 3: Use the map — no SOQL in the loop
    for (Contact c : Trigger.new) {
        Account acc = accountMap.get(c.AccountId);
        if (acc != null) {
            System.debug('Contact belongs to: ' + acc.Name);
        }
    }
}`,
        output: '1 SOQL query regardless of how many contacts are inserted',
      },
      {
        type: 'example',
        title: 'The DML-in-a-Loop Anti-Pattern',
        text: 'Same problem with DML — collect records first, insert once:',
        code: `// BAD — DML inside a loop
for (Account acc : accountsToUpdate) {
    acc.Rating = 'Hot';
    update acc; // 1 DML statement per record — 200 accounts = 200 DML statements
}

// GOOD — Collect, then DML once
List<Account> toUpdate = new List<Account>();
for (Account acc : accountsToUpdate) {
    acc.Rating = 'Hot';
    toUpdate.add(acc); // No DML here
}
update toUpdate; // ONE DML statement for all records`,
        output: '1 DML statement regardless of list size',
      },
      {
        type: 'example',
        title: 'Monitoring Limits at Runtime',
        text: 'Use the Limits class to check consumption during execution:',
        code: `public class LimitChecker {
    public static void checkLimits() {
        System.debug('SOQL queries used: ' + Limits.getQueries());
        System.debug('SOQL queries remaining: ' +
            (Limits.getLimitQueries() - Limits.getQueries()));
        System.debug('DML statements used: ' + Limits.getDmlStatements());
        System.debug('CPU time used (ms): ' + Limits.getCpuTime());
        System.debug('Heap size used (bytes): ' + Limits.getHeapSize());
    }
}`,
        output: 'SOQL queries used: 3\nSOQL queries remaining: 97\nDML statements used: 1',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'How many SOQL queries does this code issue when processing 50 Opportunities?\n\n```apex\ntrigger OpportunityTrigger on Opportunity (after update) {\n    for (Opportunity opp : Trigger.new) {\n        List<Task> tasks = [SELECT Id FROM Task WHERE WhatId = :opp.Id];\n        if (tasks.isEmpty()) {\n            Task t = new Task(Subject = \'Follow up\', WhatId = opp.Id);\n            insert t;\n        }\n    }\n}\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'This trigger issues **50 SOQL queries** (one per Opportunity) AND **up to 50 DML statements** (one insert per Opportunity). With 100 Opportunities it hits the SOQL limit.\n\nFixed version:\n```apex\ntrigger OpportunityTrigger on Opportunity (after update) {\n    Set<Id> oppIds = new Set<Id>(Trigger.newMap.keySet());\n\n    // 1 SOQL — find which opps already have tasks\n    Map<Id, List<Task>> tasksByOpp = new Map<Id, List<Task>>();\n    for (Task t : [SELECT Id, WhatId FROM Task WHERE WhatId IN :oppIds]) {\n        if (!tasksByOpp.containsKey(t.WhatId)) tasksByOpp.put(t.WhatId, new List<Task>());\n        tasksByOpp.get(t.WhatId).add(t);\n    }\n\n    // Build list of tasks to insert — no DML in loop\n    List<Task> newTasks = new List<Task>();\n    for (Opportunity opp : Trigger.new) {\n        if (!tasksByOpp.containsKey(opp.Id)) {\n            newTasks.add(new Task(Subject = \'Follow up\', WhatId = opp.Id));\n        }\n    }\n    if (!newTasks.isEmpty()) insert newTasks; // 1 DML\n}\n```',
      },
      {
        type: 'tip',
        title: 'The Golden Rule of Bulkification',
        text: '**Never put SOQL queries or DML statements inside a for loop.** This is the single most common cause of governor limit errors. The pattern is always: (1) collect IDs in a loop, (2) query/update outside the loop, (3) use a Map to look up results back inside the loop. If you see `[SELECT ...` or `insert`/`update`/`delete` indented inside a `for (`, that is a bug.',
      },
    ],
    quiz: [
      {
        id: 'gov-q1',
        question: 'Why does Salesforce enforce governor limits?',
        options: [
          'To make Apex harder to learn',
          'To prevent one tenant\'s code from consuming all shared infrastructure resources',
          'To limit the number of records you can store',
          'To enforce coding best practices',
        ],
        correct: 1,
        explanation: 'Salesforce is multi-tenant. Without limits, one customer\'s runaway code could starve all other customers on the same server. Governor limits are enforced per transaction to ensure fair resource sharing.',
      },
      {
        id: 'gov-q2',
        question: 'How many SOQL queries can a synchronous transaction execute?',
        options: ['50', '100', '200', '1000'],
        correct: 1,
        explanation: 'Synchronous Apex transactions are limited to 100 SOQL queries. Asynchronous contexts (batch, future, queueable) have a higher limit of 200.',
      },
      {
        id: 'gov-q3',
        question: 'What is the most effective fix for SOQL-in-a-loop?',
        options: [
          'Use System.debug to track queries',
          'Use a try/catch to catch LimitException',
          'Collect IDs in the loop, then run one SOQL query outside using WHERE Id IN :idSet',
          'Split the loop into batches of 10',
        ],
        correct: 2,
        explanation: 'Collect all needed IDs in a loop first, then issue one SOQL query with WHERE Id IN :idSet. Use a Map to look up results back inside the loop. This turns N queries into 1.',
      },
      {
        id: 'gov-q4',
        question: 'What Apex class lets you check how many SOQL queries you have used so far?',
        options: ['System.limits()', 'Limits.getQueries()', 'Governor.getSOQLCount()', 'Debug.limits()'],
        correct: 1,
        explanation: 'The Limits class provides methods like getQueries(), getDmlStatements(), getCpuTime(), and getHeapSize() to monitor governor limit consumption at runtime.',
      },
    ],
    challengeId: 'challenge-apex-governor-limits',
  },
  // ─── LWC CONTINUED ───────────────────────────────────────────────────────────
  {
    id: 'lwc-data-binding',
    moduleId: 'lwc',
    order: 2,
    title: 'Templates and Data Binding',
    subtitle: 'Connect your component data to the UI',
    description: 'Learn how to bind component data to templates, handle user events, and update the UI reactively in Lightning Web Components.',
    duration: 30,
    difficulty: 'intermediate',
    tags: ['lwc', 'data-binding', 'events', 'reactivity', '@track'],
    prerequisites: ['lwc-intro'],
    learningObjectives: [
      'Bind properties to the template using {property} syntax',
      'Handle DOM events with onclick and oninput handlers',
      'Use getters to compute derived values for the template',
      'Understand when @track is needed vs not needed',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Data binding and event handling are the core of interactive Salesforce UIs:\n\n• **Search/filter components** — user types in a search box, results update instantly\n• **Calculators and forms** — pricing calculators where totals update as the user changes quantities\n• **Multi-step wizards** — progress bar tracks the current step as the user navigates\n• **Toggle panels** — expand/collapse sections on record pages',
      },
      {
        type: 'explanation',
        title: 'One-Way Data Binding',
        text: 'LWC uses one-way data binding: data flows from JS to template via `{property}` expressions. When the JS property changes, the template automatically re-renders.\n\nPrimitive properties (String, Number, Boolean) are automatically reactive — when you assign a new value, the template updates. For object and array properties, you may need @track (covered below).',
      },
      {
        type: 'example',
        title: 'Handling Events',
        text: 'Wire user interactions to JS methods using event handlers:',
        code: `// counter.js
import { LightningElement } from 'lwc';

export default class Counter extends LightningElement {
    count = 0;
    message = '';

    handleIncrement() {
        this.count++;
        this.message = this.count > 10 ? 'Getting high!' : '';
    }

    handleDecrement() {
        if (this.count > 0) this.count--;
    }

    handleReset() {
        this.count = 0;
        this.message = '';
    }
}

<!-- counter.html -->
<template>
    <lightning-card title="Counter">
        <div class="slds-p-around_medium slds-text-align_center">
            <p class="slds-text-heading_large">{count}</p>
            <template if:true={message}>
                <p class="slds-text-color_error">{message}</p>
            </template>
            <div class="slds-m-top_small">
                <lightning-button label="−" onclick={handleDecrement}></lightning-button>
                <lightning-button label="+" onclick={handleIncrement}
                    variant="brand"></lightning-button>
                <lightning-button label="Reset" onclick={handleReset}></lightning-button>
            </div>
        </div>
    </lightning-card>
</template>`,
        output: '// Counter updates reactively — template re-renders on each button click',
      },
      {
        type: 'example',
        title: 'Input Binding and Getters',
        text: 'Capture user input and compute derived values with getters:',
        code: `// priceCalculator.js
import { LightningElement } from 'lwc';

export default class PriceCalculator extends LightningElement {
    unitPrice = 0;
    quantity = 1;
    discountPct = 0;

    handlePriceChange(event) {
        this.unitPrice = parseFloat(event.target.value) || 0;
    }

    handleQuantityChange(event) {
        this.quantity = parseInt(event.target.value) || 1;
    }

    handleDiscountChange(event) {
        this.discountPct = parseFloat(event.target.value) || 0;
    }

    // Getters compute derived values — no need to store them separately
    get subtotal() {
        return (this.unitPrice * this.quantity).toFixed(2);
    }

    get discount() {
        return (this.unitPrice * this.quantity * this.discountPct / 100).toFixed(2);
    }

    get total() {
        return (this.unitPrice * this.quantity * (1 - this.discountPct / 100)).toFixed(2);
    }
}

<!-- priceCalculator.html -->
<template>
    <lightning-card title="Price Calculator">
        <div class="slds-p-around_medium">
            <lightning-input label="Unit Price" type="number"
                value={unitPrice} onchange={handlePriceChange}></lightning-input>
            <lightning-input label="Quantity" type="number"
                value={quantity} onchange={handleQuantityChange}></lightning-input>
            <lightning-input label="Discount %" type="number"
                value={discountPct} onchange={handleDiscountChange}></lightning-input>
            <div class="slds-m-top_medium">
                <p>Subtotal: \${subtotal}</p>
                <p>Discount: -\${discount}</p>
                <p><strong>Total: \${total}</strong></p>
            </div>
        </div>
    </lightning-card>
</template>`,
        output: '// Total updates automatically as user changes inputs',
      },
      {
        type: 'note',
        title: '@track vs No Decorator',
        text: 'In modern LWC, **primitive properties** (string, number, boolean) are reactive by default — just assign a new value and the template updates. **@track** is only needed when you mutate the INTERNAL contents of an object or array (e.g., `this.items.push(x)`). If you replace the whole object/array (`this.items = [...this.items, x]`), no @track is needed.',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'This component should show a greeting when the user types a name. What is wrong?\n\n```js\nimport { LightningElement } from \'lwc\';\nexport default class Greeter extends LightningElement {\n    name = \'\';\n    get greeting() {\n        return \'Hello, \' + name + \'!\';\n    }\n    handleChange(event) {\n        this.name = event.target.value;\n    }\n}\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'The getter references `name` without `this.`. In a JavaScript class, properties must be accessed via `this.propertyName`. Without `this.`, JavaScript looks for a local variable named `name` (which refers to the `window.name` global) rather than the class property.\n\nFixed:\n```js\nget greeting() {\n    return \'Hello, \' + this.name + \'!\';\n}\n```\n\nAlways use `this.` to access class properties and methods inside a LightningElement class.',
      },
      {
        type: 'tip',
        title: 'Other Approaches for State Management',
        text: 'For simple local state, properties + getters work well. For complex shared state across components, consider: **LWC pubsub** (custom events bubbled up and fired through a message channel), **Lightning Message Service** (cross-DOM communication), or **@wire** to Apex (server-driven state). Start simple and reach for heavier tools only when needed.',
      },
    ],
    quiz: [
      {
        id: 'db-q1',
        question: 'How do you get the current value from a lightning-input in an event handler?',
        options: ['event.value', 'event.target.value', 'event.detail.value', 'this.inputValue'],
        correct: 1,
        explanation: 'For standard DOM events (like change on a native input), use event.target.value. For Lightning Base Components that fire custom events, use event.detail.value.',
      },
      {
        id: 'db-q2',
        question: 'What is a getter in LWC used for?',
        options: [
          'To fetch data from Apex',
          'To compute a value from existing properties without storing it separately',
          'To set a property from outside the component',
          'To subscribe to a wire adapter',
        ],
        correct: 1,
        explanation: 'A getter is a computed property. It recalculates every time it is accessed and the template re-renders. Use it for derived values like totals, formatted strings, and conditional flags.',
      },
      {
        id: 'db-q3',
        question: 'What is wrong with this event handler: handleClick() { count++; }',
        options: [
          'Nothing — it is correct',
          'Missing this. — should be this.count++',
          'Count cannot be incremented in an event handler',
          'The method name must start with "on"',
        ],
        correct: 1,
        explanation: 'Class properties must be accessed with this. inside class methods. Without this., JavaScript looks for a local variable named count which does not exist, leaving the property unchanged.',
      },
      {
        id: 'db-q4',
        question: 'You have an array property items and you call this.items.push(newItem) in a method. The template does not update. What should you do?',
        options: [
          'Add @track to the items property',
          'Replace the array: this.items = [...this.items, newItem]',
          'Both A or B would fix it',
          'Arrays cannot be used in LWC templates',
        ],
        correct: 2,
        explanation: 'Either adding @track to items or replacing the array reference triggers reactivity. Without @track, LWC does not detect mutations inside an array. Replacing the array always works because it is a new reference.',
      },
    ],
    challengeId: 'challenge-lwc-data-binding',
  },
  // ─── INTEGRATIONS ────────────────────────────────────────────────────────────
  {
    id: 'apex-callouts',
    moduleId: 'integrations',
    order: 1,
    title: 'HTTP Callouts in Apex',
    subtitle: 'Connect Salesforce to external REST APIs',
    description: 'Learn how to make HTTP requests from Apex to external systems, parse JSON responses, and follow Salesforce callout best practices.',
    duration: 35,
    difficulty: 'intermediate',
    tags: ['apex', 'callouts', 'http', 'rest', 'json', 'integration'],
    prerequisites: ['apex-classes', 'apex-maps'],
    learningObjectives: [
      'Make GET and POST HTTP requests using HttpRequest and HttpResponse',
      'Parse JSON responses into Apex maps and typed wrapper classes',
      'Understand Named Credentials and Remote Site Settings',
      'Know when to use @future(callout=true) for callouts from triggers',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'HTTP callouts integrate Salesforce with the external world:\n\n• **ERP sync** — after an Opportunity closes, call an SAP or NetSuite API to create an order\n• **Address validation** — when a Contact is saved, call a postal service API to verify and standardize the mailing address\n• **Shipping tracking** — query a FedEx/UPS REST API to update a custom field with the latest shipment status\n• **Credit checks** — before a large deal closes, call a credit bureau API to verify the customer\'s credit score',
      },
      {
        type: 'explanation',
        title: 'The Callout Classes',
        text: 'Apex provides three classes for HTTP callouts:\n\n• **HttpRequest** — configure the method (GET/POST), endpoint URL, headers, and body\n• **HttpResponse** — holds the response status code, body, and headers\n• **Http** — the executor; call `new Http().send(request)` to make the actual call',
      },
      {
        type: 'example',
        title: 'Making a GET Request',
        text: 'Retrieve data from an external REST API:',
        code: `public class WeatherService {

    public static Map<String, Object> getCurrentWeather(String city) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://api.weather.example.com/v1/current?city=' +
            EncodingUtil.urlEncode(city, 'UTF-8'));
        req.setMethod('GET');
        req.setHeader('Accept', 'application/json');
        req.setHeader('Authorization', 'Bearer MY_API_KEY');
        req.setTimeout(10000); // 10 seconds

        HttpResponse res = new Http().send(req);

        if (res.getStatusCode() == 200) {
            // Parse JSON response into a Map
            Map<String, Object> data = (Map<String, Object>)
                JSON.deserializeUntyped(res.getBody());
            return data;
        } else {
            throw new CalloutException(
                'API error: ' + res.getStatusCode() + ' ' + res.getStatus()
            );
        }
    }
}

// Usage:
Map<String, Object> weather = WeatherService.getCurrentWeather('San Francisco');
System.debug('Temperature: ' + weather.get('temperature'));`,
        output: 'Temperature: 68',
      },
      {
        type: 'example',
        title: 'Making a POST Request with a JSON Body',
        text: 'Send data to an external API:',
        code: `public class OrderService {

    public class OrderRequest {
        public String customerId;
        public String productCode;
        public Integer quantity;
    }

    public static String createOrder(String customerId, String productCode, Integer qty) {
        OrderRequest orderReq = new OrderRequest();
        orderReq.customerId = customerId;
        orderReq.productCode = productCode;
        orderReq.quantity = qty;

        HttpRequest req = new HttpRequest();
        // Named Credentials — keep secrets out of code
        req.setEndpoint('callout:ERP_System/api/orders');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        req.setBody(JSON.serialize(orderReq));

        HttpResponse res = new Http().send(req);

        if (res.getStatusCode() == 201) {
            Map<String, Object> result = (Map<String, Object>)
                JSON.deserializeUntyped(res.getBody());
            return (String) result.get('orderId');
        }
        throw new CalloutException('Order creation failed: ' + res.getStatusCode());
    }
}`,
        output: '// Returns the new order ID from the external system',
      },
      {
        type: 'explanation',
        title: 'Named Credentials and Remote Site Settings',
        text: '**Remote Site Settings** — before making a callout to any external URL, you must register it in Setup > Security > Remote Site Settings. Without it, Salesforce blocks the request.\n\n**Named Credentials** (preferred) — store the endpoint URL and authentication credentials in Setup. Reference them as `callout:CredentialName/path`. This keeps secrets out of Apex code, works across sandboxes, and is easier to manage.',
      },
      {
        type: 'warning',
        title: 'Callouts from Triggers Require @future',
        text: 'You CANNOT make a callout synchronously from a trigger because the trigger runs inside a database transaction (and callouts are I/O operations that cannot be rolled back). To call an external API from a trigger, use a @future method with callout=true:\n\n```apex\n@future(callout=true)\npublic static void sendToExternalSystem(String payload) {\n    // HTTP callout goes here\n}\n```',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'This callout method has a bug. What is it?\n\n```apex\npublic static String fetchUser(String userId) {\n    HttpRequest req = new HttpRequest();\n    req.setEndpoint(\'https://api.example.com/users/\' + userId);\n    req.setMethod(\'GET\');\n    HttpResponse res = new Http().send(req);\n    Map<String, Object> data = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());\n    return (String) data.get(\'name\');\n}\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'The code parses the response body regardless of the HTTP status code. If the API returns a 404 or 500 error, the response body will be an error message (not valid JSON), causing a JSON parse exception. Always check the status code first:\n\n```apex\nHttpResponse res = new Http().send(req);\nif (res.getStatusCode() == 200) {\n    Map<String, Object> data = (Map<String, Object>)\n        JSON.deserializeUntyped(res.getBody());\n    return (String) data.get(\'name\');\n}\nthrow new CalloutException(\'Failed: \' + res.getStatusCode());\n```',
      },
      {
        type: 'tip',
        title: 'Other Approaches',
        text: '**JSON.deserialize(body, TypeName.class)** is cleaner than deserializeUntyped when you know the response schema — it maps JSON directly to a typed Apex class. Use deserializeUntyped only for dynamic or unknown schemas. For large integrations, consider **Platform Events** or **MuleSoft** for async, decoupled architectures.',
      },
    ],
    quiz: [
      {
        id: 'call-q1',
        question: 'Which class actually sends the HTTP request and returns a response?',
        options: ['HttpRequest', 'HttpResponse', 'Http', 'Callout'],
        correct: 2,
        explanation: 'The Http class sends the request: HttpResponse res = new Http().send(request). HttpRequest configures what to send; HttpResponse holds what came back.',
      },
      {
        id: 'call-q2',
        question: 'You want to make an API call when a Contact trigger fires. What must you do?',
        options: [
          'Call Http.send() directly in the trigger',
          'Use @future(callout=true) and call it from the trigger',
          'Use a Scheduled Apex class',
          'Callouts from triggers are not possible at all',
        ],
        correct: 1,
        explanation: 'Triggers run in a DML transaction and cannot make synchronous callouts. Use @future(callout=true) to defer the callout to after the transaction commits.',
      },
      {
        id: 'call-q3',
        question: 'What is the benefit of using Named Credentials over hardcoding an endpoint URL?',
        options: [
          'Named Credentials are faster',
          'Named Credentials store credentials securely and avoid secrets in Apex code',
          'Named Credentials bypass Remote Site Settings',
          'Named Credentials allow SOQL inside callouts',
        ],
        correct: 1,
        explanation: 'Named Credentials keep endpoint URLs and authentication tokens in Setup rather than in code. This improves security, simplifies sandbox/production migration, and avoids exposing secrets in source control.',
      },
      {
        id: 'call-q4',
        question: 'What HTTP status code typically indicates a successfully created resource (POST)?',
        options: ['200 OK', '201 Created', '204 No Content', '400 Bad Request'],
        correct: 1,
        explanation: '201 Created is the standard response for a successful POST that creates a new resource. 200 OK is for successful GETs/PUTs. Always check the specific status code rather than just checking != 400.',
      },
    ],
    challengeId: 'challenge-apex-callouts',
  },
  // ─── TRIGGERS ───────────────────────────────────────────────────────────────
  {
    id: 'apex-triggers-handler',
    moduleId: 'triggers',
    order: 3,
    title: 'The Trigger Handler Pattern',
    subtitle: 'Write maintainable, testable trigger code',
    description: 'Learn the trigger handler pattern — the standard Salesforce architecture that keeps trigger files thin and business logic in testable handler classes.',
    duration: 35,
    difficulty: 'intermediate',
    tags: ['apex', 'triggers', 'design-patterns', 'handler', 'best-practices'],
    prerequisites: ['apex-triggers-context'],
    learningObjectives: [
      'Explain why logic should not live directly in trigger files',
      'Create a handler class that separates trigger logic from the trigger body',
      'Route trigger events to the correct handler methods',
      'Write unit tests that test the handler class directly',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'As Salesforce orgs grow, trigger files balloon with hundreds of lines of business logic, become impossible to test cleanly, and break when multiple developers edit the same file. The trigger handler pattern is used in virtually every professional Salesforce org:\n\n• **Enterprise ISV packages** — Salesforce-recommended architecture for packaged apps\n• **Large orgs** — prevents merge conflicts when multiple developers work on the same object\n• **CI/CD pipelines** — handler classes are testable in isolation, making automated testing reliable',
      },
      {
        type: 'explanation',
        title: 'The Problem with Fat Triggers',
        text: 'Putting business logic directly in trigger files causes problems:\n\n• Triggers cannot be called directly from test classes — you must do DML to exercise them\n• Large trigger files become hard to read and maintain\n• Multiple developers working on the same trigger causes merge conflicts\n• You cannot reuse logic from a trigger in other contexts (batch jobs, REST endpoints)\n\nThe solution: keep triggers as thin routing files and put all logic in a separate handler class.',
      },
      {
        type: 'example',
        title: 'The Handler Pattern in Practice',
        text: 'The trigger delegates to a handler class. The handler class contains all the actual business logic:',
        code: `// AccountTrigger.trigger — thin routing file only
trigger AccountTrigger on Account (
    before insert, before update, after insert, after update, before delete
) {
    AccountTriggerHandler handler = new AccountTriggerHandler(Trigger.new, Trigger.oldMap);

    if (Trigger.isBefore) {
        if (Trigger.isInsert) handler.beforeInsert();
        if (Trigger.isUpdate) handler.beforeUpdate();
        if (Trigger.isDelete) handler.beforeDelete();
    }
    if (Trigger.isAfter) {
        if (Trigger.isInsert) handler.afterInsert();
        if (Trigger.isUpdate) handler.afterUpdate();
    }
}`,
        output: '// Trigger is just a router — all logic lives in the handler class',
      },
      {
        type: 'example',
        title: 'The Handler Class',
        text: 'The handler class receives the trigger context data and exposes one method per event:',
        code: `public class AccountTriggerHandler {

    private List<Account> newRecords;
    private Map<Id, Account> oldMap;

    public AccountTriggerHandler(List<Account> newRecs, Map<Id, Account> oldMap) {
        this.newRecords = newRecs;
        this.oldMap = oldMap != null ? oldMap : new Map<Id, Account>();
    }

    public void beforeInsert() {
        for (Account acc : newRecords) {
            if (String.isBlank(acc.BillingCountry)) {
                acc.BillingCountry = 'United States';
            }
        }
    }

    public void beforeUpdate() {
        for (Account acc : newRecords) {
            Account old = oldMap.get(acc.Id);
            if (acc.Rating != old.Rating) {
                acc.Description = 'Rating changed on ' + Date.today();
            }
        }
    }

    public void afterInsert() {
        // Create related records, send notifications, etc.
        List<Task> tasks = new List<Task>();
        for (Account acc : newRecords) {
            tasks.add(new Task(Subject = 'Follow up', WhatId = acc.Id));
        }
        if (!tasks.isEmpty()) insert tasks;
    }

    public void beforeDelete() { /* cleanup logic */ }
    public void afterUpdate() { /* post-update logic */ }
}`,
        output: '// Handler class is independently testable and reusable',
      },
      {
        type: 'example',
        title: 'Testing the Handler Directly',
        text: 'The key benefit: you can test the handler class without going through the trigger:',
        code: `@isTest
private class AccountTriggerHandlerTest {

    @isTest
    static void testBeforeInsert_setsDefaultCountry() {
        List<Account> accounts = new List<Account>{
            new Account(Name = 'Test Corp'), // No BillingCountry
            new Account(Name = 'Other Inc', BillingCountry = 'Canada')
        };

        // Call handler directly — no DML needed to test this method!
        AccountTriggerHandler handler = new AccountTriggerHandler(accounts, null);
        handler.beforeInsert();

        System.assertEquals('United States', accounts[0].BillingCountry,
            'Should default to United States');
        System.assertEquals('Canada', accounts[1].BillingCountry,
            'Should not override existing value');
    }
}`,
        output: 'Test passes — handler logic verified without database interaction',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'What is wrong with this trigger handler instantiation?\n\n```apex\ntrigger ContactTrigger on Contact (after update) {\n    ContactTriggerHandler handler = new ContactTriggerHandler();\n    handler.afterUpdate(Trigger.new, Trigger.oldMap);\n}\n```\n\n```apex\npublic class ContactTriggerHandler {\n    public void afterUpdate(List<Contact> newRecs, Map<Id, Contact> oldMap) {\n        for (Contact c : Trigger.new) { // <-- look here\n            // ...\n        }\n    }\n}\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'The handler method receives `newRecs` as a parameter but then references `Trigger.new` directly inside the loop. `Trigger.new` is only valid inside a trigger context — when this method is called from a test class directly, `Trigger.new` is null and throws a NullPointerException.\n\nFixed version:\n```apex\npublic void afterUpdate(List<Contact> newRecs, Map<Id, Contact> oldMap) {\n    for (Contact c : newRecs) { // Use the parameter, not Trigger.new\n        // ...\n    }\n}\n```\n\nAlways use the passed-in parameters in handler methods, never reference Trigger.* directly.',
      },
      {
        type: 'tip',
        title: 'Other Approaches',
        text: '**Trigger Framework libraries** (like Kevin O\'Hara\'s TriggerFramework or fflib) take this pattern further with a base virtual class that provides built-in recursion prevention and automatic routing. For simple orgs, the manual handler pattern here is sufficient. For complex ISV packages, consider a full framework.',
      },
    ],
    quiz: [
      {
        id: 'hand-q1',
        question: 'What is the primary reason to use a trigger handler class instead of putting logic in the trigger body?',
        options: [
          'Handler classes execute faster than trigger bodies',
          'Handler classes can be tested independently without performing DML',
          'Triggers are limited to 100 lines of code',
          'Handler classes bypass governor limits',
        ],
        correct: 1,
        explanation: 'The core benefit of the handler pattern is testability. Handler methods can be called directly from test classes, making tests faster and more precise without needing database operations.',
      },
      {
        id: 'hand-q2',
        question: 'In the handler pattern, what should the trigger file contain?',
        options: [
          'All business logic',
          'Only routing — delegating to handler methods based on trigger event',
          'SOQL queries and DML statements',
          'The @isTest annotation',
        ],
        correct: 1,
        explanation: 'The trigger should be a thin router that instantiates the handler and calls the appropriate method based on Trigger.isBefore/isAfter and Trigger.isInsert/isUpdate/etc.',
      },
      {
        id: 'hand-q3',
        question: 'What is wrong with referencing Trigger.new directly inside a handler class method?',
        options: [
          'Nothing — it always works',
          'Trigger.new is null when the method is called from a test class directly',
          'Trigger.new is only available in after triggers',
          'Handler classes cannot access Trigger context',
        ],
        correct: 1,
        explanation: 'Trigger context variables like Trigger.new are only valid inside an actual trigger execution. If you call the handler method from a test class, Trigger.new is null, causing a NullPointerException.',
      },
    ],
    challengeId: 'challenge-triggers-handler',
  },
  // ─── LWC ─────────────────────────────────────────────────────────────────────
  {
    id: 'lwc-intro',
    moduleId: 'lwc',
    order: 1,
    title: 'Introduction to Lightning Web Components',
    subtitle: 'Build modern Salesforce UIs with web standards',
    description: 'Learn how Lightning Web Components work, how to structure a component, and how to render dynamic lists and conditional content.',
    duration: 35,
    difficulty: 'beginner',
    tags: ['lwc', 'components', 'html', 'javascript', 'web-standards'],
    prerequisites: ['apex-classes'],
    learningObjectives: [
      'Describe the three files that make up an LWC component',
      'Use the @api decorator to expose component properties',
      'Render lists with the for:each directive',
      'Show and hide content with the if:true directive',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Lightning Web Components power the Salesforce UI you use every day:\n\n• **Account detail pages** — the related lists and quick action panels are LWC components\n• **Custom record forms** — when standard layouts don\'t fit business needs, LWC builds bespoke UIs\n• **Embedded dashboards** — LWC components in Experience Cloud (community) sites surface data to external users\n• **Utility bar tools** — productivity components like quick case creation live in the Salesforce utility bar as LWC',
      },
      {
        type: 'explanation',
        title: 'What is a Lightning Web Component?',
        text: 'LWC is Salesforce\'s modern UI framework built on web standards (HTML, JavaScript ES6+, CSS). Every component is a folder containing three files:\n\n• **componentName.html** — the template (what renders on screen)\n• **componentName.js** — the controller (data and behavior)\n• **componentName.js-meta.xml** — the metadata (where the component can be used)\n\nLWC components are fast (compiled to native web components), testable with Jest, and can communicate with Apex.',
      },
      {
        type: 'example',
        title: 'Your First LWC Component',
        text: 'A greeting card component with a public property:',
        code: `<!-- greetingCard.html -->
<template>
    <lightning-card title="Welcome">
        <div class="slds-p-around_medium">
            <p>Hello, {name}!</p>
            <p>Your role: {role}</p>
        </div>
    </lightning-card>
</template>

// greetingCard.js
import { LightningElement, api } from 'lwc';

export default class GreetingCard extends LightningElement {
    @api name = 'Guest';    // Public — parent can set this
    @api role = 'User';     // Public — parent can set this

    get welcomeMessage() {
        return 'Welcome, ' + this.name + '!';
    }
}

// Usage in a parent component:
// <c-greeting-card name="Sarah" role="Administrator"></c-greeting-card>`,
        output: '// Renders: Hello, Sarah! / Your role: Administrator',
      },
      {
        type: 'example',
        title: 'Rendering Lists with for:each',
        text: 'The for:each directive renders a list of items. The key attribute is required for performance:',
        code: `<!-- contactList.html -->
<template>
    <lightning-card title="Contacts">
        <ul class="slds-p-around_medium">
            <template for:each={contacts} for:item="contact">
                <li key={contact.id}>
                    {contact.name} — {contact.email}
                </li>
            </template>
        </ul>
    </lightning-card>
</template>

// contactList.js
import { LightningElement } from 'lwc';

export default class ContactList extends LightningElement {
    contacts = [
        { id: '1', name: 'Alice Smith', email: 'alice@example.com' },
        { id: '2', name: 'Bob Jones',  email: 'bob@example.com' },
        { id: '3', name: 'Carol Lee',  email: 'carol@example.com' },
    ];
}`,
        output: '// Renders a list: Alice Smith — alice@example.com, etc.',
      },
      {
        type: 'example',
        title: 'Conditional Rendering with if:true',
        text: 'Show or hide sections based on a boolean property:',
        code: `<!-- statusBanner.html -->
<template>
    <template if:true={isLoading}>
        <lightning-spinner alternative-text="Loading..."></lightning-spinner>
    </template>

    <template if:false={isLoading}>
        <p>Data loaded! {recordCount} records found.</p>
    </template>

    <template if:true={hasError}>
        <p class="error">Error: {errorMessage}</p>
    </template>
</template>

// statusBanner.js
import { LightningElement, api } from 'lwc';

export default class StatusBanner extends LightningElement {
    @api isLoading = false;
    @api hasError = false;
    @api errorMessage = '';
    @api recordCount = 0;
}`,
        output: '// Shows spinner while loading, then shows record count',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'This LWC component is supposed to display a list of product names. What is wrong?\n\n```html\n<!-- productList.html -->\n<template>\n    <template for:each={products} for:item="product">\n        <li>{product.name}</li>\n    </template>\n</template>\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'The `<li>` element inside `for:each` is missing the required `key` attribute. Without `key`, LWC cannot efficiently update the DOM when the list changes — it throws a warning and may behave incorrectly.\n\nFixed version:\n```html\n<template for:each={products} for:item="product">\n    <li key={product.id}>{product.name}</li>\n</template>\n```\n\nThe `key` must be a unique, stable identifier — typically the record\'s Id. Never use the loop index as a key.',
      },
      {
        type: 'note',
        title: 'LWC vs Aura Components',
        text: 'LWC replaced the older Aura Component framework. LWC is faster (native web components), simpler (standard JS/HTML), and Salesforce\'s recommended approach for all new UI development. Aura components still work but no new features are being added. If you see `<aura:component>` syntax, that is the older framework.',
      },
    ],
    quiz: [
      {
        id: 'lwc-q1',
        question: 'Which decorator makes a property settable by a parent component?',
        options: ['@track', '@wire', '@api', '@public'],
        correct: 2,
        explanation: '@api exposes a property as a public attribute. Parent components can pass values to it via HTML attribute syntax.',
      },
      {
        id: 'lwc-q2',
        question: 'What is required on each element inside a for:each template directive?',
        options: [
          'A class attribute',
          'A key attribute with a unique value',
          'An id attribute',
          'A data-index attribute',
        ],
        correct: 1,
        explanation: 'Every element directly inside for:each must have a key={uniqueValue} attribute. This allows the LWC engine to efficiently update the DOM. Use the record\'s Id or a unique field.',
      },
      {
        id: 'lwc-q3',
        question: 'Which directive conditionally renders an element when a property is false?',
        options: ['if:true', 'if:false', 'if:not', 'show:false'],
        correct: 1,
        explanation: 'if:false renders the element when the bound property is falsy. if:true renders when the property is truthy.',
      },
      {
        id: 'lwc-q4',
        question: 'What is wrong with this template: <template for:each={items}><li>{item.name}</li></template>?',
        options: [
          'Nothing — it is correct',
          'Missing for:item directive to name the loop variable',
          'Should use ng-for instead of for:each',
          'Lists cannot be rendered in LWC',
        ],
        correct: 1,
        explanation: 'for:each requires a matching for:item="variableName" directive to define the name of the current item in the loop. Without it, {item.name} is undefined.',
      },
    ],
    challengeId: 'challenge-lwc-intro',
  },
  {
    id: 'apex-triggers-intro',
    moduleId: 'triggers',
    order: 1,
    title: 'Introduction to Apex Triggers',
    subtitle: 'Automate Salesforce with event-driven code',
    description: 'Learn how Apex triggers let you run custom logic automatically when records are created, updated, or deleted in Salesforce.',
    duration: 30,
    difficulty: 'intermediate',
    tags: ['apex', 'triggers', 'automation', 'events'],
    prerequisites: ['apex-dml'],
    learningObjectives: [
      'Explain what an Apex trigger is and when it fires',
      'Distinguish between before and after trigger events',
      'Write a trigger that modifies records before they are saved',
      'Understand why one trigger per object is a best practice',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Triggers solve real Salesforce automation needs:\n\n• **Lead auto-assignment** — when a new Lead is inserted, automatically set the OwnerId based on the lead\'s region before it hits the database\n• **Opportunity field defaults** — when a new Opportunity is created, default the CloseDate to 30 days from today\n• **Cascade updates** — when an Account\'s rating changes to "Hot", update all its open Opportunities to "High Priority"\n\nTriggers run inside the same database transaction, so they can modify records before they are committed.',
      },
      {
        type: 'explanation',
        title: 'What is an Apex Trigger?',
        text: 'An Apex trigger is code that executes automatically before or after specific database events on a Salesforce object. Triggers are attached to a single sObject and fire when records of that type are inserted, updated, deleted, or undeleted.\n\nThere are two timing contexts:\n\n• **before triggers** — run before the record is saved to the database. Use these to modify field values on the records being saved (no extra DML needed).\n• **after triggers** — run after the record is saved and has an Id. Use these to update related records or perform work that needs the new record\'s Id.',
      },
      {
        type: 'example',
        title: 'Trigger Syntax',
        text: 'The trigger keyword defines the trigger, its object, and which events it handles:',
        code: `trigger AccountTrigger on Account (before insert, before update, after insert, after update) {
    // Trigger.new — list of records being processed
    // Trigger.old — list of records before the change (update/delete only)

    if (Trigger.isBefore && Trigger.isInsert) {
        // Set defaults before the record is saved
        for (Account acc : Trigger.new) {
            if (acc.Rating == null) {
                acc.Rating = 'Warm';
            }
            if (String.isBlank(acc.BillingCountry)) {
                acc.BillingCountry = 'United States';
            }
        }
    }

    if (Trigger.isAfter && Trigger.isInsert) {
        // Work with newly saved records (they now have Ids)
        List<Task> welcomeTasks = new List<Task>();
        for (Account acc : Trigger.new) {
            welcomeTasks.add(new Task(
                Subject = 'Welcome call',
                WhatId = acc.Id,
                ActivityDate = Date.today().addDays(3)
            ));
        }
        insert welcomeTasks;
    }
}`,
        output: '// Runs automatically when Account records are inserted or updated',
      },
      {
        type: 'explanation',
        title: 'Trigger Events Reference',
        text: 'You can combine any of these events in one trigger:\n\n• **before insert** — before new records are saved\n• **before update** — before existing records are updated\n• **before delete** — before records are deleted\n• **after insert** — after new records are saved (Ids available)\n• **after update** — after existing records are updated\n• **after delete** — after records are deleted (use Trigger.old)\n• **after undelete** — after records are restored from the recycle bin',
      },
      {
        type: 'warning',
        title: 'One Trigger Per Object',
        text: 'Salesforce allows multiple triggers on the same object, but the execution order is not guaranteed. Always create exactly ONE trigger per object and use if/else blocks or a handler class to route logic. Multiple triggers on the same object lead to unpredictable behavior.',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'The developer wants to set a default Description on new Contacts before they are saved. What is wrong with this code?\n\n```apex\ntrigger ContactTrigger on Contact (after insert) {\n    for (Contact c : Trigger.new) {\n        if (String.isBlank(c.Description)) {\n            c.Description = \'New contact\';\n            update c;\n        }\n    }\n}\n```\n\nLook carefully at the trigger event and what is happening inside the loop.',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'There are two bugs:\n\n1. **Wrong event** — `after insert` runs after the record is already saved. To set a field value without an extra DML call, use `before insert`. In a before trigger, assignments to `Trigger.new` records are automatically saved.\n\n2. **DML inside a loop** — `update c` inside a for loop will fire one DML per record, hitting the 150 DML limit fast.\n\nFixed version:\n\n```apex\ntrigger ContactTrigger on Contact (before insert) {\n    for (Contact c : Trigger.new) {\n        if (String.isBlank(c.Description)) {\n            c.Description = \'New contact\';\n            // No update needed — before trigger saves automatically\n        }\n    }\n}\n```',
      },
      {
        type: 'tip',
        title: 'When to Use Which Event',
        text: 'Use **before triggers** when you want to modify the record being saved — it\'s free (no extra DML). Use **after triggers** when you need the record\'s Id, or when you need to create/update other related records. Never update Trigger.new records in an after trigger — that causes recursion.',
      },
    ],
    quiz: [
      {
        id: 'trig-q1',
        question: 'You want to automatically set a default value on a field when a new record is created. Which trigger event should you use?',
        options: ['after insert', 'before insert', 'after update', 'before delete'],
        correct: 1,
        explanation: 'Use "before insert" to modify field values before they are saved. In a before trigger, assignments to Trigger.new are automatically persisted — no extra DML needed.',
      },
      {
        id: 'trig-q2',
        question: 'What does Trigger.new contain?',
        options: [
          'The records as they were before the change',
          'The list of records currently being processed',
          'Only the fields that changed',
          'The IDs of records that will be inserted next',
        ],
        correct: 1,
        explanation: 'Trigger.new is a List<sObject> containing the new versions of the records being processed. For inserts it contains the new records; for updates it contains the updated versions.',
      },
      {
        id: 'trig-q3',
        question: 'Which statement about before triggers is TRUE?',
        options: [
          'You cannot perform SOQL queries in a before trigger',
          'Records in Trigger.new already have Ids in a before insert trigger',
          'You can assign values to fields on Trigger.new records without calling update',
          'Before triggers run after the record is committed to the database',
        ],
        correct: 2,
        explanation: 'In a before trigger, any field assignments on Trigger.new records are automatically included when the record is saved — no explicit DML call required.',
      },
      {
        id: 'trig-q4',
        question: 'What is wrong with calling "update c" inside a for loop over Trigger.new in a before insert trigger?',
        options: [
          'Nothing — it is the correct pattern',
          'It causes a NullPointerException because records have no Id yet',
          'It fires unnecessary DML statements and can hit the 150 DML limit',
          'update is not allowed in triggers',
        ],
        correct: 2,
        explanation: 'DML inside a loop is a governor-limit violation waiting to happen. In a before trigger, modify Trigger.new records directly — changes are saved automatically with no extra DML.',
      },
    ],
    challengeId: 'challenge-triggers-intro',
  },
  {
    id: 'apex-triggers-context',
    moduleId: 'triggers',
    order: 2,
    title: 'Trigger Context Variables',
    subtitle: 'Access and control triggered record data',
    description: 'Master the trigger context variables — Trigger.new, Trigger.old, Trigger.newMap, and the boolean flags — to write precise, conditional trigger logic.',
    duration: 25,
    difficulty: 'intermediate',
    tags: ['apex', 'triggers', 'context', 'Trigger.new', 'Trigger.old'],
    prerequisites: ['apex-triggers-intro'],
    learningObjectives: [
      'Use Trigger.new and Trigger.old to access record data',
      'Use Trigger.newMap and Trigger.oldMap for fast ID-based lookup',
      'Detect field changes by comparing old and new values',
      'Use Trigger.isInsert, Trigger.isUpdate, and Trigger.isDelete flags',
    ],
    content: [
      {
        type: 'explanation',
        title: 'Real-World Business Context',
        text: 'Trigger context variables power real automation:\n\n• **Stage change notifications** — detect when an Opportunity StageName changes to "Closed Won" and send a Chatter post\n• **Prevent field overwrites** — block users from lowering an Opportunity Amount below its previous value\n• **Conditional logic by operation** — only run expensive logic on updates (not inserts) to save governor limit usage',
      },
      {
        type: 'explanation',
        title: 'The Context Variable Reference',
        text: 'Salesforce exposes these variables inside every trigger:\n\n• **Trigger.new** — List of new record versions (insert, update, undelete)\n• **Trigger.old** — List of old record versions (update, delete)\n• **Trigger.newMap** — Map<Id, sObject> of new records (not available on before insert)\n• **Trigger.oldMap** — Map<Id, sObject> of old records (update, delete)\n• **Trigger.isInsert / isUpdate / isDelete / isUndelete** — boolean flags\n• **Trigger.isBefore / isAfter** — timing flags\n• **Trigger.size** — number of records in this batch',
      },
      {
        type: 'example',
        title: 'Detecting Field Changes',
        text: 'Compare Trigger.old and Trigger.new to run logic only when a specific field changes:',
        code: `trigger OpportunityTrigger on Opportunity (before update, after update) {

    if (Trigger.isBefore && Trigger.isUpdate) {
        for (Opportunity opp : Trigger.new) {
            Opportunity oldOpp = Trigger.oldMap.get(opp.Id);

            // Only run if StageName actually changed
            if (opp.StageName != oldOpp.StageName) {
                // Auto-set CloseDate when moving to Negotiation
                if (opp.StageName == 'Negotiation/Review' && opp.CloseDate == null) {
                    opp.CloseDate = Date.today().addDays(14);
                }

                // Prevent downgrading Amount
                if (opp.Amount < oldOpp.Amount) {
                    opp.addError('Amount cannot be reduced once set.');
                }
            }
        }
    }
}`,
        output: '// Automatically manages CloseDate and prevents amount reduction',
      },
      {
        type: 'example',
        title: 'Using newMap for Relationship Lookups',
        text: 'Trigger.newMap lets you look up a specific record by ID, which is essential when processing related records:',
        code: `trigger ContactTrigger on Contact (after update) {

    // Collect IDs of contacts whose AccountId changed
    Set<Id> changedAccountIds = new Set<Id>();

    for (Contact c : Trigger.new) {
        Contact old = Trigger.oldMap.get(c.Id);
        if (c.AccountId != old.AccountId && c.AccountId != null) {
            changedAccountIds.add(c.AccountId);
        }
    }

    if (changedAccountIds.isEmpty()) return;

    // Query accounts once — NOT inside a loop
    Map<Id, Account> accountMap = new Map<Id, Account>(
        [SELECT Id, Name, Industry FROM Account WHERE Id IN :changedAccountIds]
    );

    // Now use newMap to match contacts to their new account
    for (Contact c : Trigger.new) {
        if (accountMap.containsKey(c.AccountId)) {
            Account acct = accountMap.get(c.AccountId);
            System.debug(c.LastName + ' moved to ' + acct.Name);
        }
    }
}`,
        output: '// Efficiently processes contacts that changed accounts',
      },
      {
        type: 'exercise',
        title: 'Spot the Bug',
        text: 'This trigger is supposed to log a debug message only when an Account\'s Industry changes. What is wrong?\n\n```apex\ntrigger AccountTrigger on Account (before update) {\n    for (Account acc : Trigger.new) {\n        if (acc.Industry != acc.Industry) {\n            System.debug(\'Industry changed: \' + acc.Industry);\n        }\n    }\n}\n```',
      },
      {
        type: 'explanation',
        title: 'Bug Explanation & Fix',
        text: 'The condition `acc.Industry != acc.Industry` compares a value to itself — it is always false. The developer meant to compare the new value to the OLD value.\n\nFixed version:\n\n```apex\ntrigger AccountTrigger on Account (before update) {\n    for (Account acc : Trigger.new) {\n        Account old = Trigger.oldMap.get(acc.Id);\n        if (acc.Industry != old.Industry) {\n            System.debug(\'Industry changed from \' + old.Industry + \' to \' + acc.Industry);\n        }\n    }\n}\n```\n\nAlways use `Trigger.oldMap.get(record.Id)` to access the previous values.',
      },
      {
        type: 'note',
        title: 'When Trigger.old Is Not Available',
        text: 'Trigger.old and Trigger.oldMap are only populated for update and delete operations — they are null on insert. Always guard with `if (Trigger.isUpdate)` before accessing them, or you will get a NullPointerException.',
      },
    ],
    quiz: [
      {
        id: 'ctx-q1',
        question: 'Which context variable gives you a Map<Id, sObject> of records BEFORE the change?',
        options: ['Trigger.new', 'Trigger.oldMap', 'Trigger.newMap', 'Trigger.old'],
        correct: 1,
        explanation: 'Trigger.oldMap is a Map<Id, sObject> keyed by record ID containing the pre-change versions. It is available on update and delete triggers.',
      },
      {
        id: 'ctx-q2',
        question: 'You need to run extra logic only when the Account Rating field changes from "Cold" to "Hot". Which approach is correct?',
        options: [
          'if (acc.Rating == "Hot")',
          'if (acc.Rating != Trigger.oldMap.get(acc.Id).Rating)',
          'if (Trigger.new.Rating != Trigger.old.Rating)',
          'if (Trigger.isUpdate && acc.Rating == "Hot")',
        ],
        correct: 1,
        explanation: 'Compare the new record\'s field to the old record from Trigger.oldMap. This detects any change to Rating. Option D only checks the new value, not whether it actually changed.',
      },
      {
        id: 'ctx-q3',
        question: 'On a before insert trigger, which context variable is NOT available?',
        options: ['Trigger.new', 'Trigger.isInsert', 'Trigger.oldMap', 'Trigger.size'],
        correct: 2,
        explanation: 'Trigger.oldMap (and Trigger.old) are only available for update and delete operations. On insert there are no "old" values.',
      },
      {
        id: 'ctx-q4',
        question: 'What does acc.addError("message") do in a before trigger?',
        options: [
          'Logs a message to the debug log',
          'Prevents the record from being saved and shows the message to the user',
          'Throws a DmlException',
          'Creates an error log record',
        ],
        correct: 1,
        explanation: 'addError() attaches a validation error to the record and prevents the DML operation from completing. The error message is shown to the user.',
      },
    ],
    challengeId: 'challenge-triggers-context',
  },
];

export const lessonsByModule = lessons.reduce<Record<string, Lesson[]>>((acc, lesson) => {
  if (!acc[lesson.moduleId]) acc[lesson.moduleId] = [];
  acc[lesson.moduleId].push(lesson);
  return acc;
}, {});

export const getLessonById = (id: string): Lesson | undefined =>
  lessons.find(l => l.id === id);
