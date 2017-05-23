import {Component} from '@angular/core';
import * as moment from 'moment';

export enum Sex {
    male,
    female
}

interface Athlete {
    id: number;
    name: Name;
    avatarId: number;
    sex: Sex;
}

interface Name {
    first: string;
    last: string;
}

@Component({
    templateUrl: './kiosk.component.html',
    styleUrls: ['../app.component.css', './kiosk.component.css']
})
export class KioskComponent {
    classSections = [
        {display: "Strength", value: "strength"},
        {display: "WOD", value: "wod"}
    ];
    athletes: Athlete[] = [
        {
            id: 1,
            name: {first: "Matt", last: "Kitzi"},
            avatarId: 1,
            sex: Sex.male
        },
        {
            id: 2,
            name: {first: "Libby", last: "Cowgill"},
            avatarId: 2,
            sex: Sex.female
        },
        {
            id: 3,
            name: {first: "Jessica", last: "Kohler"},
            avatarId: 3,
            sex: Sex.female
        },
        {
            id: 4,
            name: {first: "Chris", last: "Wolf"},
            avatarId: 4,
            sex: Sex.male
        },
        {
            id: 5,
            name: {first: "Matt", last: "Keel"},
            avatarId: 5,
            sex: Sex.male
        },
        {
            id: 6,
            name: {first: "Mitch", last: "Stout"},
            avatarId: 6,
            sex: Sex.male
        },
    ];
    classTimes: Date[] = [
        moment().hour(5).minute(30).toDate(),
        moment().hour(6).minute(30).toDate(),
        moment().hour(9).minute(0).toDate(),
        moment().hour(16).minute(30).toDate(),
        moment().hour(17).minute(30).toDate(),
        moment().hour(18).minute(30).toDate()
    ];
    maleAthletes: Athlete[];
    femaleAthletes: Athlete[];
    selectedMaleClassTime: any;
    selectedFemaleClassTime: any;
    selectedFemaleSection: any;
    selectedMaleSection: any;

    constructor() {
        this.separateAthletesByGender();
        this.selectedFemaleClassTime = this.classTimes[0];
        this.selectedMaleClassTime = this.classTimes[0];
        this.selectedFemaleSection = this.classSections[0];
        this.selectedMaleSection = this.classSections[0];
    }

    separateAthletesByGender() {
        this.maleAthletes = this.athletes.filter(athlete => athlete.sex === Sex.male).sort(this.sortAthletesByName);
        this.femaleAthletes = this.athletes.filter(athlete => athlete.sex === Sex.female).sort(this.sortAthletesByName);
    }

    private sortAthletesByName(first, second): number {
        const firstFullName = `${first.name.first} ${first.name.last}`;
        const secondFullName = `${second.name.first} ${second.name.last}`;
        if (firstFullName > secondFullName) {
            return 1;
        }
        else if (secondFullName > firstFullName) {
            return -1;
        }
        return 0;
    }
}
