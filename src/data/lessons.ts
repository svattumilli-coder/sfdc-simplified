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
    order: 1,
    title: 'SOQL Fundamentals',
    subtitle: 'Query Salesforce data like a pro',
    description: 'Learn Salesforce Object Query Language (SOQL) to retrieve records from the Salesforce database with precision and efficiency.',
    duration: 35,
    difficulty: 'beginner',
    tags: ['soql', 'database', 'queries'],
    prerequisites: ['apex-variables'],
    learningObjectives: [
      'Write basic SELECT...FROM queries',
      'Filter records with WHERE clauses',
      'Sort results with ORDER BY',
      'Understand governor limits',
    ],
    content: [
      {
        type: 'explanation',
        title: 'What is SOQL?',
        text: 'SOQL (Salesforce Object Query Language) is similar to SQL but designed specifically for Salesforce data. Instead of querying database tables, you query Salesforce objects like Account, Contact, and Opportunity.\n\nKey difference: SOQL is read-only. You cannot UPDATE or DELETE with SOQL — those operations use DML.',
      },
      {
        type: 'example',
        title: 'Basic SELECT Queries',
        text: 'The fundamental structure: SELECT fields FROM object',
        code: `// Always use LIMIT in development
List<Account> accounts = [SELECT Id, Name, Industry, AnnualRevenue
                           FROM Account
                           LIMIT 10];

// Get specific records with WHERE
List<Account> techAccounts = [SELECT Id, Name, AnnualRevenue
                               FROM Account
                               WHERE Industry = 'Technology'
                               LIMIT 50];

// Query a single record safely
Account[] results = [SELECT Id, Name FROM Account
                     WHERE Name = 'Acme Corp'
                     LIMIT 1];
if (!results.isEmpty()) {
    Account acme = results[0];
    System.debug('Found: ' + acme.Name);
}

System.debug('Tech accounts: ' + techAccounts.size());`,
        output: 'Found: Acme Corp\nTech accounts: 5',
      },
      {
        type: 'example',
        title: 'WHERE Clause Operators',
        text: 'Filter records using comparison and logical operators:',
        code: `// Equality and comparison
List<Opportunity> bigDeals = [SELECT Id, Name, Amount
    FROM Opportunity
    WHERE Amount > 100000
    AND StageName != 'Closed Lost'
    LIMIT 20];

// IN operator
List<Account> targets = [SELECT Id, Name
    FROM Account
    WHERE Industry IN ('Technology', 'Healthcare', 'Finance')
    LIMIT 50];

// LIKE operator — wildcard matching
List<Contact> smiths = [SELECT Id, FirstName, LastName
    FROM Contact
    WHERE LastName LIKE 'Sm%'
    LIMIT 20];

// Date literal
List<Case> recentCases = [SELECT Id, Subject
    FROM Case
    WHERE CreatedDate = LAST_N_DAYS:7
    AND Status = 'Open'
    LIMIT 100];`,
        output: '(Results vary by org)',
      },
      {
        type: 'example',
        title: 'ORDER BY and Aggregate Functions',
        text: 'Sort results and calculate summaries:',
        code: `// ORDER BY
List<Opportunity> sorted = [SELECT Id, Name, Amount
    FROM Opportunity
    WHERE StageName = 'Closed Won'
    ORDER BY Amount DESC
    LIMIT 5];

// Aggregate functions
AggregateResult[] results = [
    SELECT COUNT(Id) total,
           SUM(Amount) totalRevenue,
           AVG(Amount) avgDeal
    FROM Opportunity
    WHERE StageName = 'Closed Won'
];

Integer total = (Integer) results[0].get('total');
Decimal revenue = (Decimal) results[0].get('totalRevenue');
System.debug('Won deals: ' + total);
System.debug('Total revenue: $' + revenue);`,
        output: 'Won deals: 47\nTotal revenue: $2847500.00',
      },
      {
        type: 'warning',
        title: 'SOQL Governor Limits',
        text: 'Critical limits:\n• Max 100 SOQL queries per transaction\n• Max 50,000 records returned per transaction\n\nThe 100-query limit is the most commonly hit. Always put queries OUTSIDE of loops.',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'Which SOQL clause filters which records are returned?',
        options: ['ORDER BY', 'LIMIT', 'WHERE', 'HAVING'],
        correct: 2,
        explanation: 'WHERE filters which records are included in results.',
      },
      {
        id: 'q2',
        question: 'What does the LIKE operator use for wildcards?',
        options: ['* and ?', '% and _', '# and @', '* and _'],
        correct: 1,
        explanation: 'SOQL LIKE uses % to match any sequence of characters and _ to match exactly one character.',
      },
      {
        id: 'q3',
        question: 'What is the maximum number of SOQL queries allowed per Apex transaction?',
        options: ['10', '50', '100', '1000'],
        correct: 2,
        explanation: 'Salesforce allows a maximum of 100 SOQL queries per transaction.',
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
];

export const lessonsByModule = lessons.reduce<Record<string, Lesson[]>>((acc, lesson) => {
  if (!acc[lesson.moduleId]) acc[lesson.moduleId] = [];
  acc[lesson.moduleId].push(lesson);
  return acc;
}, {});

export const getLessonById = (id: string): Lesson | undefined =>
  lessons.find(l => l.id === id);
