import { Friend, Colleague } from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend): string {
    f.age += 1
    return `${f.name} is now ${f.age}`
}

function allOlder(fs: Friend[]): string[] {
    return fs.map(friend => older(friend));
}

console.log(older(friends[0]))
console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
        (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}

function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
    const maxExtension = cs.length > 0 ? Math.max(...cs.map(c => c.contact.extension)) : 100;
    const newColleague: Colleague = {
        name,
        department,
        contact: {
            email,
            extension: maxExtension + 1,
        }
    };
    cs.push(newColleague);
}

console.log(highestExtension(colleagues.current));

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
