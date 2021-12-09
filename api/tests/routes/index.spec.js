/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const chai = require("chai");
const session = require('supertest-session');
const app = require('../../src/app.js');

chai.should()//assertions 
const agent = session(app);

describe("TestBack", () => {


  describe("GET /", () => {
    it("responds with 200", () => agent.get("/recipes/").expect(200));

    it("it should bring 100 elements", () =>
      agent.get("/recipes/").then((res) => {
        expect(res.body.length).to.equal(100);
      }));
  });
});


