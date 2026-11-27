import express from "express";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const router = express.Router();
export default router;
