import { Team } from '../../index';

describe('Team class', () => {
    let team;
    let character1;
    let character2;
    let character3;

    beforeEach(() => {
        team = new Team();
        character1 = { name: 'Warrior', level: 1 };
        character2 = { name: 'Mage', level: 2 };
        character3 = { name: 'Archer', level: 3 };
    });

    test('should add a character to the team', () => {
        team.add(character1);
        expect(team.toArray()).toContain(character1);
    });

    test('should throw an error when adding the same character twice', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrow('Персонаж уже добавлен в команду');
    });

    test('should add multiple characters to the team without duplicates', () => {
        team.addAll(character1, character2, character2, character3);
        const teamArray = team.toArray();
        expect(teamArray).toContain(character1);
        expect(teamArray).toContain(character2);
        expect(teamArray).toContain(character3);
        expect(teamArray.length).toBe(3); // Без дублирования
    });

    test('should convert members Set to an array', () => {
        team.add(character1);
        team.add(character2);
        const teamArray = team.toArray();
        expect(Array.isArray(teamArray)).toBe(true);
        expect(teamArray).toEqual(expect.arrayContaining([character1, character2]));
    });
});
