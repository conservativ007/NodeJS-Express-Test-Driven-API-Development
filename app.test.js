const request = require('supertest');
const app = require('./app.js');

describe('Todos API', () => {
  it('GET /todos ---> array of todos', () => {
    return request(app)
      .get('/todos')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
              completed: expect.any(Boolean),
            }),
          ])
        );
      });
  });

  // it('GET /todos/id ---> todos', () => {
  //   return request(app)
  //     .get('/todos/1')
  //     .expect('Contant-Type', /json/)
  //     .expect(200)
  //     .then((response) => {
  //       expect(response.body).toEqual(
  //         expect.objectContaining({
  //           name: expect.any(String),
  //           completed: expect.any(Boolean),
  //         })
  //       );
  //     });
  // });

  // it('GET /todos/id ---> 404 if vot found', () => {
  //   return request(app).get('/todos/999').expect(404);
  // });

  // it('POST /todos ---> create todo', () => {
  //   return request(app)
  //     .post('/todos')
  //     .send({
  //       name: 'do dishes',
  //       // completed: true,
  //     })
  //     .expect('Contant-Type', /json/)
  //     .expect(201)
  //     .then((response) => {
  //       expect(response.body).toEqual(
  //         expect.objectContaining({
  //           name: 'do dishes',
  //           completed: false,
  //         })
  //       );
  //     });
  // });

  // it('GET /todos ---> validates request body', () => {
  //   return request(app).post('/todos').send({ name: 123 }).expect(244);
  // });
});
