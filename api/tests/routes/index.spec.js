/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const chai = require("chai");
const session = require('supertest-session');
const app = require('../../src/app.js');

chai.should()
const agent = session(app);

describe("Test", () => {


  describe("GET /", () => {
    it("responds with 200", () => agent.get("/recipes/").expect(200));

    it("it should bring 100 elements", () =>
      agent.get("/recipes/").then((res) => {
        expect(res.body.length).to.equal(100);
      }));
  });
});

// let chai = require('chai');
// let chaiHttp = require('chai-http');

// let server = require('../../src/routes/index')


// //assertions style for chai
// chai.should()
// chai.use(chaiHttp);

// describe('recipesAPI' ,()=>{


//   describe('GET /recipes/',() => {
//     it('It should get all the recipes',(done)=>{
//       chai.request(server)
//       .get('/recipes/')
//       .end((err, res) =>{
//         res.should.have.status(200);
//         res.body.should.be.a('array');
//         res.boyd.lenght.should.be.eq(100);
//         done();
//       })
//     })
//   })

// })