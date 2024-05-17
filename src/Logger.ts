export class Logger {
    private static loggerMap = new Map<string, Logger>();

    private constructor(private readonly className: string) {}

    public static getLogger(className: string): Logger {
        if (!this.loggerMap.has(className)) {
            this.loggerMap.set(className, new Logger(className));
        }
        return this.loggerMap.get(className)!;
    }

    public debug(...message: unknown[]): void {
        const logLevel = this.readLogLevel();

        if (logLevel === 'debug') {
            console.log(
                `%cDEBUG%c ${this.className}:`,
                'color: #888; background-color: orange; padding: 0.2em; border-radius: 0.2em',
                'color: initial',
                ...message,
            );
        }
    }

    public error(...message: unknown[]): void {
        const logLevel = this.readLogLevel();
        if (logLevel === 'debug' || logLevel === 'info' || logLevel === 'warn' || logLevel === 'error') {
            console.error(
                `%cERROR%c ${this.className}:`,
                'color: #fff; background-color: red; padding: 0.2em; border-radius: 0.2em',
                'color: initial',
                ...message,
            );
        }
    }

    public warn(...message: unknown[]): void {
        const logLevel = this.readLogLevel();
        if (logLevel === 'debug' || logLevel === 'info' || logLevel === 'warn') {
            console.warn(
                `%cWARN%c ${this.className}:`,
                'color: #fff; background-color: orange; padding: 0.2em; border-radius: 0.2em',
                'color: initial',
                ...message,
            );
        }
    }

    public info(...message: unknown[]): void {
        const logLevel = this.readLogLevel();
        if (logLevel === 'debug' || logLevel === 'info') {
            console.info(
                `%cINFO%c ${this.className}:`,
                'color: #fbb; background-color: #04b; padding: 0.2em; border-radius: 0.2em',
                'color: initial',
                ...message,
            );
        }
    }

    private readLogLevel() {
        return ENV?.LOG_LEVEL ?? 'debug';
    }
}
