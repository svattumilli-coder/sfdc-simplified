import type { Mission } from '../types';

export const missions: Mission[] = [
  {
    id: 'mission-lead-routing',
    title: 'Automate Lead Routing',
    company: 'Acme Corporation',
    description: 'Acme\'s sales team is manually assigning leads every morning — a process taking 2 hours daily. Build an Apex solution to automate it.',
    scenario: `Sarah, Acme's Sales Ops Manager, has given you the following requirements in a meeting:

"We get about 200 new leads every day. Right now someone manually reads each one and assigns it to a territory team. It takes forever. We need a system where leads are automatically routed based on:

1. Their Annual Revenue field
2. Their Industry
3. Whether they already have an open Opportunity

The territories are: SMB Team (< $100K), Mid-Market Team ($100K–$1M), Enterprise Team (> $1M)
Industry override: Any Healthcare lead goes to the Healthcare Specialist team regardless of revenue.
If a Lead converts from an existing Contact who already has an Open Opportunity, flag it as 'Existing Customer'."`,
    requirements: [
      'Create an Apex class LeadRouter with a static method routeLead(Lead l) that returns the team name as a String',
      'Route based on AnnualRevenue: < $100K → "SMB Team", $100K–$1M → "Mid-Market Team", > $1M → "Enterprise Team"',
      'Override routing: Any Industry = "Healthcare" lead → "Healthcare Specialist"',
      'Handle null AnnualRevenue gracefully (default to "SMB Team")',
      'Create a second method bulkRouteleads(List<Lead> leads) that returns a Map<ID, String>',
      'Write test assertions to validate each routing rule',
    ],
    difficulty: 'beginner',
    skills: ['Apex Classes', 'Conditionals', 'Maps', 'Null Safety'],
    estimatedHours: 2,
    starterCode: `public class LeadRouter {

    // Routes a single lead to a team name
    // Returns: 'SMB Team', 'Mid-Market Team', 'Enterprise Team', or 'Healthcare Specialist'
    public static String routeLead(Lead l) {
        // TODO: Implement routing logic
        return null;
    }

    // Routes multiple leads — returns Map of Lead ID -> Team Name
    public static Map<ID, String> bulkRouteLeads(List<Lead> leads) {
        // TODO: Implement bulk routing
        return null;
    }
}`,
    solution: `public class LeadRouter {

    public static String routeLead(Lead l) {
        // Healthcare override — applies regardless of revenue
        if (l.Industry == 'Healthcare') {
            return 'Healthcare Specialist';
        }

        // Revenue-based routing with null safety
        Decimal revenue = l.AnnualRevenue != null ? l.AnnualRevenue : 0;

        if (revenue > 1000000) {
            return 'Enterprise Team';
        } else if (revenue >= 100000) {
            return 'Mid-Market Team';
        } else {
            return 'SMB Team';
        }
    }

    public static Map<ID, String> bulkRouteLeads(List<Lead> leads) {
        Map<ID, String> routing = new Map<ID, String>();
        for (Lead l : leads) {
            routing.put(l.Id, routeLead(l));
        }
        return routing;
    }
}`,
    hints: [
      'Start with the Healthcare override — it should be the first if-check',
      'Use a Decimal variable with null safety: `Decimal revenue = l.AnnualRevenue != null ? l.AnnualRevenue : 0;`',
      'Chain if/else if/else for the three revenue tiers',
      'For bulkRouteLeads, loop over the list and call routeLead() for each — don\'t duplicate the logic',
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Defines class LeadRouter',
        pattern: 'public\\s+class\\s+LeadRouter',
        errorMessage: 'Your class must be named exactly `LeadRouter`.',
        exampleFix: "public class LeadRouter {",
      },
      {
        id: 'tc2',
        description: 'Defines routeLead method with correct signature',
        pattern: 'public\\s+static\\s+String\\s+routeLead\\s*\\(',
        errorMessage: 'You need a `public static String routeLead(Lead l)` method.',
        exampleFix: "public static String routeLead(Lead l) {",
      },
      {
        id: 'tc3',
        description: 'Handles Healthcare override',
        pattern: "Industry\\s*==\\s*'Healthcare'",
        errorMessage: "Your code must check `l.Industry == 'Healthcare'` and return 'Healthcare Specialist'.",
        exampleFix: "if (l.Industry == 'Healthcare') {\n    return 'Healthcare Specialist';\n}",
      },
      {
        id: 'tc4',
        description: 'Handles null AnnualRevenue',
        pattern: 'AnnualRevenue\\s*!=\\s*null|AnnualRevenue\\s*==\\s*null',
        errorMessage: 'You must handle the case where AnnualRevenue is null.',
        exampleFix: "Decimal revenue = l.AnnualRevenue != null ? l.AnnualRevenue : 0;",
      },
      {
        id: 'tc5',
        description: 'Routes by revenue tiers',
        pattern: '1000000|100000',
        errorMessage: 'Your routing logic should use the revenue thresholds $100,000 and $1,000,000.',
        exampleFix: "if (revenue > 1000000) {\n    return 'Enterprise Team';\n} else if (revenue >= 100000) {\n    return 'Mid-Market Team';\n}",
      },
      {
        id: 'tc6',
        description: 'Defines bulkRouteLeads method',
        pattern: 'public\\s+static\\s+Map.*bulkRouteLeads\\s*\\(',
        errorMessage: 'You need a `public static Map<ID, String> bulkRouteLeads(List<Lead> leads)` method.',
        exampleFix: "public static Map<ID, String> bulkRouteLeads(List<Lead> leads) {",
      },
    ],
    scenarios: [
      {
        id: 's1',
        label: 'Healthcare override',
        inputDisplay: "l = { Industry: 'Healthcare', AnnualRevenue: 500000 }",
        inputs: { l: { Industry: 'Healthcare', AnnualRevenue: 500000, Id: '001' } },
        expectedOutput: ['Healthcare Specialist'],
        expectedReturn: 'Healthcare Specialist',
        methodCall: 'LeadRouter.routeLead(l)',
      },
      {
        id: 's2',
        label: 'Enterprise (> $1M)',
        inputDisplay: "l = { Industry: 'Technology', AnnualRevenue: 1500000 }",
        inputs: { l: { Industry: 'Technology', AnnualRevenue: 1500000, Id: '002' } },
        expectedOutput: ['Enterprise Team'],
        expectedReturn: 'Enterprise Team',
        methodCall: 'LeadRouter.routeLead(l)',
      },
      {
        id: 's3',
        label: 'Mid-Market ($100K–$1M)',
        inputDisplay: "l = { Industry: 'Finance', AnnualRevenue: 500000 }",
        inputs: { l: { Industry: 'Finance', AnnualRevenue: 500000, Id: '003' } },
        expectedOutput: ['Mid-Market Team'],
        expectedReturn: 'Mid-Market Team',
        methodCall: 'LeadRouter.routeLead(l)',
      },
      {
        id: 's4',
        label: 'SMB (< $100K)',
        inputDisplay: "l = { Industry: 'Retail', AnnualRevenue: 50000 }",
        inputs: { l: { Industry: 'Retail', AnnualRevenue: 50000, Id: '004' } },
        expectedOutput: ['SMB Team'],
        expectedReturn: 'SMB Team',
        methodCall: 'LeadRouter.routeLead(l)',
      },
      {
        id: 's5',
        label: 'Null revenue → SMB',
        inputDisplay: "l = { Industry: 'Other', AnnualRevenue: null }",
        inputs: { l: { Industry: 'Other', AnnualRevenue: null, Id: '005' } },
        expectedOutput: ['SMB Team'],
        expectedReturn: 'SMB Team',
        methodCall: 'LeadRouter.routeLead(l)',
      },
    ],
  },
  {
    id: 'mission-account-health',
    title: 'Account Health Score',
    company: 'Globex Technologies',
    description: 'Build a health scoring system that evaluates accounts based on engagement, revenue, and support history.',
    scenario: `The Customer Success team at Globex wants a health score for every account so they can proactively reach out to at-risk customers before they churn.

The scoring model they designed:
- Base score starts at 100
- Subtract 20 points if no closed won opportunities in the last 90 days
- Subtract 15 points for each open High or Critical priority case (max deduction: 45 points)
- Add 10 points if AnnualRevenue > $1M
- Add 5 points if account was created more than 2 years ago (loyal customer bonus)
- Minimum score is 0, maximum is 100

Health tiers:
- 80-100: Green (Healthy)
- 60-79: Yellow (Monitor)
- 0-59: Red (At Risk)`,
    requirements: [
      'Create class AccountHealthCalculator with method calculateScore(Account acct, List<Opportunity> opps, List<Case> cases) returning Integer',
      'Implement all five scoring rules from the scenario',
      'Create method getHealthTier(Integer score) returning "Green", "Yellow", or "Red"',
      'Ensure score never goes below 0 or above 100',
      'Create method generateReport(Account acct, Integer score) returning a human-readable String summary',
    ],
    difficulty: 'beginner',
    skills: ['Apex Classes', 'Conditionals', 'Lists', 'Date Operations'],
    estimatedHours: 2,
    starterCode: `public class AccountHealthCalculator {

    public static Integer calculateScore(
        Account acct,
        List<Opportunity> opps,
        List<Case> cases
    ) {
        Integer score = 100;
        // TODO: Apply each scoring rule
        return score;
    }

    public static String getHealthTier(Integer score) {
        // TODO: Return 'Green', 'Yellow', or 'Red'
        return null;
    }

    public static String generateReport(Account acct, Integer score) {
        // TODO: Return formatted summary
        return null;
    }
}`,
    solution: `public class AccountHealthCalculator {

    public static Integer calculateScore(
        Account acct,
        List<Opportunity> opps,
        List<Case> cases
    ) {
        Integer score = 100;
        Date ninetyDaysAgo = Date.today().addDays(-90);

        // Check for recent closed won opportunities
        Boolean hasRecentWin = false;
        for (Opportunity opp : opps) {
            if (opp.StageName == 'Closed Won' && opp.CloseDate >= ninetyDaysAgo) {
                hasRecentWin = true;
                break;
            }
        }
        if (!hasRecentWin) score -= 20;

        // Deduct for high/critical cases (max 45 points)
        Integer caseDeduction = 0;
        for (Case c : cases) {
            if (c.Status == 'Open' && (c.Priority == 'High' || c.Priority == 'Critical')) {
                caseDeduction += 15;
            }
        }
        score -= Math.min(caseDeduction, 45);

        // Revenue bonus
        if (acct.AnnualRevenue != null && acct.AnnualRevenue > 1000000) {
            score += 10;
        }

        // Loyalty bonus
        if (acct.CreatedDate != null) {
            Date twoYearsAgo = Date.today().addYears(-2);
            if (acct.CreatedDate.date() <= twoYearsAgo) {
                score += 5;
            }
        }

        // Clamp between 0 and 100
        return Math.max(0, Math.min(100, score));
    }

    public static String getHealthTier(Integer score) {
        if (score >= 80) return 'Green';
        if (score >= 60) return 'Yellow';
        return 'Red';
    }

    public static String generateReport(Account acct, Integer score) {
        String tier = getHealthTier(score);
        return 'Account: ' + acct.Name
            + ' | Score: ' + score
            + ' | Health: ' + tier
            + ' | Action: ' + (tier == 'Red' ? 'Immediate outreach required' :
                               tier == 'Yellow' ? 'Schedule check-in call' : 'Continue nurturing');
    }
}`,
    hints: [
      'Start with `Integer score = 100;` and subtract/add from there',
      'For the 90-day check: `Date ninetyDaysAgo = Date.today().addDays(-90);`',
      'Loop through cases and count High/Critical open ones, then cap with `Math.min(caseDeduction, 45)`',
      'Use `Math.max(0, Math.min(100, score))` to clamp the final score',
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Defines class AccountHealthCalculator',
        pattern: 'public\\s+class\\s+AccountHealthCalculator',
        errorMessage: 'Your class must be named exactly `AccountHealthCalculator`.',
        exampleFix: "public class AccountHealthCalculator {",
      },
      {
        id: 'tc2',
        description: 'Defines calculateScore method',
        pattern: 'public\\s+static\\s+Integer\\s+calculateScore\\s*\\(',
        errorMessage: 'You need a `public static Integer calculateScore(...)` method.',
        exampleFix: "public static Integer calculateScore(Account acct, List<Opportunity> opps, List<Case> cases) {",
      },
      {
        id: 'tc3',
        description: 'Checks for 90-day lookback on opportunities',
        pattern: 'addDays\\s*\\(\\s*-90\\s*\\)',
        errorMessage: 'You need `Date.today().addDays(-90)` to get the 90-day lookback date.',
        exampleFix: "Date ninetyDaysAgo = Date.today().addDays(-90);\nif (opp.CloseDate >= ninetyDaysAgo) { ... }",
      },
      {
        id: 'tc4',
        description: 'Caps case deduction at 45 points',
        pattern: 'Math\\.min\\s*\\(.*45|45.*Math\\.min',
        errorMessage: 'The case deduction must be capped at 45 points using Math.min().',
        exampleFix: "score -= Math.min(caseDeduction, 45);",
      },
      {
        id: 'tc5',
        description: 'Clamps final score between 0 and 100',
        pattern: 'Math\\.max|Math\\.min',
        errorMessage: 'Clamp the final score to [0, 100] using Math.max() and Math.min().',
        exampleFix: "return Math.max(0, Math.min(100, score));",
      },
      {
        id: 'tc6',
        description: 'Defines getHealthTier method',
        pattern: 'public\\s+static\\s+String\\s+getHealthTier\\s*\\(',
        errorMessage: 'You need a `public static String getHealthTier(Integer score)` method.',
        exampleFix: "public static String getHealthTier(Integer score) {\n    if (score >= 80) return 'Green';\n    if (score >= 60) return 'Yellow';\n    return 'Red';\n}",
      },
    ],
    scenarios: [
      {
        id: 's1',
        label: 'Green tier (score = 85)',
        inputDisplay: 'score = 85',
        inputs: { score: 85 },
        expectedOutput: ['Green'],
        expectedReturn: 'Green',
        methodCall: 'AccountHealthCalculator.getHealthTier(score)',
      },
      {
        id: 's2',
        label: 'Yellow tier (score = 70)',
        inputDisplay: 'score = 70',
        inputs: { score: 70 },
        expectedOutput: ['Yellow'],
        expectedReturn: 'Yellow',
        methodCall: 'AccountHealthCalculator.getHealthTier(score)',
      },
      {
        id: 's3',
        label: 'Red tier (score = 45)',
        inputDisplay: 'score = 45',
        inputs: { score: 45 },
        expectedOutput: ['Red'],
        expectedReturn: 'Red',
        methodCall: 'AccountHealthCalculator.getHealthTier(score)',
      },
      {
        id: 's4',
        label: 'Green boundary (score = 80)',
        inputDisplay: 'score = 80',
        inputs: { score: 80 },
        expectedOutput: ['Green'],
        expectedReturn: 'Green',
        methodCall: 'AccountHealthCalculator.getHealthTier(score)',
      },
      {
        id: 's5',
        label: 'Yellow boundary (score = 60)',
        inputDisplay: 'score = 60',
        inputs: { score: 60 },
        expectedOutput: ['Yellow'],
        expectedReturn: 'Yellow',
        methodCall: 'AccountHealthCalculator.getHealthTier(score)',
      },
    ],
  },
  {
    id: 'mission-data-import',
    title: 'CSV Data Import Processor',
    company: 'DataSync Inc',
    description: 'Build a class that processes a CSV-formatted string of contact data, validates it, and prepares records for import.',
    scenario: `DataSync receives daily CSV feeds from their marketing platform with new lead data. The current process has a consultant manually cleaning data in Excel before importing. They want an Apex class to automate this.

Sample CSV input:
"FirstName,LastName,Email,Phone,Company
John,Smith,john.smith@example.com,(555) 123-4567,Acme Corp
JANE,DOE,JANE.DOE@EXAMPLE.COM,5551234568,GLOBEX
Bob,,bob@,123,Initech"

Rules:
- Skip header row
- FirstName and LastName are required — skip rows missing either
- Email must contain @ — flag invalid emails but still process the row
- Phone: strip all non-numeric characters
- Normalize names to Title Case (first letter uppercase, rest lowercase)
- Company is optional — default to 'Unknown' if missing`,
    requirements: [
      'Create class CSVContactProcessor with method processCSV(String csvData) returning a ProcessResult inner class',
      'ProcessResult should contain: List<Contact> validContacts, List<String> errors, Integer processedRows, Integer skippedRows',
      'Implement all validation and normalization rules',
      'Phone normalization: remove all non-digit characters with replaceAll()',
      'Name normalization: firstName[0].toUpperCase() + firstName.substring(1).toLowerCase()',
    ],
    difficulty: 'intermediate',
    skills: ['String Methods', 'Lists', 'Inner Classes', 'Loops', 'Validation'],
    estimatedHours: 3,
  },
  {
    id: 'mission-opportunity-rollup',
    title: 'Territory Revenue Rollup',
    company: 'SalesPro Analytics',
    description: 'Build a reporting utility that rolls up opportunity revenue by territory, stage, and quarter.',
    scenario: `SalesPro's VP of Sales wants a weekly report showing pipeline health by territory. They currently export to Excel and build pivot tables manually — a 3-hour weekly task.

The report should show:
- For each territory (custom field Territory__c on Opportunity)
- Total pipeline value by stage
- Quarter-over-quarter comparison
- Win rate (Closed Won / Total)

You'll write the Apex class that queries and aggregates this data.`,
    requirements: [
      'Create class TerritoryRollup with method getReport() returning Map<String, TerritoryMetrics>',
      'TerritoryMetrics inner class: String territory, Decimal totalPipeline, Decimal closedWon, Decimal winRate, Map<String, Decimal> byStage',
      'Query all Opportunities with Amount != null',
      'Group by Territory__c field',
      'Calculate win rate: closedWon / (closedWon + closedLost)',
      'Handle territories with no wins or losses gracefully',
    ],
    difficulty: 'intermediate',
    skills: ['SOQL', 'Maps', 'Collections', 'Aggregate Functions', 'Inner Classes'],
    estimatedHours: 3,
  },

  // ── BEGINNER MISSIONS 3–10 ─────────────────────────────────────────────────

  {
    id: 'mission-case-escalation',
    title: 'Auto-Escalate Support Cases',
    company: 'TechSupport Co.',
    description: 'Build a service that automatically escalates high-priority cases that have been open too long.',
    scenario: `The support manager at TechSupport Co. pulled you into a Slack call:

"Our team keeps missing SLA windows because nobody is watching case age. I need a service that runs every hour and flags cases for escalation. The rules are simple:

- High priority cases open more than 4 hours → escalate
- Medium priority cases open more than 24 hours → escalate

Escalation means setting Status to 'Escalated' and Priority to 'High'. Return only the cases that were actually changed so we know what to audit."`,
    requirements: [
      "Create class CaseEscalationService with method checkAndEscalate(List<Case> cases) returning List<Case>",
      "Check case age by comparing CreatedDate to DateTime.now()",
      "High priority threshold: more than 4 hours (use DateTime arithmetic)",
      "Medium priority threshold: more than 24 hours",
      "Set Status = 'Escalated' and Priority = 'High' on matching cases",
      "Return only the cases that were modified; skip null CreatedDate gracefully",
    ],
    difficulty: 'beginner',
    skills: ['Apex Classes', 'DateTime', 'Lists', 'Conditionals'],
    estimatedHours: 2,
    starterCode: `public class CaseEscalationService {

    // Returns only the cases that were escalated
    public static List<Case> checkAndEscalate(List<Case> cases) {
        List<Case> escalated = new List<Case>();
        DateTime now = DateTime.now();

        for (Case c : cases) {
            // TODO: skip cases with null CreatedDate

            // TODO: calculate hours open

            // TODO: check High priority > 4 hours

            // TODO: check Medium priority > 24 hours

            // TODO: if matched, set Status and Priority, add to escalated list
        }

        return escalated;
    }
}`,
    solution: `public class CaseEscalationService {

    public static List<Case> checkAndEscalate(List<Case> cases) {
        List<Case> escalated = new List<Case>();
        DateTime now = DateTime.now();

        for (Case c : cases) {
            if (c.CreatedDate == null) continue;

            Long msOpen = now.getTime() - c.CreatedDate.getTime();
            Decimal hoursOpen = msOpen / 3600000.0;

            Boolean shouldEscalate = false;
            if (c.Priority == 'High' && hoursOpen > 4) {
                shouldEscalate = true;
            } else if (c.Priority == 'Medium' && hoursOpen > 24) {
                shouldEscalate = true;
            }

            if (shouldEscalate) {
                c.Status = 'Escalated';
                c.Priority = 'High';
                escalated.add(c);
            }
        }

        return escalated;
    }
}`,
    hints: [
      "Use DateTime.now().getTime() to get milliseconds since epoch. Subtract CreatedDate.getTime() to find elapsed milliseconds.",
      "Convert milliseconds to hours: divide by 3600000 (60 * 60 * 1000).",
      "Check priority with c.Priority == 'High' — Apex strings are compared with ==.",
      "Collect matching cases in a separate List<Case> and return it at the end.",
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Defines class CaseEscalationService',
        pattern: 'public\\s+class\\s+CaseEscalationService',
        errorMessage: "Class must be named exactly `CaseEscalationService`.",
        exampleFix: "public class CaseEscalationService {",
      },
      {
        id: 'tc2',
        description: 'Defines checkAndEscalate method returning List<Case>',
        pattern: 'public\\s+static\\s+List<Case>\\s+checkAndEscalate\\s*\\(',
        errorMessage: "You need `public static List<Case> checkAndEscalate(List<Case> cases)`.",
        exampleFix: "public static List<Case> checkAndEscalate(List<Case> cases) {",
      },
      {
        id: 'tc3',
        description: 'Uses DateTime.now() to get current time',
        pattern: 'DateTime\\.now\\(\\)',
        errorMessage: "Use DateTime.now() to capture the current moment for comparison.",
        exampleFix: "DateTime now = DateTime.now();",
      },
      {
        id: 'tc4',
        description: "Sets Status to 'Escalated'",
        pattern: "Status\\s*=\\s*'Escalated'",
        errorMessage: "Set c.Status = 'Escalated' on matched cases.",
        exampleFix: "c.Status = 'Escalated';",
      },
      {
        id: 'tc5',
        description: "Sets Priority to 'High' on escalated cases",
        pattern: "Priority\\s*=\\s*'High'",
        errorMessage: "Set c.Priority = 'High' when escalating.",
        exampleFix: "c.Priority = 'High';",
      },
    ],
    scenarios: [
      {
        id: 's1', label: 'High priority (8h old)',
        inputDisplay: "1 High-priority case open 8 hours → should escalate",
        inputs: {},
        methodCall: `CaseEscalationService.checkAndEscalate([{Id:'001',Priority:'High',Status:'Open',CreatedDate:new Date(Date.now()-8*3600000)}]).length`,
        expectedReturn: 1,
        expectedOutput: ['1'],
      },
      {
        id: 's2', label: 'Medium priority (30h old)',
        inputDisplay: "1 Medium-priority case open 30 hours → should escalate",
        inputs: {},
        methodCall: `CaseEscalationService.checkAndEscalate([{Id:'002',Priority:'Medium',Status:'Open',CreatedDate:new Date(Date.now()-30*3600000)}]).length`,
        expectedReturn: 1,
        expectedOutput: ['1'],
      },
      {
        id: 's3', label: 'High priority (2h old)',
        inputDisplay: "1 High-priority case open only 2 hours → should NOT escalate",
        inputs: {},
        methodCall: `CaseEscalationService.checkAndEscalate([{Id:'003',Priority:'High',Status:'Open',CreatedDate:new Date(Date.now()-2*3600000)}]).length`,
        expectedReturn: 0,
        expectedOutput: ['0'],
      },
      {
        id: 's4', label: 'Low priority (48h)',
        inputDisplay: "1 Low-priority case open 48 hours → should NOT escalate",
        inputs: {},
        methodCall: `CaseEscalationService.checkAndEscalate([{Id:'004',Priority:'Low',Status:'Open',CreatedDate:new Date(Date.now()-48*3600000)}]).length`,
        expectedReturn: 0,
        expectedOutput: ['0'],
      },
      {
        id: 's5', label: 'Null CreatedDate',
        inputDisplay: "1 case with null CreatedDate → skipped (0 escalated)",
        inputs: {},
        methodCall: `CaseEscalationService.checkAndEscalate([{Id:'005',Priority:'High',Status:'Open',CreatedDate:null}]).length`,
        expectedReturn: 0,
        expectedOutput: ['0'],
      },
    ],
  },

  {
    id: 'mission-contact-dedup',
    title: 'Contact Deduplication Checker',
    company: 'CleanData Corp',
    description: 'Build a utility that identifies potential duplicate contacts by email or by name + account.',
    scenario: `CleanData's data steward sent you a ticket:

"Our reps keep creating duplicate contacts and it's trashing our reports. I need a utility class that takes a list of contacts and groups any potential duplicates together. Two contacts are duplicates if they share an email, OR if they have the same FirstName + LastName + AccountId.

Return a map where the key is a group identifier (the shared email, or 'firstName_lastName_accountId') and the value is the list of matching contacts. Only return groups with two or more contacts — single-contact groups aren't duplicates."`,
    requirements: [
      'Create class ContactDupChecker with method findDuplicates(List<Contact> contacts) returning Map<String, List<Contact>>',
      'Group contacts by email (case-insensitive) first; each unique email is a potential duplicate key',
      'Also group by FirstName + LastName + AccountId using key format: firstName_lastName_accountId',
      'Only include groups that have 2 or more contacts in the returned map',
      'Create method getSummary(Map<String, List<Contact>> dupes) returning a String like "3 duplicate groups found (7 contacts affected)"',
    ],
    difficulty: 'beginner',
    skills: ['Maps', 'Lists', 'String Methods', 'Loops'],
    estimatedHours: 2,
    starterCode: `public class ContactDupChecker {

    public static Map<String, List<Contact>> findDuplicates(List<Contact> contacts) {
        Map<String, List<Contact>> groups = new Map<String, List<Contact>>();

        for (Contact c : contacts) {
            // TODO: group by email (use toLowerCase for case-insensitivity)

            // TODO: group by name + accountId key
        }

        // TODO: filter out groups with only 1 contact
        Map<String, List<Contact>> dupes = new Map<String, List<Contact>>();

        return dupes;
    }

    public static String getSummary(Map<String, List<Contact>> dupes) {
        // TODO: count total contacts across all groups
        // TODO: return formatted summary string
        return null;
    }
}`,
    solution: `public class ContactDupChecker {

    public static Map<String, List<Contact>> findDuplicates(List<Contact> contacts) {
        Map<String, List<Contact>> groups = new Map<String, List<Contact>>();

        for (Contact c : contacts) {
            // Email grouping
            if (String.isNotBlank(c.Email)) {
                String emailKey = c.Email.toLowerCase();
                if (!groups.containsKey(emailKey)) {
                    groups.put(emailKey, new List<Contact>());
                }
                groups.get(emailKey).add(c);
            }

            // Name + account grouping
            if (String.isNotBlank(c.FirstName) && String.isNotBlank(c.LastName) && c.AccountId != null) {
                String nameKey = c.FirstName.toLowerCase() + '_' + c.LastName.toLowerCase() + '_' + c.AccountId;
                if (!groups.containsKey(nameKey)) {
                    groups.put(nameKey, new List<Contact>());
                }
                groups.get(nameKey).add(c);
            }
        }

        Map<String, List<Contact>> dupes = new Map<String, List<Contact>>();
        for (String key : groups.keySet()) {
            if (groups.get(key).size() >= 2) {
                dupes.put(key, groups.get(key));
            }
        }
        return dupes;
    }

    public static String getSummary(Map<String, List<Contact>> dupes) {
        Integer totalContacts = 0;
        for (List<Contact> group : dupes.values()) {
            totalContacts += group.size();
        }
        return dupes.size() + ' duplicate groups found (' + totalContacts + ' contacts affected)';
    }
}`,
    hints: [
      "Use a Map<String, List<Contact>> to accumulate contacts under each key. Check containsKey() before adding.",
      "For case-insensitive email matching, call c.Email.toLowerCase() before using it as a map key.",
      "Build the name key as: c.FirstName.toLowerCase() + '_' + c.LastName.toLowerCase() + '_' + c.AccountId",
      "After building groups, iterate keySet() and only copy entries where list.size() >= 2 into the dupes map.",
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Defines class ContactDupChecker',
        pattern: 'public\\s+class\\s+ContactDupChecker',
        errorMessage: "Class must be named exactly `ContactDupChecker`.",
        exampleFix: "public class ContactDupChecker {",
      },
      {
        id: 'tc2',
        description: 'findDuplicates returns Map<String, List<Contact>>',
        pattern: 'Map<String,\\s*List<Contact>>\\s+findDuplicates\\s*\\(',
        errorMessage: "Method must be `Map<String, List<Contact>> findDuplicates(List<Contact> contacts)`.",
        exampleFix: "public static Map<String, List<Contact>> findDuplicates(List<Contact> contacts) {",
      },
      {
        id: 'tc3',
        description: 'Uses toLowerCase() for case-insensitive email matching',
        pattern: '\\.toLowerCase\\(\\)',
        errorMessage: "Normalize email to lowercase with .toLowerCase() before using as a map key.",
        exampleFix: "String emailKey = c.Email.toLowerCase();",
      },
      {
        id: 'tc4',
        description: 'Filters groups to only those with 2+ contacts',
        pattern: '\\.size\\(\\)\\s*>=?\\s*2',
        errorMessage: "Only include groups with 2 or more contacts (size() >= 2).",
        exampleFix: "if (groups.get(key).size() >= 2) {\n    dupes.put(key, groups.get(key));\n}",
      },
      {
        id: 'tc5',
        description: 'Defines getSummary method',
        pattern: 'public\\s+static\\s+String\\s+getSummary\\s*\\(',
        errorMessage: "You need a `public static String getSummary(Map<String, List<Contact>> dupes)` method.",
        exampleFix: "public static String getSummary(Map<String, List<Contact>> dupes) {",
      },
    ],
    scenarios: [
      {
        id: 's1',
        label: 'Summary: 2 groups, 5 contacts',
        inputDisplay: "dupes = { 'email@x.com': [c1,c2,c3], 'john_doe_001': [c4,c5] }",
        inputs: { dupes: new Map([['email@x.com', [{Id:'1'},{Id:'2'},{Id:'3'}]], ['john_doe_001', [{Id:'4'},{Id:'5'}]]]) },
        expectedOutput: ['2 duplicate groups found (5 contacts affected)'],
        expectedReturn: '2 duplicate groups found (5 contacts affected)',
        methodCall: 'ContactDupChecker.getSummary(dupes)',
      },
      {
        id: 's2',
        label: 'Summary: 1 group, 2 contacts',
        inputDisplay: "dupes = { 'jane@x.com': [c1,c2] }",
        inputs: { dupes: new Map([['jane@x.com', [{Id:'1'},{Id:'2'}]]]) },
        expectedOutput: ['1 duplicate groups found (2 contacts affected)'],
        expectedReturn: '1 duplicate groups found (2 contacts affected)',
        methodCall: 'ContactDupChecker.getSummary(dupes)',
      },
      {
        id: 's3',
        label: 'Summary: empty map → 0 groups',
        inputDisplay: 'dupes = {}',
        inputs: { dupes: new Map() },
        expectedOutput: ['0 duplicate groups found (0 contacts affected)'],
        expectedReturn: '0 duplicate groups found (0 contacts affected)',
        methodCall: 'ContactDupChecker.getSummary(dupes)',
      },
    ],
  },

  {
    id: 'mission-opportunity-stage-validator',
    title: 'Opportunity Stage Gate Validator',
    company: 'SalesPipe Inc.',
    description: 'Build a validator that checks whether an opportunity meets all requirements before advancing to Proposal stage.',
    scenario: `SalesPipe's RevOps lead sent over a Confluence doc with the new stage gate rules:

"Before an opportunity can move to 'Proposal' stage, it must pass all of the following checks:
1. Close date must be in the future
2. Amount must be greater than zero
3. AccountId must be set
4. HasContactRole__c (custom boolean) must be true

If any check fails, the rep should see a clear error message explaining exactly what's missing. We also need a quick yes/no method they can call from a flow, and a utility to format all errors into a single string."`,
    requirements: [
      'Create class StageGateValidator with method validate(Opportunity opp) returning List<String> (empty list = valid)',
      'Check each rule separately and add a descriptive error string for each failure',
      'Create method isReadyForProposal(Opportunity opp) returning Boolean (calls validate and checks if list is empty)',
      'Create method formatErrors(List<String> errors) returning errors joined by "; "',
      'Handle null Amount and null CloseDate gracefully (treat as failing the check)',
    ],
    difficulty: 'beginner',
    skills: ['Apex Classes', 'Lists', 'Validation', 'Conditionals', 'Date Operations'],
    estimatedHours: 2,
    starterCode: `public class StageGateValidator {

    public static List<String> validate(Opportunity opp) {
        List<String> errors = new List<String>();

        // TODO: Check 1 — Close date must be in the future

        // TODO: Check 2 — Amount must be > 0

        // TODO: Check 3 — AccountId must be set

        // TODO: Check 4 — HasContactRole__c must be true

        return errors;
    }

    public static Boolean isReadyForProposal(Opportunity opp) {
        // TODO: Call validate() and return true only if no errors
        return false;
    }

    public static String formatErrors(List<String> errors) {
        // TODO: Join errors with '; ' separator
        return null;
    }
}`,
    solution: `public class StageGateValidator {

    public static List<String> validate(Opportunity opp) {
        List<String> errors = new List<String>();

        if (opp.CloseDate == null || opp.CloseDate <= Date.today()) {
            errors.add('Close date must be a future date');
        }

        if (opp.Amount == null || opp.Amount <= 0) {
            errors.add('Amount must be greater than zero');
        }

        if (opp.AccountId == null) {
            errors.add('Opportunity must be linked to an Account');
        }

        if (opp.HasContactRole__c != true) {
            errors.add('At least one Contact Role must be associated');
        }

        return errors;
    }

    public static Boolean isReadyForProposal(Opportunity opp) {
        return validate(opp).isEmpty();
    }

    public static String formatErrors(List<String> errors) {
        return String.join(errors, '; ');
    }
}`,
    hints: [
      "Build an empty List<String> errors at the start. Add a message for each failing check and return the list.",
      "For the date check: opp.CloseDate <= Date.today() means today or in the past — that's a failure.",
      "isReadyForProposal can be a one-liner: return validate(opp).isEmpty();",
      "String.join(errors, '; ') concatenates a list with a separator — no loop needed.",
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Defines class StageGateValidator',
        pattern: 'public\\s+class\\s+StageGateValidator',
        errorMessage: "Class must be named exactly `StageGateValidator`.",
        exampleFix: "public class StageGateValidator {",
      },
      {
        id: 'tc2',
        description: 'validate() returns List<String>',
        pattern: 'public\\s+static\\s+List<String>\\s+validate\\s*\\(',
        errorMessage: "You need `public static List<String> validate(Opportunity opp)`.",
        exampleFix: "public static List<String> validate(Opportunity opp) {",
      },
      {
        id: 'tc3',
        description: 'Checks CloseDate against Date.today()',
        pattern: 'Date\\.today\\(\\)',
        errorMessage: "Compare CloseDate to Date.today() to check if the date is in the future.",
        exampleFix: "if (opp.CloseDate == null || opp.CloseDate <= Date.today()) {\n    errors.add('Close date must be a future date');\n}",
      },
      {
        id: 'tc4',
        description: 'Defines isReadyForProposal returning Boolean',
        pattern: 'public\\s+static\\s+Boolean\\s+isReadyForProposal\\s*\\(',
        errorMessage: "You need `public static Boolean isReadyForProposal(Opportunity opp)`.",
        exampleFix: "public static Boolean isReadyForProposal(Opportunity opp) {\n    return validate(opp).isEmpty();\n}",
      },
      {
        id: 'tc5',
        description: 'Uses String.join() in formatErrors',
        pattern: 'String\\.join\\s*\\(',
        errorMessage: "Use String.join(errors, '; ') in formatErrors() to concatenate the list.",
        exampleFix: "public static String formatErrors(List<String> errors) {\n    return String.join(errors, '; ');\n}",
      },
    ],
    scenarios: [
      {
        id: 's1',
        label: 'Valid opp → ready for proposal',
        inputDisplay: "opp = { CloseDate: future, Amount: 50000, AccountId: '001', HasContactRole__c: true }",
        inputs: { opp: { CloseDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), Amount: 50000, AccountId: '001abc', HasContactRole__c: true } },
        expectedOutput: ['true'],
        expectedReturn: true,
        methodCall: 'StageGateValidator.isReadyForProposal(opp)',
      },
      {
        id: 's2',
        label: 'Missing AccountId → not ready',
        inputDisplay: "opp = { CloseDate: future, Amount: 50000, AccountId: null, HasContactRole__c: true }",
        inputs: { opp: { CloseDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), Amount: 50000, AccountId: null, HasContactRole__c: true } },
        expectedOutput: ['false'],
        expectedReturn: false,
        methodCall: 'StageGateValidator.isReadyForProposal(opp)',
      },
      {
        id: 's3',
        label: 'Zero amount → not ready',
        inputDisplay: "opp = { CloseDate: future, Amount: 0, AccountId: '001', HasContactRole__c: true }",
        inputs: { opp: { CloseDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), Amount: 0, AccountId: '001abc', HasContactRole__c: true } },
        expectedOutput: ['false'],
        expectedReturn: false,
        methodCall: 'StageGateValidator.isReadyForProposal(opp)',
      },
      {
        id: 's4',
        label: 'No contact role → not ready',
        inputDisplay: "opp = { CloseDate: future, Amount: 10000, AccountId: '001', HasContactRole__c: false }",
        inputs: { opp: { CloseDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), Amount: 10000, AccountId: '001abc', HasContactRole__c: false } },
        expectedOutput: ['false'],
        expectedReturn: false,
        methodCall: 'StageGateValidator.isReadyForProposal(opp)',
      },
    ],
  },

  {
    id: 'mission-xp-calculator',
    title: 'Employee XP & Level Calculator',
    company: 'GamifyHR',
    description: 'Build a gamification engine that calculates employee XP points, assigns levels, and tracks progress to the next tier.',
    scenario: `The engineering lead at GamifyHR walked you through their new employee engagement feature:

"We want to give every employee an XP score based on what they've accomplished. Here's the formula:
- Each completed task = 10 XP
- Each completed project = 50 XP
- Each positive review = 25 XP

Levels:
- 0–99 XP: Rookie
- 100–299 XP: Contributor
- 300–599 XP: Expert
- 600+ XP: Champion

We also need a progress bar percentage showing how far they are to the next level. If someone enters negative numbers, just treat them as zero."`,
    requirements: [
      'Create class EmployeeXPCalculator with method calculateXP(Integer tasks, Integer projects, Integer reviews) returning Integer',
      'Formula: tasks × 10 + projects × 50 + reviews × 25; treat negatives as 0',
      'Create method getLevel(Integer xp) returning the level name string',
      'Create method getProgressToNextLevel(Integer xp) returning Decimal (0.0 to 100.0 percentage within current tier)',
      'Champions at 600+ XP return 100.0 (already at max level)',
    ],
    difficulty: 'beginner',
    skills: ['Apex Classes', 'Arithmetic', 'Conditionals', 'Decimal Math'],
    estimatedHours: 1.5,
    starterCode: `public class EmployeeXPCalculator {

    public static Integer calculateXP(Integer tasks, Integer projects, Integer reviews) {
        // TODO: Treat negatives as 0
        // TODO: Return tasks*10 + projects*50 + reviews*25
        return 0;
    }

    public static String getLevel(Integer xp) {
        // Thresholds: 0=Rookie, 100=Contributor, 300=Expert, 600=Champion
        // TODO: Return level name based on xp
        return null;
    }

    public static Decimal getProgressToNextLevel(Integer xp) {
        // TODO: Return % progress within current tier (0.0 to 100.0)
        // Champion returns 100.0
        return 0.0;
    }
}`,
    solution: `public class EmployeeXPCalculator {

    public static Integer calculateXP(Integer tasks, Integer projects, Integer reviews) {
        Integer t = (tasks != null && tasks > 0) ? tasks : 0;
        Integer p = (projects != null && projects > 0) ? projects : 0;
        Integer r = (reviews != null && reviews > 0) ? reviews : 0;
        return t * 10 + p * 50 + r * 25;
    }

    public static String getLevel(Integer xp) {
        if (xp == null || xp < 0) xp = 0;
        if (xp >= 600) return 'Champion';
        if (xp >= 300) return 'Expert';
        if (xp >= 100) return 'Contributor';
        return 'Rookie';
    }

    public static Decimal getProgressToNextLevel(Integer xp) {
        if (xp == null || xp < 0) xp = 0;
        if (xp >= 600) return 100.0;
        if (xp >= 300) return ((xp - 300) / 300.0) * 100;
        if (xp >= 100) return ((xp - 100) / 200.0) * 100;
        return (xp / 100.0) * 100;
    }
}`,
    hints: [
      "Guard against negatives with a ternary: `Integer t = (tasks > 0) ? tasks : 0;`",
      "getLevel() checks from highest tier down: if xp >= 600 return 'Champion', else if xp >= 300 return 'Expert', etc.",
      "For getProgressToNextLevel, each tier has a range. For Contributor (100–299): progress = (xp - 100) / 200.0 * 100.",
      "Champion is the max level — return 100.0 when xp >= 600, no further progress to track.",
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Defines class EmployeeXPCalculator',
        pattern: 'public\\s+class\\s+EmployeeXPCalculator',
        errorMessage: "Class must be named exactly `EmployeeXPCalculator`.",
        exampleFix: "public class EmployeeXPCalculator {",
      },
      {
        id: 'tc2',
        description: 'calculateXP multiplies tasks by 10',
        pattern: 'tasks?\\s*\\*\\s*10|10\\s*\\*\\s*tasks?',
        errorMessage: "Multiply tasks by 10 in your XP formula.",
        exampleFix: "return t * 10 + p * 50 + r * 25;",
      },
      {
        id: 'tc3',
        description: 'calculateXP multiplies projects by 50',
        pattern: 'projects?\\s*\\*\\s*50|50\\s*\\*\\s*projects?',
        errorMessage: "Multiply projects by 50 in your XP formula.",
        exampleFix: "return t * 10 + p * 50 + r * 25;",
      },
      {
        id: 'tc4',
        description: 'getLevel uses 600 as Champion threshold',
        pattern: '>=\\s*600|600\\s*<=',
        errorMessage: "Check xp >= 600 to identify the Champion level.",
        exampleFix: "if (xp >= 600) return 'Champion';",
      },
      {
        id: 'tc5',
        description: 'getProgressToNextLevel returns Decimal',
        pattern: 'public\\s+static\\s+Decimal\\s+getProgressToNextLevel\\s*\\(',
        errorMessage: "You need `public static Decimal getProgressToNextLevel(Integer xp)`.",
        exampleFix: "public static Decimal getProgressToNextLevel(Integer xp) {",
      },
    ],
    scenarios: [
      {
        id: 's1',
        label: 'XP calc: 5 tasks, 2 projects, 1 review',
        inputDisplay: 'tasks=5, projects=2, reviews=1',
        inputs: { tasks: 5, projects: 2, reviews: 1 },
        expectedOutput: ['175'],
        expectedReturn: 175,
        methodCall: 'EmployeeXPCalculator.calculateXP(tasks, projects, reviews)',
      },
      {
        id: 's2',
        label: 'XP calc: negatives treated as 0',
        inputDisplay: 'tasks=-1, projects=0, reviews=2',
        inputs: { tasks: -1, projects: 0, reviews: 2 },
        expectedOutput: ['50'],
        expectedReturn: 50,
        methodCall: 'EmployeeXPCalculator.calculateXP(tasks, projects, reviews)',
      },
      {
        id: 's3',
        label: 'Level: Rookie (xp = 50)',
        inputDisplay: 'xp = 50',
        inputs: { xp: 50 },
        expectedOutput: ['Rookie'],
        expectedReturn: 'Rookie',
        methodCall: 'EmployeeXPCalculator.getLevel(xp)',
      },
      {
        id: 's4',
        label: 'Level: Contributor (xp = 150)',
        inputDisplay: 'xp = 150',
        inputs: { xp: 150 },
        expectedOutput: ['Contributor'],
        expectedReturn: 'Contributor',
        methodCall: 'EmployeeXPCalculator.getLevel(xp)',
      },
      {
        id: 's5',
        label: 'Level: Champion (xp = 700)',
        inputDisplay: 'xp = 700',
        inputs: { xp: 700 },
        expectedOutput: ['Champion'],
        expectedReturn: 'Champion',
        methodCall: 'EmployeeXPCalculator.getLevel(xp)',
      },
    ],
  },

  {
    id: 'mission-invoice-generator',
    title: 'Invoice Line Item Calculator',
    company: 'BillFast Ltd.',
    description: 'Build an invoice calculator with an inner class for line items and a method that generates a full invoice summary.',
    scenario: `BillFast's billing team sent over their spreadsheet logic to automate:

"Each invoice has line items. Every line item has a quantity, a unit price, and a discount percentage. The formula for a single line is:
  total = quantity × unitPrice × (1 - discount / 100)

We need a full invoice summary with three numbers:
- subtotal: sum of line totals before discount
- discountSaved: how much the customer saved from discounts
- grandTotal: sum of discounted line totals

Handle edge cases: zero quantity should be fine, negative discount should be treated as 0."`,
    requirements: [
      'Create class InvoiceCalculator with an inner class LineItem (public Decimal quantity, unitPrice, discountPct)',
      'Create method calculateLine(LineItem item) returning Decimal (discounted line total)',
      "Create method generateInvoice(List<LineItem> items) returning Map<String, Decimal> with keys 'subtotal', 'discountSaved', 'grandTotal'",
      'Treat negative discountPct as 0 (no discount)',
      'subtotal = sum of (quantity × unitPrice); discountSaved = subtotal - grandTotal',
    ],
    difficulty: 'beginner',
    skills: ['Inner Classes', 'Lists', 'Maps', 'Decimal Math', 'Loops'],
    estimatedHours: 2,
    starterCode: `public class InvoiceCalculator {

    public class LineItem {
        public Decimal quantity;
        public Decimal unitPrice;
        public Decimal discountPct;

        public LineItem(Decimal qty, Decimal price, Decimal disc) {
            this.quantity = qty;
            this.unitPrice = price;
            this.discountPct = disc;
        }
    }

    public static Decimal calculateLine(LineItem item) {
        // TODO: Apply discount formula: qty * price * (1 - disc/100)
        // TODO: Treat negative discount as 0
        return 0;
    }

    public static Map<String, Decimal> generateInvoice(List<LineItem> items) {
        Decimal subtotal = 0;
        Decimal grandTotal = 0;

        for (LineItem item : items) {
            // TODO: accumulate subtotal (pre-discount) and grandTotal (post-discount)
        }

        // TODO: calculate discountSaved and return map
        return new Map<String, Decimal>();
    }
}`,
    solution: `public class InvoiceCalculator {

    public class LineItem {
        public Decimal quantity;
        public Decimal unitPrice;
        public Decimal discountPct;

        public LineItem(Decimal qty, Decimal price, Decimal disc) {
            this.quantity = qty;
            this.unitPrice = price;
            this.discountPct = disc;
        }
    }

    public static Decimal calculateLine(LineItem item) {
        Decimal disc = (item.discountPct != null && item.discountPct > 0) ? item.discountPct : 0;
        return item.quantity * item.unitPrice * (1 - disc / 100);
    }

    public static Map<String, Decimal> generateInvoice(List<LineItem> items) {
        Decimal subtotal = 0;
        Decimal grandTotal = 0;

        for (LineItem item : items) {
            subtotal += item.quantity * item.unitPrice;
            grandTotal += calculateLine(item);
        }

        Decimal discountSaved = subtotal - grandTotal;

        return new Map<String, Decimal>{
            'subtotal' => subtotal,
            'discountSaved' => discountSaved,
            'grandTotal' => grandTotal
        };
    }
}`,
    hints: [
      "Inner classes in Apex are declared inside the outer class with `public class LineItem { ... }`.",
      "The discount formula: `quantity * unitPrice * (1 - discountPct / 100)`. Guard against negative discount first.",
      "subtotal accumulates quantity × unitPrice (pre-discount). grandTotal accumulates calculateLine() results (post-discount).",
      "discountSaved = subtotal - grandTotal. Put all three into the map using => syntax: `'subtotal' => subtotal`.",
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Defines inner class LineItem',
        pattern: 'public\\s+class\\s+LineItem',
        errorMessage: "You need an inner class `LineItem` inside `InvoiceCalculator`.",
        exampleFix: "public class LineItem {\n    public Decimal quantity;\n    public Decimal unitPrice;\n    public Decimal discountPct;\n}",
      },
      {
        id: 'tc2',
        description: 'calculateLine applies the discount formula',
        pattern: '1\\s*-\\s*disc|discountPct\\s*/\\s*100',
        errorMessage: "Apply the discount formula: quantity * unitPrice * (1 - discount/100).",
        exampleFix: "return item.quantity * item.unitPrice * (1 - disc / 100);",
      },
      {
        id: 'tc3',
        description: "generateInvoice returns a map with 'grandTotal' key",
        pattern: "'grandTotal'",
        errorMessage: "The returned map must include the key 'grandTotal'.",
        exampleFix: "return new Map<String, Decimal>{\n    'subtotal' => subtotal,\n    'grandTotal' => grandTotal,\n    'discountSaved' => discountSaved\n};",
      },
      {
        id: 'tc4',
        description: "Returns 'discountSaved' in the invoice map",
        pattern: "'discountSaved'",
        errorMessage: "The returned map must include the key 'discountSaved'.",
        exampleFix: "Decimal discountSaved = subtotal - grandTotal;\n// Add to map: 'discountSaved' => discountSaved",
      },
      {
        id: 'tc5',
        description: 'Handles negative discount gracefully',
        pattern: 'discountPct\\s*>\\s*0|disc\\s*>\\s*0',
        errorMessage: "Guard against negative discount by checking discountPct > 0 before applying it.",
        exampleFix: "Decimal disc = (item.discountPct != null && item.discountPct > 0) ? item.discountPct : 0;",
      },
    ],
    scenarios: [
      {
        id: 's1', label: 'Single line 10% off',
        inputDisplay: "qty=10, price=100, discount=10% → line total = 900",
        inputs: {},
        methodCall: `InvoiceCalculator.calculateLine({quantity:10,unitPrice:100,discountPct:10})`,
        expectedReturn: 900,
        expectedOutput: ['900'],
      },
      {
        id: 's2', label: 'Zero discount',
        inputDisplay: "qty=5, price=200, discount=0% → line total = 1000",
        inputs: {},
        methodCall: `InvoiceCalculator.calculateLine({quantity:5,unitPrice:200,discountPct:0})`,
        expectedReturn: 1000,
        expectedOutput: ['1000'],
      },
      {
        id: 's3', label: 'Negative discount treated as 0',
        inputDisplay: "qty=4, price=50, discount=-10% → treated as 0%, total = 200",
        inputs: {},
        methodCall: `InvoiceCalculator.calculateLine({quantity:4,unitPrice:50,discountPct:-10})`,
        expectedReturn: 200,
        expectedOutput: ['200'],
      },
      {
        id: 's4', label: 'generateInvoice grandTotal',
        inputDisplay: "2 items: [qty=10,price=100,disc=10%] + [qty=5,price=50,disc=0%] → grandTotal=1150",
        inputs: {},
        methodCall: `InvoiceCalculator.generateInvoice([{quantity:10,unitPrice:100,discountPct:10},{quantity:5,unitPrice:50,discountPct:0}]).get('grandTotal')`,
        expectedReturn: 1150,
        expectedOutput: ['1150'],
      },
    ],
  },

  {
    id: 'mission-sla-tracker',
    title: 'SLA Breach Detector',
    company: 'ServiceFirst Corp',
    description: 'Build a service that flags cases that have breached their SLA window based on priority.',
    scenario: `ServiceFirst's support director handed over the SLA matrix:

"Every case has a priority, and each priority has a maximum response window before we're in breach:
- Critical: 2 hours
- High: 8 hours
- Medium: 24 hours
- Low: 72 hours

I need a class that can tell me whether a single case is breached, get a list of all breached cases from a batch, and produce a quick text report with the totals."`,
    requirements: [
      'Create class SLATracker with method getSLAHours(String priority) returning Integer (the SLA window in hours)',
      'Create method isBreached(Case c) returning Boolean (true if case is older than SLA window)',
      'Create method getBreachers(List<Case> cases) returning List<Case> of only breached cases',
      'Create method getBreachReport(List<Case> cases) returning String like "5 of 20 cases are in breach"',
      'Handle unknown priority in getSLAHours by returning 72 (default to Low SLA)',
    ],
    difficulty: 'beginner',
    skills: ['Apex Classes', 'DateTime', 'Maps', 'Conditionals', 'Lists'],
    estimatedHours: 2,
    starterCode: `public class SLATracker {

    public static Integer getSLAHours(String priority) {
        // TODO: Return hours for Critical(2), High(8), Medium(24), Low(72)
        // Default to 72 for unknown priorities
        return 72;
    }

    public static Boolean isBreached(Case c) {
        // TODO: Compare CreatedDate + SLA hours to DateTime.now()
        return false;
    }

    public static List<Case> getBreachers(List<Case> cases) {
        // TODO: Return only breached cases
        return new List<Case>();
    }

    public static String getBreachReport(List<Case> cases) {
        // TODO: Return "X of Y cases are in breach"
        return null;
    }
}`,
    solution: `public class SLATracker {

    public static Integer getSLAHours(String priority) {
        if (priority == 'Critical') return 2;
        if (priority == 'High') return 8;
        if (priority == 'Medium') return 24;
        return 72;
    }

    public static Boolean isBreached(Case c) {
        if (c.CreatedDate == null) return false;
        Integer slaHours = getSLAHours(c.Priority);
        DateTime deadline = c.CreatedDate.addHours(slaHours);
        return DateTime.now() > deadline;
    }

    public static List<Case> getBreachers(List<Case> cases) {
        List<Case> breachers = new List<Case>();
        for (Case c : cases) {
            if (isBreached(c)) {
                breachers.add(c);
            }
        }
        return breachers;
    }

    public static String getBreachReport(List<Case> cases) {
        Integer breachCount = getBreachers(cases).size();
        return breachCount + ' of ' + cases.size() + ' cases are in breach';
    }
}`,
    hints: [
      "getSLAHours can use a chain of if/return statements — no need for a switch or map.",
      "To find the deadline: `DateTime deadline = c.CreatedDate.addHours(slaHours);` then compare to DateTime.now().",
      "isBreached should return false for null CreatedDate to avoid exceptions.",
      "getBreachers can call isBreached() in a loop — reuse your logic, don't repeat it.",
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Defines class SLATracker',
        pattern: 'public\\s+class\\s+SLATracker',
        errorMessage: "Class must be named exactly `SLATracker`.",
        exampleFix: "public class SLATracker {",
      },
      {
        id: 'tc2',
        description: 'getSLAHours returns 2 for Critical priority',
        pattern: "priority\\s*==\\s*'Critical'[^}]*return\\s+2|return\\s+2[^}]*'Critical'",
        errorMessage: "Return 2 hours for Critical priority in getSLAHours().",
        exampleFix: "if (priority == 'Critical') return 2;\nif (priority == 'High') return 8;",
      },
      {
        id: 'tc3',
        description: 'isBreached uses addHours() to calculate deadline',
        pattern: '\\.addHours\\s*\\(',
        errorMessage: "Calculate the deadline with createdDate.addHours(slaHours) and compare to DateTime.now().",
        exampleFix: "DateTime deadline = c.CreatedDate.addHours(slaHours);\nreturn DateTime.now() > deadline;",
      },
      {
        id: 'tc4',
        description: 'getBreachers returns List<Case>',
        pattern: 'public\\s+static\\s+List<Case>\\s+getBreachers\\s*\\(',
        errorMessage: "You need `public static List<Case> getBreachers(List<Case> cases)`.",
        exampleFix: "public static List<Case> getBreachers(List<Case> cases) {",
      },
      {
        id: 'tc5',
        description: 'getBreachReport returns formatted string with counts',
        pattern: "public\\s+static\\s+String\\s+getBreachReport\\s*\\(",
        errorMessage: "You need `public static String getBreachReport(List<Case> cases)` returning a summary string.",
        exampleFix: "public static String getBreachReport(List<Case> cases) {\n    Integer breachCount = getBreachers(cases).size();\n    return breachCount + ' of ' + cases.size() + ' cases are in breach';\n}",
      },
    ],
    scenarios: [
      {
        id: 's1',
        label: 'Critical priority → 2 hours',
        inputDisplay: "priority = 'Critical'",
        inputs: { priority: 'Critical' },
        expectedOutput: ['2'],
        expectedReturn: 2,
        methodCall: 'SLATracker.getSLAHours(priority)',
      },
      {
        id: 's2',
        label: 'High priority → 8 hours',
        inputDisplay: "priority = 'High'",
        inputs: { priority: 'High' },
        expectedOutput: ['8'],
        expectedReturn: 8,
        methodCall: 'SLATracker.getSLAHours(priority)',
      },
      {
        id: 's3',
        label: 'Medium priority → 24 hours',
        inputDisplay: "priority = 'Medium'",
        inputs: { priority: 'Medium' },
        expectedOutput: ['24'],
        expectedReturn: 24,
        methodCall: 'SLATracker.getSLAHours(priority)',
      },
      {
        id: 's4',
        label: 'Low priority → 72 hours',
        inputDisplay: "priority = 'Low'",
        inputs: { priority: 'Low' },
        expectedOutput: ['72'],
        expectedReturn: 72,
        methodCall: 'SLATracker.getSLAHours(priority)',
      },
      {
        id: 's5',
        label: 'Unknown priority → 72 hours (default)',
        inputDisplay: "priority = 'Unknown'",
        inputs: { priority: 'Unknown' },
        expectedOutput: ['72'],
        expectedReturn: 72,
        methodCall: 'SLATracker.getSLAHours(priority)',
      },
    ],
  },

  {
    id: 'mission-territory-assignment',
    title: 'Sales Territory Auto-Assignment',
    company: 'RegionSales Inc.',
    description: 'Build a territory assigner that maps accounts to sales regions based on country and state.',
    scenario: `RegionSales' Sales Ops team gave you the territory mapping doc:

"When a new account is created, we need to auto-assign a territory:
- USA + CA, OR, WA → 'West'
- USA + NY, NJ, MA → 'East'
- USA + TX, IL, OH → 'Central'
- USA + any other state → 'USA-Other'
- Country = Canada → 'Canada'
- Country = UK, DE, or FR → 'Europe'
- Anything else → 'International'
- Blank or null country → 'Unassigned'

Matching should work regardless of case — 'usa', 'USA', 'Us' should all match."`,
    requirements: [
      'Create class TerritoryAssigner with method assignTerritory(String country, String state) returning String',
      'Handle null or blank country by returning "Unassigned"',
      'All string comparisons must be case-insensitive (use toUpperCase() or equalsIgnoreCase())',
      'USA state matching: check if state is in a known Set for each region',
      'Create method bulkAssign(List<Account> accounts) returning Map<Id, String>',
    ],
    difficulty: 'beginner',
    skills: ['String Methods', 'Conditionals', 'Maps', 'Null Safety'],
    estimatedHours: 1.5,
    starterCode: `public class TerritoryAssigner {

    public static String assignTerritory(String country, String state) {
        // TODO: Handle null/blank country
        if (String.isBlank(country)) return 'Unassigned';

        String c = country.toUpperCase();
        String s = (state != null) ? state.toUpperCase() : '';

        // TODO: Check USA regions using Sets
        if (c == 'USA' || c == 'US') {
            Set<String> west = new Set<String>{'CA', 'OR', 'WA'};
            // TODO: Add East and Central sets
            // TODO: Return region or 'USA-Other'
        }

        // TODO: Handle Canada, Europe, International
        return 'International';
    }

    public static Map<Id, String> bulkAssign(List<Account> accounts) {
        // TODO: Call assignTerritory for each account
        return new Map<Id, String>();
    }
}`,
    solution: `public class TerritoryAssigner {

    public static String assignTerritory(String country, String state) {
        if (String.isBlank(country)) return 'Unassigned';

        String c = country.toUpperCase();
        String s = (state != null) ? state.toUpperCase() : '';

        if (c == 'USA' || c == 'US') {
            Set<String> west    = new Set<String>{'CA', 'OR', 'WA'};
            Set<String> east    = new Set<String>{'NY', 'NJ', 'MA'};
            Set<String> central = new Set<String>{'TX', 'IL', 'OH'};

            if (west.contains(s))    return 'West';
            if (east.contains(s))    return 'East';
            if (central.contains(s)) return 'Central';
            return 'USA-Other';
        }

        if (c == 'CANADA' || c == 'CA') return 'Canada';

        Set<String> europe = new Set<String>{'UK', 'DE', 'FR'};
        if (europe.contains(c)) return 'Europe';

        return 'International';
    }

    public static Map<Id, String> bulkAssign(List<Account> accounts) {
        Map<Id, String> result = new Map<Id, String>();
        for (Account a : accounts) {
            result.put(a.Id, assignTerritory(a.BillingCountry, a.BillingState));
        }
        return result;
    }
}`,
    hints: [
      "Call String.isBlank(country) first — it handles both null and empty strings in one check.",
      "toUpperCase() on the country before all comparisons avoids writing case variants like 'usa', 'Usa', 'USA'.",
      "Use a Set<String> for state lookups: `Set<String> west = new Set<String>{'CA', 'OR', 'WA'};` then `west.contains(s)`.",
      "bulkAssign should loop over accounts and call assignTerritory(a.BillingCountry, a.BillingState) for each.",
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Defines class TerritoryAssigner',
        pattern: 'public\\s+class\\s+TerritoryAssigner',
        errorMessage: "Class must be named exactly `TerritoryAssigner`.",
        exampleFix: "public class TerritoryAssigner {",
      },
      {
        id: 'tc2',
        description: "Returns 'Unassigned' for blank/null country",
        pattern: "String\\.isBlank\\s*\\(|country\\s*==\\s*null",
        errorMessage: "Check for blank/null country with String.isBlank() and return 'Unassigned'.",
        exampleFix: "if (String.isBlank(country)) return 'Unassigned';",
      },
      {
        id: 'tc3',
        description: 'Uses toUpperCase() for case-insensitive matching',
        pattern: '\\.toUpperCase\\(\\)',
        errorMessage: "Normalize country and state to uppercase with .toUpperCase() before comparing.",
        exampleFix: "String c = country.toUpperCase();\nString s = (state != null) ? state.toUpperCase() : '';",
      },
      {
        id: 'tc4',
        description: "Uses Set for state region matching",
        pattern: 'new\\s+Set<String>\\s*\\{',
        errorMessage: "Use Set<String> collections for West, East, and Central state lookups.",
        exampleFix: "Set<String> west = new Set<String>{'CA', 'OR', 'WA'};\nif (west.contains(s)) return 'West';",
      },
      {
        id: 'tc5',
        description: 'Defines bulkAssign returning Map<Id, String>',
        pattern: 'Map<Id,\\s*String>\\s+bulkAssign\\s*\\(',
        errorMessage: "You need `public static Map<Id, String> bulkAssign(List<Account> accounts)`.",
        exampleFix: "public static Map<Id, String> bulkAssign(List<Account> accounts) {",
      },
    ],
    scenarios: [
      {
        id: 's1',
        label: 'West (USA, CA)',
        inputDisplay: "country='USA', state='CA'",
        inputs: { country: 'USA', state: 'CA' },
        expectedOutput: ['West'],
        expectedReturn: 'West',
        methodCall: 'TerritoryAssigner.assignTerritory(country, state)',
      },
      {
        id: 's2',
        label: 'East (USA, NY)',
        inputDisplay: "country='USA', state='NY'",
        inputs: { country: 'USA', state: 'NY' },
        expectedOutput: ['East'],
        expectedReturn: 'East',
        methodCall: 'TerritoryAssigner.assignTerritory(country, state)',
      },
      {
        id: 's3',
        label: 'Canada',
        inputDisplay: "country='Canada', state=null",
        inputs: { country: 'Canada', state: null },
        expectedOutput: ['Canada'],
        expectedReturn: 'Canada',
        methodCall: 'TerritoryAssigner.assignTerritory(country, state)',
      },
      {
        id: 's4',
        label: 'Europe (UK)',
        inputDisplay: "country='UK', state=null",
        inputs: { country: 'UK', state: null },
        expectedOutput: ['Europe'],
        expectedReturn: 'Europe',
        methodCall: 'TerritoryAssigner.assignTerritory(country, state)',
      },
      {
        id: 's5',
        label: 'Unassigned (blank country)',
        inputDisplay: "country='', state=null",
        inputs: { country: '', state: null },
        expectedOutput: ['Unassigned'],
        expectedReturn: 'Unassigned',
        methodCall: 'TerritoryAssigner.assignTerritory(country, state)',
      },
    ],
  },

  {
    id: 'mission-renewal-reminder',
    title: 'Subscription Renewal Reminder Builder',
    company: 'SubManager SaaS',
    description: 'Build a service that calculates renewal timing, urgency levels, and generates reminder messages for subscription renewals.',
    scenario: `SubManager's customer success lead sent over the renewal reminder spec:

"We need to send reminder emails before subscription renewals. The timing depends on customer tier:
- Gold customers: remind 90 days before renewal
- Silver customers: remind 60 days before renewal
- Bronze customers: remind 30 days before renewal

The email urgency level depends on days remaining:
- Less than 7 days: Critical
- Less than 30 days: High
- Less than 60 days: Medium
- Anything else: Low

The reminder message should say something like: 'Dear [Name], your subscription renews in X days (urgency level). Please review your plan.'"`,
    requirements: [
      'Create class RenewalReminderService with method getDaysUntilRenewal(Date endDate) returning Integer',
      "Create method getReminderDate(Date endDate, String tier) returning Date (Gold=90 days before, Silver=60, Bronze=30)",
      'Create method getUrgency(Date endDate) returning String urgency level',
      'Create method buildReminder(Date endDate, String tier, String customerName) returning formatted String message',
      'Handle null endDate in getDaysUntilRenewal by returning 0',
    ],
    difficulty: 'beginner',
    skills: ['Date Operations', 'Conditionals', 'String Methods', 'Apex Classes'],
    estimatedHours: 2,
    starterCode: `public class RenewalReminderService {

    public static Integer getDaysUntilRenewal(Date endDate) {
        // TODO: Return Date.today().daysBetween(endDate), handle null
        return 0;
    }

    public static Date getReminderDate(Date endDate, String tier) {
        // TODO: Return endDate minus lead days based on tier
        // Gold=90, Silver=60, Bronze=30
        return null;
    }

    public static String getUrgency(Date endDate) {
        // TODO: Get days remaining, return Critical/High/Medium/Low
        return 'Low';
    }

    public static String buildReminder(Date endDate, String tier, String customerName) {
        // TODO: Build message string using getDaysUntilRenewal and getUrgency
        return null;
    }
}`,
    solution: `public class RenewalReminderService {

    public static Integer getDaysUntilRenewal(Date endDate) {
        if (endDate == null) return 0;
        return Date.today().daysBetween(endDate);
    }

    public static Date getReminderDate(Date endDate, String tier) {
        Integer leadDays = 30;
        if (tier == 'Gold')   leadDays = 90;
        if (tier == 'Silver') leadDays = 60;
        return endDate.addDays(-leadDays);
    }

    public static String getUrgency(Date endDate) {
        Integer days = getDaysUntilRenewal(endDate);
        if (days < 7)  return 'Critical';
        if (days < 30) return 'High';
        if (days < 60) return 'Medium';
        return 'Low';
    }

    public static String buildReminder(Date endDate, String tier, String customerName) {
        Integer days = getDaysUntilRenewal(endDate);
        String urgency = getUrgency(endDate);
        return 'Dear ' + customerName + ', your subscription renews in ' + days
            + ' days (' + urgency + '). Please review your plan.';
    }
}`,
    hints: [
      "Date.today().daysBetween(endDate) gives you the number of days between today and a future date.",
      "getReminderDate: subtract lead days from endDate using endDate.addDays(-leadDays).",
      "getUrgency checks days < 7, then < 30, then < 60 — order matters, check smallest threshold first.",
      "buildReminder can call getDaysUntilRenewal() and getUrgency() internally — reuse your methods.",
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Defines class RenewalReminderService',
        pattern: 'public\\s+class\\s+RenewalReminderService',
        errorMessage: "Class must be named exactly `RenewalReminderService`.",
        exampleFix: "public class RenewalReminderService {",
      },
      {
        id: 'tc2',
        description: 'getDaysUntilRenewal uses daysBetween()',
        pattern: '\\.daysBetween\\s*\\(',
        errorMessage: "Use Date.today().daysBetween(endDate) to calculate days remaining.",
        exampleFix: "return Date.today().daysBetween(endDate);",
      },
      {
        id: 'tc3',
        description: 'getReminderDate uses addDays with negative value',
        pattern: '\\.addDays\\s*\\(\\s*-',
        errorMessage: "Subtract lead days from endDate using endDate.addDays(-leadDays).",
        exampleFix: "return endDate.addDays(-leadDays);",
      },
      {
        id: 'tc4',
        description: "getUrgency returns 'Critical' for near-deadline cases",
        pattern: "'Critical'",
        errorMessage: "getUrgency() must return 'Critical' when days < 7.",
        exampleFix: "if (days < 7) return 'Critical';\nif (days < 30) return 'High';",
      },
      {
        id: 'tc5',
        description: 'buildReminder returns a formatted String message',
        pattern: 'public\\s+static\\s+String\\s+buildReminder\\s*\\(',
        errorMessage: "You need `public static String buildReminder(Date endDate, String tier, String customerName)`.",
        exampleFix: "public static String buildReminder(Date endDate, String tier, String customerName) {",
      },
    ],
    scenarios: [
      {
        id: 's1', label: 'getUrgency Critical (<7d)',
        inputDisplay: "endDate = 3 days from now → urgency = 'Critical'",
        inputs: {},
        methodCall: `RenewalReminderService.getUrgency(new Date(Date.now()+3*86400000))`,
        expectedReturn: 'Critical',
        expectedOutput: ['Critical'],
      },
      {
        id: 's2', label: 'getUrgency High (<30d)',
        inputDisplay: "endDate = 15 days from now → urgency = 'High'",
        inputs: {},
        methodCall: `RenewalReminderService.getUrgency(new Date(Date.now()+15*86400000))`,
        expectedReturn: 'High',
        expectedOutput: ['High'],
      },
      {
        id: 's3', label: 'getUrgency Low (>60d)',
        inputDisplay: "endDate = 90 days from now → urgency = 'Low'",
        inputs: {},
        methodCall: `RenewalReminderService.getUrgency(new Date(Date.now()+90*86400000))`,
        expectedReturn: 'Low',
        expectedOutput: ['Low'],
      },
      {
        id: 's4', label: 'getReminderDate Gold (90d before)',
        inputDisplay: "Gold tier → reminder date = endDate minus 90 days",
        inputs: {},
        methodCall: `(() => { const end = new Date(Date.now()+180*86400000); const rem = RenewalReminderService.getReminderDate(end,'Gold'); return Math.round((end-rem)/86400000); })()`,
        expectedReturn: 90,
        expectedOutput: ['90'],
      },
    ],
  },

  // ── INTERMEDIATE MISSIONS 3–5 ──────────────────────────────────────────────

  {
    id: 'mission-approval-workflow',
    title: 'Dynamic Approval Routing Engine',
    company: 'PolicyPro Insurance',
    description: 'Build an approval routing engine that determines who must approve a request based on department and amount thresholds.',
    scenario: `PolicyPro's compliance team sent over the new approval matrix:

"Every purchase request needs approval, but the approver depends on the department and the amount:

Finance: > $10K needs Manager, > $50K also needs VP, > $200K also needs C-Suite
Sales: > $5K needs Manager, > $25K also needs VP
HR: > $2K needs Manager

Unknown departments: always route to 'Department Manager'.

We need a method to get the highest required approver for a request, and another method that returns the full approval chain (all required approvers from lowest to highest) so we can build a multi-step flow."`,
    requirements: [
      'Create class ApprovalRouter with inner class ApprovalRequest (public String department, Decimal amount, String requestorName)',
      'Create method getApprover(ApprovalRequest req) returning String (highest required approver level)',
      'Create method buildApprovalChain(ApprovalRequest req) returning List<String> in order: Manager, VP, C-Suite as applicable',
      'Handle null amount as 0 (no approval required beyond Department Manager for unknown dept)',
      'Handle null or unknown department by routing to "Department Manager"',
    ],
    difficulty: 'intermediate',
    skills: ['Inner Classes', 'Maps', 'Lists', 'Conditionals', 'Null Safety'],
    estimatedHours: 3,
    starterCode: `public class ApprovalRouter {

    public class ApprovalRequest {
        public String department;
        public Decimal amount;
        public String requestorName;

        public ApprovalRequest(String dept, Decimal amt, String name) {
            this.department = dept;
            this.amount = amt;
            this.requestorName = name;
        }
    }

    public static String getApprover(ApprovalRequest req) {
        // TODO: Return highest required approver for the request
        return 'Department Manager';
    }

    public static List<String> buildApprovalChain(ApprovalRequest req) {
        // TODO: Return ordered list of all required approvers
        // e.g. ['Manager', 'VP'] or ['Manager', 'VP', 'C-Suite']
        return new List<String>();
    }
}`,
    solution: `public class ApprovalRouter {

    public class ApprovalRequest {
        public String department;
        public Decimal amount;
        public String requestorName;

        public ApprovalRequest(String dept, Decimal amt, String name) {
            this.department = dept;
            this.amount = amt;
            this.requestorName = name;
        }
    }

    public static String getApprover(ApprovalRequest req) {
        List<String> chain = buildApprovalChain(req);
        return chain.isEmpty() ? 'Department Manager' : chain.get(chain.size() - 1);
    }

    public static List<String> buildApprovalChain(ApprovalRequest req) {
        List<String> chain = new List<String>();
        Decimal amount = (req.amount != null) ? req.amount : 0;
        String dept = (req.department != null) ? req.department : '';

        if (dept == 'Finance') {
            if (amount > 10000)  chain.add('Manager');
            if (amount > 50000)  chain.add('VP');
            if (amount > 200000) chain.add('C-Suite');
        } else if (dept == 'Sales') {
            if (amount > 5000)  chain.add('Manager');
            if (amount > 25000) chain.add('VP');
        } else if (dept == 'HR') {
            if (amount > 2000) chain.add('Manager');
        } else {
            chain.add('Department Manager');
        }

        return chain;
    }
}`,
    hints: [
      "Build the approval chain as a List<String> and add approvers in order (Manager first, then VP, then C-Suite) based on amount thresholds.",
      "getApprover() can call buildApprovalChain() and return the last item in the list — that's the highest approver.",
      "Guard against null amount with a ternary: `Decimal amount = (req.amount != null) ? req.amount : 0;`",
      "Unknown departments should add 'Department Manager' to the chain without any amount checks.",
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Defines inner class ApprovalRequest',
        pattern: 'public\\s+class\\s+ApprovalRequest',
        errorMessage: "You need an inner class `ApprovalRequest` inside `ApprovalRouter`.",
        exampleFix: "public class ApprovalRequest {\n    public String department;\n    public Decimal amount;\n    public String requestorName;\n}",
      },
      {
        id: 'tc2',
        description: 'buildApprovalChain returns List<String>',
        pattern: 'public\\s+static\\s+List<String>\\s+buildApprovalChain\\s*\\(',
        errorMessage: "You need `public static List<String> buildApprovalChain(ApprovalRequest req)`.",
        exampleFix: "public static List<String> buildApprovalChain(ApprovalRequest req) {",
      },
      {
        id: 'tc3',
        description: 'Finance department uses $200K threshold for C-Suite',
        pattern: '200000',
        errorMessage: "Finance > $200,000 must route to C-Suite. Check the 200000 threshold.",
        exampleFix: "if (amount > 200000) chain.add('C-Suite');",
      },
      {
        id: 'tc4',
        description: 'Handles null amount gracefully',
        pattern: 'req\\.amount\\s*!=\\s*null|amount\\s*!=\\s*null',
        errorMessage: "Null-check req.amount before using it in comparisons.",
        exampleFix: "Decimal amount = (req.amount != null) ? req.amount : 0;",
      },
      {
        id: 'tc5',
        description: 'Routes unknown departments to Department Manager',
        pattern: "'Department Manager'",
        errorMessage: "Unknown departments must route to 'Department Manager'.",
        exampleFix: "} else {\n    chain.add('Department Manager');\n}",
      },
    ],
    scenarios: [
      {
        id: 's1', label: 'Finance >$200K → C-Suite',
        inputDisplay: "Finance dept, $250,000 → highest approver = 'C-Suite'",
        inputs: {},
        methodCall: `ApprovalRouter.getApprover({department:'Finance',amount:250000,requestorName:'Alice'})`,
        expectedReturn: 'C-Suite',
        expectedOutput: ['C-Suite'],
      },
      {
        id: 's2', label: 'Finance $15K → Manager',
        inputDisplay: "Finance dept, $15,000 → highest approver = 'Manager'",
        inputs: {},
        methodCall: `ApprovalRouter.getApprover({department:'Finance',amount:15000,requestorName:'Bob'})`,
        expectedReturn: 'Manager',
        expectedOutput: ['Manager'],
      },
      {
        id: 's3', label: 'Sales $30K → VP',
        inputDisplay: "Sales dept, $30,000 → highest approver = 'VP'",
        inputs: {},
        methodCall: `ApprovalRouter.getApprover({department:'Sales',amount:30000,requestorName:'Carol'})`,
        expectedReturn: 'VP',
        expectedOutput: ['VP'],
      },
      {
        id: 's4', label: 'Unknown dept → Department Manager',
        inputDisplay: "Unknown dept → 'Department Manager'",
        inputs: {},
        methodCall: `ApprovalRouter.getApprover({department:'Engineering',amount:5000,requestorName:'Dave'})`,
        expectedReturn: 'Department Manager',
        expectedOutput: ['Department Manager'],
      },
    ],
  },

  {
    id: 'mission-commission-calculator',
    title: 'Sales Commission Calculator',
    company: 'CompSales Corp',
    description: 'Build a tiered commission calculator with a quarterly accelerator for hitting quota.',
    scenario: `CompSales' finance team sent over the commission structure:

"Commission rates are tiered by sale amount:
- $0–$50K: 5%
- $50K–$100K: 7%
- $100K–$200K: 10%
- Over $200K: 12%

Quarterly accelerator: if the rep has hit 100% or more of their quarterly quota, every commission that quarter gets multiplied by 1.5x.

We also need a quarterly statement that takes a list of three monthly sales figures and a monthly quota, and returns totals: totalSales, totalCommission, quotaAttainment (as a percentage), and whether the accelerator applies."`,
    requirements: [
      'Create class CommissionCalculator with method getBaseRate(Decimal saleAmount) returning Decimal (e.g. 0.05 for 5%)',
      'Create method calculateCommission(Decimal saleAmount, Decimal quotaAttainmentPct) returning Decimal',
      'Apply 1.5x accelerator multiplier when quotaAttainmentPct >= 100',
      "Create method getQuarterlyStatement(List<Decimal> monthlySales, Decimal monthlyQuota) returning Map<String, Decimal> with keys 'totalSales', 'totalCommission', 'quotaAttainment', 'acceleratorApplied' (1.0 if applied, 0.0 if not)",
      'Handle null or zero saleAmount by returning 0 commission',
    ],
    difficulty: 'intermediate',
    skills: ['Decimal Math', 'Conditionals', 'Lists', 'Maps', 'Loops'],
    estimatedHours: 3,
    starterCode: `public class CommissionCalculator {

    public static Decimal getBaseRate(Decimal saleAmount) {
        // Thresholds: 50000=5%, 100000=7%, 200000=10%, >200000=12%
        // TODO: Return rate as decimal (e.g. 0.05)
        return 0.05;
    }

    public static Decimal calculateCommission(Decimal saleAmount, Decimal quotaAttainmentPct) {
        // TODO: Calculate base commission = saleAmount * rate
        // TODO: Apply 1.5x multiplier if quotaAttainmentPct >= 100
        return 0;
    }

    public static Map<String, Decimal> getQuarterlyStatement(
        List<Decimal> monthlySales,
        Decimal monthlyQuota
    ) {
        // TODO: sum monthlySales, calculate quota attainment
        // TODO: apply accelerator if attainment >= 100%
        // TODO: return map with totalSales, totalCommission, quotaAttainment, acceleratorApplied
        return new Map<String, Decimal>();
    }
}`,
    solution: `public class CommissionCalculator {

    public static Decimal getBaseRate(Decimal saleAmount) {
        if (saleAmount == null || saleAmount <= 0) return 0;
        if (saleAmount > 200000) return 0.12;
        if (saleAmount > 100000) return 0.10;
        if (saleAmount > 50000)  return 0.07;
        return 0.05;
    }

    public static Decimal calculateCommission(Decimal saleAmount, Decimal quotaAttainmentPct) {
        if (saleAmount == null || saleAmount <= 0) return 0;
        Decimal rate = getBaseRate(saleAmount);
        Decimal commission = saleAmount * rate;
        if (quotaAttainmentPct != null && quotaAttainmentPct >= 100) {
            commission *= 1.5;
        }
        return commission;
    }

    public static Map<String, Decimal> getQuarterlyStatement(
        List<Decimal> monthlySales,
        Decimal monthlyQuota
    ) {
        Decimal totalSales = 0;
        for (Decimal s : monthlySales) {
            totalSales += (s != null ? s : 0);
        }

        Decimal quarterQuota = monthlyQuota * 3;
        Decimal quotaAttainment = (quarterQuota > 0) ? (totalSales / quarterQuota * 100) : 0;
        Boolean accelerator = quotaAttainment >= 100;

        Decimal totalCommission = 0;
        for (Decimal s : monthlySales) {
            totalCommission += calculateCommission(s != null ? s : 0, quotaAttainment);
        }

        return new Map<String, Decimal>{
            'totalSales'       => totalSales,
            'totalCommission'  => totalCommission,
            'quotaAttainment'  => quotaAttainment,
            'acceleratorApplied' => accelerator ? 1.0 : 0.0
        };
    }
}`,
    hints: [
      "getBaseRate: check from highest threshold down — if amount > 200000 return 0.12, else if > 100000 return 0.10, etc.",
      "In calculateCommission, multiply commission by 1.5 when quotaAttainmentPct >= 100.",
      "Quarterly quota = monthlyQuota × 3. QuotaAttainment % = totalSales / quarterQuota × 100.",
      "Store acceleratorApplied as 1.0 (true) or 0.0 (false) since the map type is Decimal.",
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Defines class CommissionCalculator',
        pattern: 'public\\s+class\\s+CommissionCalculator',
        errorMessage: "Class must be named exactly `CommissionCalculator`.",
        exampleFix: "public class CommissionCalculator {",
      },
      {
        id: 'tc2',
        description: 'getBaseRate returns 0.12 for amounts over $200K',
        pattern: '0\\.12',
        errorMessage: "Return 0.12 (12%) for sales over $200,000 in getBaseRate().",
        exampleFix: "if (saleAmount > 200000) return 0.12;",
      },
      {
        id: 'tc3',
        description: 'Applies 1.5x accelerator multiplier',
        pattern: '1\\.5',
        errorMessage: "Multiply commission by 1.5 when quotaAttainmentPct >= 100.",
        exampleFix: "if (quotaAttainmentPct >= 100) {\n    commission *= 1.5;\n}",
      },
      {
        id: 'tc4',
        description: "getQuarterlyStatement returns map with 'totalCommission' key",
        pattern: "'totalCommission'",
        errorMessage: "The returned map must include the key 'totalCommission'.",
        exampleFix: "return new Map<String, Decimal>{\n    'totalSales' => totalSales,\n    'totalCommission' => totalCommission\n};",
      },
      {
        id: 'tc5',
        description: "getQuarterlyStatement returns 'quotaAttainment' in the map",
        pattern: "'quotaAttainment'",
        errorMessage: "The returned map must include the key 'quotaAttainment'.",
        exampleFix: "// Add to your map:\n'quotaAttainment' => quotaAttainment",
      },
    ],
    scenarios: [
      {
        id: 's1',
        label: 'Rate for $30K sale (5%)',
        inputDisplay: 'saleAmount = 30000',
        inputs: { saleAmount: 30000 },
        expectedOutput: ['0.05'],
        expectedReturn: 0.05,
        methodCall: 'CommissionCalculator.getBaseRate(saleAmount)',
      },
      {
        id: 's2',
        label: 'Rate for $75K sale (7%)',
        inputDisplay: 'saleAmount = 75000',
        inputs: { saleAmount: 75000 },
        expectedOutput: ['0.07'],
        expectedReturn: 0.07,
        methodCall: 'CommissionCalculator.getBaseRate(saleAmount)',
      },
      {
        id: 's3',
        label: 'Rate for $150K sale (10%)',
        inputDisplay: 'saleAmount = 150000',
        inputs: { saleAmount: 150000 },
        expectedOutput: ['0.1'],
        expectedReturn: 0.10,
        methodCall: 'CommissionCalculator.getBaseRate(saleAmount)',
      },
      {
        id: 's4',
        label: 'Rate for $250K sale (12%)',
        inputDisplay: 'saleAmount = 250000',
        inputs: { saleAmount: 250000 },
        expectedOutput: ['0.12'],
        expectedReturn: 0.12,
        methodCall: 'CommissionCalculator.getBaseRate(saleAmount)',
      },
      {
        id: 's5',
        label: 'Zero/null sale → 0% rate',
        inputDisplay: 'saleAmount = 0',
        inputs: { saleAmount: 0 },
        expectedOutput: ['0'],
        expectedReturn: 0,
        methodCall: 'CommissionCalculator.getBaseRate(saleAmount)',
      },
    ],
  },

  {
    id: 'mission-data-quality-scorer',
    title: 'Account Data Quality Scorer',
    company: 'DataQual Analytics',
    description: 'Build a data quality scoring engine that grades account completeness and flags stale records.',
    scenario: `DataQual's data governance lead handed over the scoring rubric:

"We need to score every account on data completeness. Here's the point breakdown (max 100):
- Name: 20 points (required)
- Phone: 10 points
- Website: 10 points
- Industry: 15 points
- AnnualRevenue: 15 points
- BillingCity: 10 points
- BillingCountry: 10 points
- Description: 10 points

Tiers:
- 80–100: Excellent
- 60–79: Good
- Below 60: Poor

Also flag 'stale' accounts — ones where LastActivityDate is null or more than 365 days ago."`,
    requirements: [
      'Create class DataQualityScorer with method scoreAccount(Account acct) returning Integer (0–100)',
      'Add points for each present field per the scoring rubric above',
      'Create method getMissingFields(Account acct) returning List<String> of field labels with missing data',
      'Create method isStale(Account acct) returning Boolean (null LastActivityDate or > 365 days old)',
      'Create method generateQualityReport(Account acct) returning String with score, tier, and missing field count',
    ],
    difficulty: 'intermediate',
    skills: ['Conditionals', 'Lists', 'Date Operations', 'String Methods', 'Apex Classes'],
    estimatedHours: 3,
    starterCode: `public class DataQualityScorer {

    public static Integer scoreAccount(Account acct) {
        Integer score = 0;
        // TODO: Add 20 for Name (always present if record exists, but check != null)
        // TODO: Add 10 for Phone
        // TODO: Add 10 for Website
        // TODO: Add 15 for Industry
        // TODO: Add 15 for AnnualRevenue
        // TODO: Add 10 for BillingCity
        // TODO: Add 10 for BillingCountry
        // TODO: Add 10 for Description
        return score;
    }

    public static List<String> getMissingFields(Account acct) {
        List<String> missing = new List<String>();
        // TODO: Add field label for each blank/null field
        return missing;
    }

    public static Boolean isStale(Account acct) {
        // TODO: Return true if LastActivityDate is null or > 365 days ago
        return false;
    }

    public static String generateQualityReport(Account acct) {
        // TODO: Compute score, tier, missing count — return formatted string
        return null;
    }
}`,
    solution: `public class DataQualityScorer {

    public static Integer scoreAccount(Account acct) {
        Integer score = 0;
        if (String.isNotBlank(acct.Name))          score += 20;
        if (String.isNotBlank(acct.Phone))          score += 10;
        if (String.isNotBlank(acct.Website))        score += 10;
        if (String.isNotBlank(acct.Industry))       score += 15;
        if (acct.AnnualRevenue != null)             score += 15;
        if (String.isNotBlank(acct.BillingCity))    score += 10;
        if (String.isNotBlank(acct.BillingCountry)) score += 10;
        if (String.isNotBlank(acct.Description))    score += 10;
        return score;
    }

    public static List<String> getMissingFields(Account acct) {
        List<String> missing = new List<String>();
        if (String.isBlank(acct.Phone))          missing.add('Phone');
        if (String.isBlank(acct.Website))        missing.add('Website');
        if (String.isBlank(acct.Industry))       missing.add('Industry');
        if (acct.AnnualRevenue == null)          missing.add('Annual Revenue');
        if (String.isBlank(acct.BillingCity))    missing.add('Billing City');
        if (String.isBlank(acct.BillingCountry)) missing.add('Billing Country');
        if (String.isBlank(acct.Description))    missing.add('Description');
        return missing;
    }

    public static Boolean isStale(Account acct) {
        if (acct.LastActivityDate == null) return true;
        return acct.LastActivityDate < Date.today().addDays(-365);
    }

    public static String generateQualityReport(Account acct) {
        Integer score = scoreAccount(acct);
        List<String> missing = getMissingFields(acct);
        String tier = score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : 'Poor';
        return 'Account: ' + acct.Name
            + ' | Score: ' + score + '/100'
            + ' | Tier: ' + tier
            + ' | Missing fields: ' + missing.size()
            + (isStale(acct) ? ' | STALE' : '');
    }
}`,
    hints: [
      "String.isNotBlank(field) handles null, empty, and whitespace-only strings — better than != null alone.",
      "Build the score by accumulating points with +=. Start from 0, not 100.",
      "isStale: compare LastActivityDate to Date.today().addDays(-365). If the date is earlier (less than), it's stale.",
      "generateQualityReport can call scoreAccount(), getMissingFields(), and isStale() internally — compose your methods.",
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Defines class DataQualityScorer',
        pattern: 'public\\s+class\\s+DataQualityScorer',
        errorMessage: "Class must be named exactly `DataQualityScorer`.",
        exampleFix: "public class DataQualityScorer {",
      },
      {
        id: 'tc2',
        description: 'Uses String.isNotBlank() or String.isBlank() for field checks',
        pattern: 'String\\.isNotBlank\\s*\\(|String\\.isBlank\\s*\\(',
        errorMessage: "Use String.isNotBlank() or String.isBlank() to check text fields.",
        exampleFix: "if (String.isNotBlank(acct.Phone)) score += 10;",
      },
      {
        id: 'tc3',
        description: 'Adds 20 points for Account Name',
        pattern: 'score\\s*\\+=\\s*20',
        errorMessage: "Add 20 points for the Account Name field.",
        exampleFix: "if (String.isNotBlank(acct.Name)) score += 20;",
      },
      {
        id: 'tc4',
        description: 'isStale checks LastActivityDate against 365 days ago',
        pattern: 'addDays\\s*\\(\\s*-365\\s*\\)',
        errorMessage: "Check if LastActivityDate < Date.today().addDays(-365) in isStale().",
        exampleFix: "return acct.LastActivityDate < Date.today().addDays(-365);",
      },
      {
        id: 'tc5',
        description: 'getMissingFields returns List<String>',
        pattern: 'public\\s+static\\s+List<String>\\s+getMissingFields\\s*\\(',
        errorMessage: "You need `public static List<String> getMissingFields(Account acct)`.",
        exampleFix: "public static List<String> getMissingFields(Account acct) {",
      },
    ],
    scenarios: [
      {
        id: 's1', label: 'Full account = 100pts',
        inputDisplay: "Account with all fields populated → score = 100",
        inputs: {},
        methodCall: `DataQualityScorer.scoreAccount({Name:'Acme',Phone:'555-0100',Website:'acme.com',Industry:'Tech',AnnualRevenue:1000000,BillingCity:'SF',BillingCountry:'US',Description:'Top client'})`,
        expectedReturn: 100,
        expectedOutput: ['100'],
      },
      {
        id: 's2', label: 'Only Name = 20pts',
        inputDisplay: "Account with only Name → score = 20",
        inputs: {},
        methodCall: `DataQualityScorer.scoreAccount({Name:'Acme',Phone:null,Website:null,Industry:null,AnnualRevenue:null,BillingCity:null,BillingCountry:null,Description:null})`,
        expectedReturn: 20,
        expectedOutput: ['20'],
      },
      {
        id: 's3', label: 'isStale null date → true',
        inputDisplay: "Account with null LastActivityDate → isStale = true",
        inputs: {},
        methodCall: `DataQualityScorer.isStale({LastActivityDate:null})`,
        expectedReturn: true,
        expectedOutput: ['true'],
      },
      {
        id: 's4', label: 'isStale recent → false',
        inputDisplay: "Account with LastActivityDate 30 days ago → isStale = false",
        inputs: {},
        methodCall: `DataQualityScorer.isStale({LastActivityDate:new Date(Date.now()-30*86400000)})`,
        expectedReturn: false,
        expectedOutput: ['false'],
      },
    ],
  },

  // ── ADVANCED MISSIONS 1–5 ─────────────────────────────────────────────────

  {
    id: 'mission-trigger-framework',
    title: 'Build a Reusable Trigger Framework',
    company: 'EnterpriseTech Solutions',
    description: 'Build a production-grade Trigger Handler framework with a base virtual class and a concrete Lead implementation.',
    scenario: `EnterpriseTech's tech lead gathered the team for a Zoom:

"Our triggers are a mess — logic scattered everywhere, duplicate code, no pattern. I want a proper enterprise trigger framework. Here's the design:

1. A TriggerHandler base class with virtual (overridable) methods for each trigger context: beforeInsert, afterInsert, beforeUpdate, afterUpdate.
2. A run() method on TriggerHandler that checks the Trigger context variables (Trigger.isBefore, Trigger.isInsert, etc.) and calls the right method.
3. A LeadTriggerHandler that extends TriggerHandler and overrides beforeInsert to set Lead.Rating = 'Cold' if it's currently null.
4. A trigger on Lead that calls: new LeadTriggerHandler().run();

This is the standard pattern used in production at Salesforce customers worldwide."`,
    requirements: [
      'Create virtual class TriggerHandler with virtual void methods: beforeInsert(List<SObject> newList), afterInsert(List<SObject> newList, Map<Id,SObject> newMap), beforeUpdate(List<SObject> newList, Map<Id,SObject> oldMap), afterUpdate(List<SObject> newList, Map<Id,SObject> newMap, Map<Id,SObject> oldMap)',
      'Create method run() on TriggerHandler that checks Trigger.isBefore/isAfter/isInsert/isUpdate and calls the appropriate virtual method',
      'Create class LeadTriggerHandler extends TriggerHandler; override beforeInsert to cast newList to List<Lead> and set Rating = \'Cold\' if null',
      "Create a trigger named LeadTrigger on Lead (before insert, after insert, before update, after update) that calls: new LeadTriggerHandler().run();",
      'All virtual methods on TriggerHandler should have empty default implementations (no-op)',
    ],
    difficulty: 'advanced',
    skills: ['OOP Inheritance', 'Virtual Methods', 'Trigger Framework', 'Design Patterns'],
    estimatedHours: 5,
    starterCode: `// TriggerHandler.cls — Base class for all trigger handlers
public virtual class TriggerHandler {

    // TODO: Add virtual void beforeInsert(List<SObject> newList)
    // TODO: Add virtual void afterInsert(List<SObject> newList, Map<Id,SObject> newMap)
    // TODO: Add virtual void beforeUpdate(List<SObject> newList, Map<Id,SObject> oldMap)
    // TODO: Add virtual void afterUpdate(List<SObject> newList, Map<Id,SObject> newMap, Map<Id,SObject> oldMap)

    public void run() {
        // TODO: Check Trigger context and call the right method
        // Use Trigger.isBefore, Trigger.isAfter, Trigger.isInsert, Trigger.isUpdate
    }
}

// LeadTriggerHandler.cls — Lead-specific logic
public class LeadTriggerHandler extends TriggerHandler {

    // TODO: Override beforeInsert
    // Cast newList to List<Lead>
    // Set Rating = 'Cold' if null
}

// LeadTrigger.trigger — Wire it up
trigger LeadTrigger on Lead (before insert, after insert, before update, after update) {
    // TODO: Call new LeadTriggerHandler().run();
}`,
    solution: `// TriggerHandler.cls
public virtual class TriggerHandler {

    public virtual void beforeInsert(List<SObject> newList) {}
    public virtual void afterInsert(List<SObject> newList, Map<Id,SObject> newMap) {}
    public virtual void beforeUpdate(List<SObject> newList, Map<Id,SObject> oldMap) {}
    public virtual void afterUpdate(List<SObject> newList, Map<Id,SObject> newMap, Map<Id,SObject> oldMap) {}

    public void run() {
        if (Trigger.isBefore) {
            if (Trigger.isInsert) {
                beforeInsert(Trigger.new);
            } else if (Trigger.isUpdate) {
                beforeUpdate(Trigger.new, Trigger.oldMap);
            }
        } else if (Trigger.isAfter) {
            if (Trigger.isInsert) {
                afterInsert(Trigger.new, Trigger.newMap);
            } else if (Trigger.isUpdate) {
                afterUpdate(Trigger.new, Trigger.newMap, Trigger.oldMap);
            }
        }
    }
}

// LeadTriggerHandler.cls
public class LeadTriggerHandler extends TriggerHandler {

    public override void beforeInsert(List<SObject> newList) {
        List<Lead> leads = (List<Lead>) newList;
        for (Lead l : leads) {
            if (l.Rating == null) {
                l.Rating = 'Cold';
            }
        }
    }
}

// LeadTrigger.trigger
trigger LeadTrigger on Lead (before insert, after insert, before update, after update) {
    new LeadTriggerHandler().run();
}`,
    hints: [
      "Use `public virtual class TriggerHandler` and `public virtual void beforeInsert(...)` for the base class — virtual allows subclasses to override.",
      "In run(), check Trigger.isBefore first, then Trigger.isInsert / Trigger.isUpdate to call the right method. Pass Trigger.new and Trigger.oldMap as arguments.",
      "In LeadTriggerHandler, cast newList with `List<Lead> leads = (List<Lead>) newList;` before iterating.",
      "The trigger body should be a single line: `new LeadTriggerHandler().run();` — keep all logic in the handler class.",
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Defines virtual class TriggerHandler',
        pattern: 'public\\s+virtual\\s+class\\s+TriggerHandler',
        errorMessage: "Declare `public virtual class TriggerHandler` as the base class.",
        exampleFix: "public virtual class TriggerHandler {",
      },
      {
        id: 'tc2',
        description: 'Defines virtual beforeInsert method',
        pattern: 'public\\s+virtual\\s+void\\s+beforeInsert\\s*\\(',
        errorMessage: "Add `public virtual void beforeInsert(List<SObject> newList)` to TriggerHandler.",
        exampleFix: "public virtual void beforeInsert(List<SObject> newList) {}",
      },
      {
        id: 'tc3',
        description: 'LeadTriggerHandler extends TriggerHandler',
        pattern: 'LeadTriggerHandler\\s+extends\\s+TriggerHandler',
        errorMessage: "Declare `LeadTriggerHandler extends TriggerHandler`.",
        exampleFix: "public class LeadTriggerHandler extends TriggerHandler {",
      },
      {
        id: 'tc4',
        description: 'Casts newList to List<Lead> in override',
        pattern: '\\(List<Lead>\\)\\s*newList',
        errorMessage: "Cast newList to List<Lead> using `(List<Lead>) newList` in your override.",
        exampleFix: "List<Lead> leads = (List<Lead>) newList;",
      },
      {
        id: 'tc5',
        description: "Sets Lead Rating = 'Cold' when null",
        pattern: "Rating\\s*=\\s*'Cold'",
        errorMessage: "Set l.Rating = 'Cold' when l.Rating == null in beforeInsert.",
        exampleFix: "if (l.Rating == null) {\n    l.Rating = 'Cold';\n}",
      },
      {
        id: 'tc6',
        description: 'Trigger calls new LeadTriggerHandler().run()',
        pattern: 'new\\s+LeadTriggerHandler\\s*\\(\\s*\\)\\.run\\s*\\(\\s*\\)',
        errorMessage: "The trigger should call `new LeadTriggerHandler().run();`.",
        exampleFix: "trigger LeadTrigger on Lead (before insert, after insert, before update, after update) {\n    new LeadTriggerHandler().run();\n}",
      },
    ],
  },

  {
    id: 'mission-batch-apex',
    title: 'Build a Batch Apex Job',
    company: 'DataPurge Ltd.',
    description: 'Build a Batch Apex class that archives old leads in chunks and emails a completion summary.',
    scenario: `DataPurge's data team opened a Jira ticket:

"We have millions of old, unconverted leads clogging up our org. We need a Batch Apex job that:

1. Queries leads created more than 2 years ago that have NOT been converted (IsConverted = false)
2. Sets their Status to 'Archived'
3. Updates them in chunks of 200 (the batch size)
4. Tracks how many total leads were archived across all batches (use Database.Stateful)
5. When done, sends an email to ops@datapurge.com with subject 'Archive Job Complete' and a body saying how many leads were archived

Use Database.update with allOrNone=false so one bad record doesn't fail the whole batch."`,
    requirements: [
      'Create class ArchiveOldLeadsJob implements Database.Batchable<SObject>, Database.Stateful',
      'Declare a stateful Integer archivedCount = 0; to accumulate across batches',
      "Implement start() returning Database.getQueryLocator('SELECT Id, Status FROM Lead WHERE IsConverted = false AND CreatedDate < :cutoff')",
      "Implement execute() — set Status = 'Archived', call Database.update(scope, false), increment archivedCount",
      "Implement finish() — send email via Messaging.SingleEmailMessage with subject 'Archive Job Complete'",
    ],
    difficulty: 'advanced',
    skills: ['Batch Apex', 'Database.Batchable', 'Stateful', 'Email', 'SOQL'],
    estimatedHours: 5,
    starterCode: `public class ArchiveOldLeadsJob
    implements Database.Batchable<SObject>, Database.Stateful {

    // TODO: Declare stateful counter
    public Integer archivedCount = 0;

    public Database.QueryLocator start(Database.BatchableContext bc) {
        // TODO: Calculate cutoff date (2 years ago)
        // TODO: Return query locator for old, unconverted leads
        Date cutoff = Date.today().addYears(-2);
        return Database.getQueryLocator(
            'SELECT Id, Status FROM Lead WHERE IsConverted = false' // TODO: add CreatedDate filter
        );
    }

    public void execute(Database.BatchableContext bc, List<SObject> scope) {
        // TODO: Cast scope to List<Lead>
        // TODO: Set Status = 'Archived' on each lead
        // TODO: Call Database.update(leads, false)
        // TODO: Increment archivedCount
    }

    public void finish(Database.BatchableContext bc) {
        // TODO: Build and send completion email
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        // TODO: Set toAddresses, subject, plainTextBody
        // TODO: Messaging.sendEmail(new List<Messaging.SingleEmailMessage>{ mail });
    }
}`,
    solution: `public class ArchiveOldLeadsJob
    implements Database.Batchable<SObject>, Database.Stateful {

    public Integer archivedCount = 0;

    public Database.QueryLocator start(Database.BatchableContext bc) {
        Date cutoff = Date.today().addYears(-2);
        return Database.getQueryLocator(
            'SELECT Id, Status FROM Lead WHERE IsConverted = false AND CreatedDate < :cutoff'
        );
    }

    public void execute(Database.BatchableContext bc, List<SObject> scope) {
        List<Lead> leads = (List<Lead>) scope;
        for (Lead l : leads) {
            l.Status = 'Archived';
        }
        Database.update(leads, false);
        archivedCount += leads.size();
    }

    public void finish(Database.BatchableContext bc) {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new List<String>{ 'ops@datapurge.com' });
        mail.setSubject('Archive Job Complete');
        mail.setPlainTextBody('Archive job completed. Total leads archived: ' + archivedCount);
        Messaging.sendEmail(new List<Messaging.SingleEmailMessage>{ mail });
    }
}`,
    hints: [
      "implements Database.Batchable<SObject>, Database.Stateful — both are required. Database.Stateful preserves instance variables across batches.",
      "In start(), use `Date cutoff = Date.today().addYears(-2);` and reference it in the SOQL string as `:cutoff`.",
      "In execute(), cast the scope: `List<Lead> leads = (List<Lead>) scope;`, loop to set Status, then `Database.update(leads, false)` for partial success.",
      "In finish(), create a Messaging.SingleEmailMessage, call setToAddresses(), setSubject(), setPlainTextBody(), then Messaging.sendEmail().",
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Implements Database.Batchable and Database.Stateful',
        pattern: 'implements\\s+Database\\.Batchable.*Database\\.Stateful|implements\\s+Database\\.Stateful.*Database\\.Batchable',
        errorMessage: "Class must implement both Database.Batchable<SObject> and Database.Stateful.",
        exampleFix: "public class ArchiveOldLeadsJob\n    implements Database.Batchable<SObject>, Database.Stateful {",
      },
      {
        id: 'tc2',
        description: 'Declares stateful archivedCount variable',
        pattern: 'Integer\\s+archivedCount',
        errorMessage: "Declare a stateful `public Integer archivedCount = 0;` instance variable.",
        exampleFix: "public Integer archivedCount = 0;",
      },
      {
        id: 'tc3',
        description: 'start() uses Database.getQueryLocator',
        pattern: 'Database\\.getQueryLocator\\s*\\(',
        errorMessage: "Use Database.getQueryLocator() in start() to return the batch query.",
        exampleFix: "return Database.getQueryLocator(\n    'SELECT Id, Status FROM Lead WHERE IsConverted = false AND CreatedDate < :cutoff'\n);",
      },
      {
        id: 'tc4',
        description: "execute() sets Status = 'Archived'",
        pattern: "Status\\s*=\\s*'Archived'",
        errorMessage: "Set l.Status = 'Archived' in execute().",
        exampleFix: "for (Lead l : leads) {\n    l.Status = 'Archived';\n}",
      },
      {
        id: 'tc5',
        description: "finish() sends email with subject 'Archive Job Complete'",
        pattern: "'Archive Job Complete'",
        errorMessage: "Set the email subject to 'Archive Job Complete' in finish().",
        exampleFix: "mail.setSubject('Archive Job Complete');",
      },
      {
        id: 'tc6',
        description: 'Uses Database.update with allOrNone=false',
        pattern: 'Database\\.update\\s*\\(.*false',
        errorMessage: "Call Database.update(leads, false) for partial-success DML.",
        exampleFix: "Database.update(leads, false);",
      },
    ],
  },

  {
    id: 'mission-queueable-chain',
    title: 'Queueable Apex Chain',
    company: 'AsyncFlow Inc.',
    description: 'Build a three-step async Queueable chain that processes leads through normalization, territory assignment, and scoring.',
    scenario: `AsyncFlow's architect described the lead enrichment pipeline:

"We hit governor limits processing leads synchronously. I need three Queueable jobs that chain together:

Step 1 — NormalizeLeadsJob: Trims and capitalizes FirstName and LastName (title case — first letter upper, rest lower). Chains to Step 2.

Step 2 — TerritoryAssignJob: Sets Lead.Territory__c based on Lead.Country (US → 'Americas', UK/DE/FR → 'EMEA', else → 'APAC'). Chains to Step 3.

Step 3 — LeadScoringJob: Sets Lead.Score__c to 10 × number of non-null standard fields (FirstName, LastName, Email, Phone, Company, Title, Country). No further chaining.

Each job receives a List<Id> of lead IDs in its constructor and re-queries the records it needs."`,
    requirements: [
      'Create class NormalizeLeadsJob implements Queueable; constructor accepts List<Id> leadIds',
      'In execute(), query Leads, normalize FirstName/LastName to title case, update, then chain to new TerritoryAssignJob(leadIds)',
      'Create class TerritoryAssignJob implements Queueable; set Territory__c based on Country, chain to LeadScoringJob',
      'Create class LeadScoringJob implements Queueable; count non-null fields and set Score__c = count * 10',
      'Use System.enqueueJob() to chain each job to the next',
    ],
    difficulty: 'advanced',
    skills: ['Queueable Apex', 'Async Processing', 'Chaining', 'SOQL', 'DML'],
    estimatedHours: 5,
    starterCode: `public class NormalizeLeadsJob implements Queueable {

    private List<Id> leadIds;

    public NormalizeLeadsJob(List<Id> leadIds) {
        this.leadIds = leadIds;
    }

    public void execute(QueueableContext ctx) {
        // TODO: Query leads by leadIds
        // TODO: Normalize FirstName and LastName to title case
        //       titleCase(s) = s.substring(0,1).toUpperCase() + s.substring(1).toLowerCase()
        // TODO: Update leads
        // TODO: System.enqueueJob(new TerritoryAssignJob(leadIds))
    }
}

public class TerritoryAssignJob implements Queueable {

    private List<Id> leadIds;

    public TerritoryAssignJob(List<Id> leadIds) {
        this.leadIds = leadIds;
    }

    public void execute(QueueableContext ctx) {
        // TODO: Query leads
        // TODO: Set Territory__c: US → 'Americas', UK/DE/FR → 'EMEA', else → 'APAC'
        // TODO: Update leads
        // TODO: Chain to LeadScoringJob
    }
}

public class LeadScoringJob implements Queueable {

    private List<Id> leadIds;

    public LeadScoringJob(List<Id> leadIds) {
        this.leadIds = leadIds;
    }

    public void execute(QueueableContext ctx) {
        // TODO: Query leads
        // TODO: Count non-null fields: FirstName, LastName, Email, Phone, Company, Title, Country
        // TODO: Set Score__c = count * 10
        // TODO: Update leads (no chaining after this)
    }
}`,
    solution: `public class NormalizeLeadsJob implements Queueable {

    private List<Id> leadIds;

    public NormalizeLeadsJob(List<Id> leadIds) {
        this.leadIds = leadIds;
    }

    public void execute(QueueableContext ctx) {
        List<Lead> leads = [SELECT Id, FirstName, LastName FROM Lead WHERE Id IN :leadIds];
        for (Lead l : leads) {
            if (String.isNotBlank(l.FirstName)) {
                l.FirstName = l.FirstName.substring(0,1).toUpperCase() + l.FirstName.substring(1).toLowerCase();
            }
            if (String.isNotBlank(l.LastName)) {
                l.LastName = l.LastName.substring(0,1).toUpperCase() + l.LastName.substring(1).toLowerCase();
            }
        }
        update leads;
        System.enqueueJob(new TerritoryAssignJob(leadIds));
    }
}

public class TerritoryAssignJob implements Queueable {

    private List<Id> leadIds;

    public TerritoryAssignJob(List<Id> leadIds) {
        this.leadIds = leadIds;
    }

    public void execute(QueueableContext ctx) {
        List<Lead> leads = [SELECT Id, Country FROM Lead WHERE Id IN :leadIds];
        Set<String> emea = new Set<String>{'UK', 'DE', 'FR'};
        for (Lead l : leads) {
            if (l.Country == 'US') {
                l.Territory__c = 'Americas';
            } else if (emea.contains(l.Country)) {
                l.Territory__c = 'EMEA';
            } else {
                l.Territory__c = 'APAC';
            }
        }
        update leads;
        System.enqueueJob(new LeadScoringJob(leadIds));
    }
}

public class LeadScoringJob implements Queueable {

    private List<Id> leadIds;

    public LeadScoringJob(List<Id> leadIds) {
        this.leadIds = leadIds;
    }

    public void execute(QueueableContext ctx) {
        List<Lead> leads = [SELECT Id, FirstName, LastName, Email, Phone, Company, Title, Country FROM Lead WHERE Id IN :leadIds];
        for (Lead l : leads) {
            Integer count = 0;
            if (String.isNotBlank(l.FirstName)) count++;
            if (String.isNotBlank(l.LastName))  count++;
            if (String.isNotBlank(l.Email))     count++;
            if (String.isNotBlank(l.Phone))     count++;
            if (String.isNotBlank(l.Company))   count++;
            if (String.isNotBlank(l.Title))     count++;
            if (String.isNotBlank(l.Country))   count++;
            l.Score__c = count * 10;
        }
        update leads;
    }
}`,
    hints: [
      "Each Queueable class needs a constructor that stores the leadIds List<Id> as an instance variable.",
      "Title case: `s.substring(0,1).toUpperCase() + s.substring(1).toLowerCase()` — apply to both FirstName and LastName.",
      "To chain jobs: `System.enqueueJob(new TerritoryAssignJob(leadIds));` at the end of execute().",
      "In LeadScoringJob, increment a counter for each non-blank field and multiply by 10 for the score.",
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'NormalizeLeadsJob implements Queueable',
        pattern: 'NormalizeLeadsJob\\s+implements\\s+Queueable',
        errorMessage: "Declare `NormalizeLeadsJob implements Queueable`.",
        exampleFix: "public class NormalizeLeadsJob implements Queueable {",
      },
      {
        id: 'tc2',
        description: 'Title case normalization uses substring and toUpperCase',
        pattern: 'substring\\s*\\(\\s*0\\s*,\\s*1\\s*\\)\\.toUpperCase',
        errorMessage: "Normalize to title case with: s.substring(0,1).toUpperCase() + s.substring(1).toLowerCase()",
        exampleFix: "l.FirstName = l.FirstName.substring(0,1).toUpperCase() + l.FirstName.substring(1).toLowerCase();",
      },
      {
        id: 'tc3',
        description: 'NormalizeLeadsJob chains to TerritoryAssignJob',
        pattern: 'System\\.enqueueJob\\s*\\(\\s*new\\s+TerritoryAssignJob',
        errorMessage: "Chain to the next step with System.enqueueJob(new TerritoryAssignJob(leadIds)).",
        exampleFix: "System.enqueueJob(new TerritoryAssignJob(leadIds));",
      },
      {
        id: 'tc4',
        description: 'TerritoryAssignJob sets Territory__c',
        pattern: 'Territory__c',
        errorMessage: "TerritoryAssignJob must set the Territory__c custom field.",
        exampleFix: "l.Territory__c = 'Americas'; // or 'EMEA' or 'APAC'",
      },
      {
        id: 'tc5',
        description: 'LeadScoringJob sets Score__c = count * 10',
        pattern: 'Score__c\\s*=\\s*count\\s*\\*\\s*10|Score__c\\s*=\\s*\\w+\\s*\\*\\s*10',
        errorMessage: "Set l.Score__c = count * 10 in LeadScoringJob.",
        exampleFix: "l.Score__c = count * 10;",
      },
    ],
  },

  {
    id: 'mission-rest-api',
    title: 'Build a REST API Endpoint',
    company: 'IntegrateNow Corp',
    description: 'Build a Salesforce REST API endpoint that returns account health data as JSON to external systems.',
    scenario: `IntegrateNow's integration architect sent over the API spec:

"We need a custom REST endpoint that external systems can call to fetch account health data. The endpoint:

- URL: /services/apexrest/account-health/
- Method: GET
- Query param: accountId
- Response: JSON with accountName, healthScore (100 - 15 × openCases, minimum 0), openCasesCount, status ('Healthy' if score >= 60, 'At Risk' otherwise)
- If account not found: HTTP 404

Wrap the response in a simple inner class — Salesforce will serialize it to JSON automatically."`,
    requirements: [
      "Create class AccountHealthAPI annotated with @RestResource(urlMapping='/account-health/*')",
      '@HttpGet method getAccountHealth() reads accountId from RestContext.request.params',
      "Query Account by Id; if not found set RestContext.response.statusCode = 404 and return null",
      'Count open Cases for the account (Status != \'Closed\')',
      "Return HealthResponse inner class with: String accountName, Integer healthScore, Integer openCasesCount, String status ('Healthy'/'At Risk')",
    ],
    difficulty: 'advanced',
    skills: ['REST API', '@RestResource', 'RestContext', 'JSON', 'SOQL'],
    estimatedHours: 5,
    starterCode: `@RestResource(urlMapping='/account-health/*')
global class AccountHealthAPI {

    global class HealthResponse {
        public String accountName;
        public Integer healthScore;
        public Integer openCasesCount;
        public String status;

        public HealthResponse(String name, Integer score, Integer cases) {
            this.accountName = name;
            this.healthScore = score;
            this.openCasesCount = cases;
            this.status = score >= 60 ? 'Healthy' : 'At Risk';
        }
    }

    @HttpGet
    global static HealthResponse getAccountHealth() {
        // TODO: Read accountId from RestContext.request.params.get('accountId')
        // TODO: Query Account — if not found, set 404 and return null
        // TODO: Count open Cases (Status != 'Closed') for the account
        // TODO: Calculate healthScore = Math.max(0, 100 - 15 * openCases)
        // TODO: Return new HealthResponse(...)
        return null;
    }
}`,
    solution: `@RestResource(urlMapping='/account-health/*')
global class AccountHealthAPI {

    global class HealthResponse {
        public String accountName;
        public Integer healthScore;
        public Integer openCasesCount;
        public String status;

        public HealthResponse(String name, Integer score, Integer cases) {
            this.accountName = name;
            this.healthScore = score;
            this.openCasesCount = cases;
            this.status = score >= 60 ? 'Healthy' : 'At Risk';
        }
    }

    @HttpGet
    global static HealthResponse getAccountHealth() {
        String accountId = RestContext.request.params.get('accountId');

        List<Account> accounts = [SELECT Id, Name FROM Account WHERE Id = :accountId LIMIT 1];
        if (accounts.isEmpty()) {
            RestContext.response.statusCode = 404;
            return null;
        }

        Account acct = accounts[0];
        Integer openCases = [SELECT COUNT() FROM Case WHERE AccountId = :acct.Id AND Status != 'Closed'];
        Integer healthScore = Math.max(0, 100 - 15 * openCases);

        return new HealthResponse(acct.Name, healthScore, openCases);
    }
}`,
    hints: [
      "Read the query param with: `String accountId = RestContext.request.params.get('accountId');`",
      "Query with LIMIT 1 and check .isEmpty() — never assume an Id query returns a row.",
      "Set a 404 with: `RestContext.response.statusCode = 404;` before returning null.",
      "Count open cases with an aggregate: `[SELECT COUNT() FROM Case WHERE AccountId = :acct.Id AND Status != 'Closed']`",
    ],
    testCases: [
      {
        id: 'tc1',
        description: "Class annotated with @RestResource(urlMapping='/account-health/*')",
        pattern: "@RestResource\\s*\\(\\s*urlMapping\\s*=\\s*'/account-health",
        errorMessage: "Add @RestResource(urlMapping='/account-health/*') annotation to the class.",
        exampleFix: "@RestResource(urlMapping='/account-health/*')\nglobal class AccountHealthAPI {",
      },
      {
        id: 'tc2',
        description: 'getAccountHealth method annotated with @HttpGet',
        pattern: '@HttpGet',
        errorMessage: "Annotate the getAccountHealth() method with @HttpGet.",
        exampleFix: "@HttpGet\nglobal static HealthResponse getAccountHealth() {",
      },
      {
        id: 'tc3',
        description: 'Reads accountId from RestContext.request.params',
        pattern: 'RestContext\\.request\\.params\\.get\\s*\\(',
        errorMessage: "Read the query param with RestContext.request.params.get('accountId').",
        exampleFix: "String accountId = RestContext.request.params.get('accountId');",
      },
      {
        id: 'tc4',
        description: 'Sets HTTP 404 when account not found',
        pattern: 'RestContext\\.response\\.statusCode\\s*=\\s*404',
        errorMessage: "Set RestContext.response.statusCode = 404 when the account is not found.",
        exampleFix: "if (accounts.isEmpty()) {\n    RestContext.response.statusCode = 404;\n    return null;\n}",
      },
      {
        id: 'tc5',
        description: 'Calculates healthScore with Math.max(0, ...)',
        pattern: 'Math\\.max\\s*\\(\\s*0',
        errorMessage: "Calculate healthScore as Math.max(0, 100 - 15 * openCases) to avoid negative scores.",
        exampleFix: "Integer healthScore = Math.max(0, 100 - 15 * openCases);",
      },
    ],
  },

  {
    id: 'mission-platform-events',
    title: 'Platform Event Publisher & Subscriber',
    company: 'EventDriven Systems',
    description: 'Build both sides of a platform event system: an Opportunity publisher and an Order trigger subscriber.',
    scenario: `EventDriven's integration lead outlined the event-driven architecture:

"When an Opportunity closes as Won, we want to decouple the order creation process using Platform Events. Here's the design:

1. Order_Created__e platform event (already defined) has fields: OpportunityId__c (Text), AccountId__c (Text), Amount__c (Number), Stage__c (Text).
2. A publisher class reads an Opportunity and publishes the event using EventBus.publish(). It should check whether the publish succeeded.
3. A trigger on Order_Created__e (after insert) calls a service class that creates Order__c records from the event data."`,
    requirements: [
      'Create class OpportunityEventPublisher with method publishOrderEvent(Opportunity opp) that creates and publishes Order_Created__e',
      'Set all four event fields (OpportunityId__c, AccountId__c, Amount__c, Stage__c) from the Opportunity',
      'Check EventBus.publish() result: if !result.isSuccess() throw an exception with the error message',
      'Create trigger OrderCreatedHandler on Order_Created__e (after insert) that calls OrderEventService.handleEvents(Trigger.new)',
      'Create class OrderEventService with method handleEvents(List<Order_Created__e> events) that creates Order__c records',
    ],
    difficulty: 'advanced',
    skills: ['Platform Events', 'EventBus', 'Triggers', 'DML', 'Error Handling'],
    estimatedHours: 5,
    starterCode: `// OpportunityEventPublisher.cls
public class OpportunityEventPublisher {

    public static void publishOrderEvent(Opportunity opp) {
        // TODO: Create Order_Created__e instance
        // TODO: Set OpportunityId__c, AccountId__c, Amount__c, Stage__c
        // TODO: Call EventBus.publish(event)
        // TODO: Check result.isSuccess() — throw exception if failed
    }
}

// OrderEventService.cls
public class OrderEventService {

    public static void handleEvents(List<Order_Created__e> events) {
        List<Order__c> orders = new List<Order__c>();
        for (Order_Created__e event : events) {
            // TODO: Create an Order__c from each event's fields
            // Map: OpportunityId__c → Opportunity__c, AccountId__c → Account__c (lookup IDs)
            //      Amount__c → Amount__c, Stage__c → Status__c
        }
        // TODO: insert orders
    }
}

// OrderCreatedHandler.trigger
trigger OrderCreatedHandler on Order_Created__e (after insert) {
    // TODO: Call OrderEventService.handleEvents(Trigger.new)
}`,
    solution: `// OpportunityEventPublisher.cls
public class OpportunityEventPublisher {

    public static void publishOrderEvent(Opportunity opp) {
        Order_Created__e event = new Order_Created__e(
            OpportunityId__c = opp.Id,
            AccountId__c     = opp.AccountId,
            Amount__c        = opp.Amount,
            Stage__c         = opp.StageName
        );

        Database.SaveResult result = EventBus.publish(event);
        if (!result.isSuccess()) {
            throw new AuraHandledException('Failed to publish Order_Created__e: '
                + result.getErrors()[0].getMessage());
        }
    }
}

// OrderEventService.cls
public class OrderEventService {

    public static void handleEvents(List<Order_Created__e> events) {
        List<Order__c> orders = new List<Order__c>();
        for (Order_Created__e event : events) {
            orders.add(new Order__c(
                Opportunity__c = event.OpportunityId__c,
                Account__c     = event.AccountId__c,
                Amount__c      = event.Amount__c,
                Status__c      = event.Stage__c
            ));
        }
        insert orders;
    }
}

// OrderCreatedHandler.trigger
trigger OrderCreatedHandler on Order_Created__e (after insert) {
    OrderEventService.handleEvents(Trigger.new);
}`,
    hints: [
      "Create the event: `Order_Created__e event = new Order_Created__e(OpportunityId__c = opp.Id, ...);`",
      "EventBus.publish() returns a Database.SaveResult. Check result.isSuccess() — if false, read result.getErrors()[0].getMessage().",
      "The trigger on a platform event uses `after insert` context only — platform events don't support before insert.",
      "In handleEvents(), map event fields to Order__c fields and collect in a list, then do a single bulk insert outside the loop.",
    ],
    testCases: [
      {
        id: 'tc1',
        description: 'Defines class OpportunityEventPublisher',
        pattern: 'public\\s+class\\s+OpportunityEventPublisher',
        errorMessage: "Class must be named exactly `OpportunityEventPublisher`.",
        exampleFix: "public class OpportunityEventPublisher {",
      },
      {
        id: 'tc2',
        description: 'Creates and publishes Order_Created__e event',
        pattern: 'new\\s+Order_Created__e\\s*\\(',
        errorMessage: "Create the platform event with `new Order_Created__e(...)` and populate its fields.",
        exampleFix: "Order_Created__e event = new Order_Created__e(\n    OpportunityId__c = opp.Id,\n    AccountId__c = opp.AccountId,\n    Amount__c = opp.Amount,\n    Stage__c = opp.StageName\n);",
      },
      {
        id: 'tc3',
        description: 'Uses EventBus.publish() to send the event',
        pattern: 'EventBus\\.publish\\s*\\(',
        errorMessage: "Publish the event with EventBus.publish(event).",
        exampleFix: "Database.SaveResult result = EventBus.publish(event);",
      },
      {
        id: 'tc4',
        description: 'Checks publish result with isSuccess()',
        pattern: '\\.isSuccess\\s*\\(\\s*\\)',
        errorMessage: "Check the publish result: if (!result.isSuccess()) throw an exception.",
        exampleFix: "if (!result.isSuccess()) {\n    throw new AuraHandledException('Publish failed: ' + result.getErrors()[0].getMessage());\n}",
      },
      {
        id: 'tc5',
        description: 'Trigger calls OrderEventService.handleEvents',
        pattern: 'OrderEventService\\.handleEvents\\s*\\(',
        errorMessage: "The trigger must call `OrderEventService.handleEvents(Trigger.new)`.",
        exampleFix: "trigger OrderCreatedHandler on Order_Created__e (after insert) {\n    OrderEventService.handleEvents(Trigger.new);\n}",
      },
      {
        id: 'tc6',
        description: 'handleEvents inserts Order__c records',
        pattern: 'insert\\s+orders',
        errorMessage: "Bulk insert the Order__c records with `insert orders;` after the loop.",
        exampleFix: "List<Order__c> orders = new List<Order__c>();\nfor (Order_Created__e event : events) {\n    orders.add(new Order__c(...));\n}\ninsert orders;",
      },
    ],
  },
];

export const getMissionById = (id: string) => missions.find(m => m.id === id);
