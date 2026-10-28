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
];

export const getMissionById = (id: string) => missions.find(m => m.id === id);
