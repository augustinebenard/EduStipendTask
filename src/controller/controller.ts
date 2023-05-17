import axios from 'axios';
import { Response } from 'express';
import { Request } from 'express';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getComments = async (req: Request, res: Response): Promise<Response> => {
    // allow user to enter limit as query parameters e.g /api/comments?limit=10
    const limit = req.query.limit || 10;
    try {
        const comments = await axios.get(`${BASE_URL}/comments?_limit=${limit}`);
        res.json(comments.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch comments' });
    }
}


export const getPosts = async (req: Request, res: Response): Promise<Response> => {
    // allow user to enter limit as query parameters e.g /api/posts?limit=10
    const limit = req.query.limit || 10;
    try {
        const posts = await axios.get(`${BASE_URL}/posts?_limit=${limit}`);
        res.json(posts.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
}