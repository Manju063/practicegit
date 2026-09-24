import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

class Classroom {
    constructor(
        private readonly name: string,
        private readonly mathScore: number,
        private readonly scienceScore: number
    ) {}

    private grade(score: number): string {
        if (score >= 90) return "A";
        if (score >= 60) return "Pass";
        return "Fail";
    }

    numerology(): number {
        const letters = this.name.toUpperCase().replace(/[^A-Z]/g, "");
        let total = 0;

        for (const letter of letters) {
            total += ((letter.charCodeAt(0) - "A".charCodeAt(0)) % 9) + 1;
        }

        while (total > 9) {
            total = String(total)
                .split("")
                .reduce((sum, digit) => sum + Number(digit), 0);
        }

        return total;
    }

    calculateResults(): void {
        const overallPercentage = (this.mathScore + this.scienceScore) / 2;

        console.log(`Student Name: ${this.name}`);
        console.log(`Numerology Value: ${this.numerology()}`);
        console.log(`Math Score: ${this.mathScore} - Grade: ${this.grade(this.mathScore)}`);
        console.log(`Science Score: ${this.scienceScore} - Grade: ${this.grade(this.scienceScore)}`);
        console.log(`Overall Percentage: ${overallPercentage.toFixed(2)}%`);
    }
}

const rl = createInterface({ input, output });

async function askQuestion(question: string): Promise<string> {
    return (await rl.question(question)).trim();
}

async function main(): Promise<void> {
    try {
        const studentName = await askQuestion("Enter student name: ");
        const mathInput = await askQuestion("Enter maths score (0-100): ");
        const scienceInput = await askQuestion("Enter science score (0-100): ");

        const mathScore = Number(mathInput);
        const scienceScore = Number(scienceInput);

        if (
            studentName &&
            Number.isFinite(mathScore) &&
            Number.isFinite(scienceScore) &&
            mathScore >= 0 && mathScore <= 100 &&
            scienceScore >= 0 && scienceScore <= 100
        ) {
            const student = new Classroom(studentName, mathScore, scienceScore);
            student.calculateResults();
        } else {
            console.log("Please enter a valid name and scores between 0 and 100.");
        }
    } finally {
        rl.close();
    }
}

main().catch((error) => {
    console.error("Error:", error);
    process.exit(1);
});

