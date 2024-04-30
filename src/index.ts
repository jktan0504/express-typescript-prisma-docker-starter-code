/**
 * index.ts
 *
 * Main Script
 * Interacts with Presentation Layers
 *
 * @author JKDEVELOPER
 * @nickname JK
 * @email jktan0504@hotmail.com
 *
 * @last_update: 30 April 2024
 */
import { APIServer } from './presentations/rest/server';

export const main = async (): Promise<void> => {
    await APIServer.runServer();
};

// Execute main function
main();
