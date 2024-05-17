# @juwel-development/beautiful-logger

This is just console.log but a little more colorful.

## Installation

```bash
npm install @juwel-development/beautiful-logger
```

## Usage

You can set a global environment variable to define the log level. The default log level is `debug`.

We have the following log levels:

- `debug`
- `info`
- `warn`
- `error`

```typescript
window.ENV.LOG_LEVEL = 'debug';
```

### Log a message

Inspired by libraries like `log4j` you need to call a static method on the `Logger` class to get a logger instance.

```typescript
Logger.getLogger("MyClassName").info("Hello World");
```