/// <reference types="jest"/>

import User from '../src/models/User'

test("creating an anonymous user", () => {
    var anonymousUser = new User()
    expect(anonymousUser.name).toBe("anonymous")
})

test("creating a named user", () => {
    var namedUser = new User("Amir Eldor");
    expect(namedUser.name).toBe("Amir Eldor")
})

test("setting a new name for a user", () => {
    var namedUser = new User("Amir Eldor")
    namedUser.name = "Bambeer Kalupo"
    expect(namedUser.name).toBe("Bambeer Kalupo")
})