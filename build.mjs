// build.mjs
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔨 Starting build process...');

try {
    const vitePath = path.join(process.cwd(), 'node_modules', '.bin', 'vite');
    if (fs.existsSync(vitePath)) {
        try {
            fs.chmodSync(vitePath, '755');
            console.log('✅ Set vite as executable');
        } catch (e) {
            console.log('⚠️ Could not change permissions');
        }
    }

    console.log('🚀 Running Vite build...');
    execSync('node node_modules/vite/bin/vite.js build', {
        stdio: 'inherit',
        env: { ...process.env, NODE_ENV: 'production' }
    });

    console.log('✅ Build completed successfully!');
} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}