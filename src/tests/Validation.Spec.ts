import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test the endpoint responses', (): void => {
	it('test the endpoint /Photo/?filename=NotAnImage', async (): Promise<void> => {
		const response = await request.get('/Photo/?filename=NotAnImage'); 
		expect(response.status).toBe(404);
		expect(response.text).toBe('image not found');
	});

	it('test the endpoint /Photo/?filename=Jnoot0', async (): Promise<void> => {
		const response = await request.get('/Photo/?filename=Jnoot0');
		expect(response.status).toBe(404);
	});

	it('test the endpoint /Photo/?filename=Jnoot0&width=300', async (): Promise<void> => {
		const response = await request.get('/Photo/?filename=Jnoot0&width=300');
		expect(response.status).toBe(404);
		expect(response.text).toBe('parameters width and height should be used together', );
	});

	it('test the endpoint /Photo/?filename=Jnoot0&height=200', async (): Promise<void> => {
		const response = await request.get('/Photo/?filename=Jnoot0&height=200');
		expect(response.status).toBe(404);
		expect(response.text).toBe(
			'parameters width and height should be used together',
		);
	});

	it('test the endpoint /Photo/?filename=Jnoot0&width=300&height=200', async (): Promise<void> => {
		const response = await request.get(
			'/Photo/?filename=Jnoot0&width=300&height=200',
		);
		expect(response.status).toBe(404);
	});

	it('test the endpoint /Photo/?filename=Jnoot0&width=300&height=ffff', async (): Promise<void> => {
		const response = await request.get(
			'/Photo/?filename=Jnoot0&width=300&height=ffff',
		);
		expect(response.status).toBe(404);
		expect(response.text).toBe('height value must be a number');
	});

	it('test the endpoint /Photo/?filename=Jnoot0&width=ffff&height=200', async (): Promise<void> => {
		const response = await request.get(
			'/Photo/?filename=Jnoot0&width=ffff&height=200',
		);
		expect(response.status).toBe(404);
		expect(response.text).toBe('width value must be a number');
	});

	it('test the endpoint /Photo/?filename=Jnoot0&width=-100&height=200', async (): Promise<void> => {
		const response = await request.get(
			'/Photo/?filename=Jnoot0&width=-100&height=200',
		);
		expect(response.status).toBe(404);
		expect(response.text).toBe('width value must be a positive number');
	});

	it('test the endpoint /Photo/?filename=Jnoot0&width=300&height=-200', async (): Promise<void> => {
		const response = await request.get(
			'/Photo/?filename=Jnoot0&width=300&height=-200',
		);
		expect(response.status).toBe(404);
		expect(response.text).toBe('height value must be a positive number');
	});
});