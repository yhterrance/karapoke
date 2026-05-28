import { cpSync, mkdirSync, rmSync } from 'node:fs'

rmSync('dist-site', { recursive: true, force: true })
mkdirSync('dist-site', { recursive: true })
cpSync('site', 'dist-site', { recursive: true })
