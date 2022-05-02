import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test routes', (): void => {
	it('test endpoint /Photo', async (): Promise<void> => {
		const response = await request.get('/Photo');
		expect(response.status).toBe(404);
		expect(response.text).toBe('filename parameter is essential');
	});

	it('tests endpoint /Photo?filename=Jnoot0', async (): Promise<void> => {
		const response = await request.get('/Photo?filename=Jnoot0');
		expect(response.status).toBe(404);
	});

	it('tests endpoint /invalidEndpoint', async (): Promise<void> => {
		const response = await request.get('/invalidEndpoint');
		expect(response.status).toBe(404);
	});
});
