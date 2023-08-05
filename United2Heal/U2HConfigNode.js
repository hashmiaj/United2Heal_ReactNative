//U2HConfigNode.js is used to set global variables that can be reused throughout the app. 

export let VolunteerName = '';
export let GroupName = '';
export let UserRole = '';

export function getVolunteerName() {
    return this.VolunteerName;
}
export function setVolunteerName(newVolunteerName) {
    this.VolunteerName = newVolunteerName;
}

export function getGroupName() {
    return this.GroupName;
}
export function setGroupName(newGroupName) {
    this.GroupName = newGroupName;
}

export function getUserRole() {
    return this.UserRole;
}
export function setUserRole(newUserRole) {
    this.UserRole = newUserRole;
}