// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

type LoggerStatus = "ERROR" | "WARN" | "INFO" | "DEBUG";

interface LoggerProps {
  status: LoggerStatus; 
  message: string;      
}

/**
 * Logs a message to the console when DEBUG=true in the .env
 * @param {LoggerProps} props - Object that contains status and message string
*/
const Logger = ({ status, message }: LoggerProps): void => {
    const curretDate = new Date().toUTCString();
    console.log(`${curretDate} [${status}] [Kio-T-Engine]: ${message}`);
};

export default Logger;