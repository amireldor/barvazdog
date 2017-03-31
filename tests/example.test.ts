/// <reference types="jest"/>

test("write my name", () => {
    var lastName: string = "Eldor";
    var myName: string = `Amir ${lastName}`;

    expect(myName === 'Amir Eldor')
})