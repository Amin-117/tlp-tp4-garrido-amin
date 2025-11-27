let orderStatus: "pending" | "shipped" | "delivered";
orderStatus = "shipped";

enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}

function logMessage(level: LogLevel, message: string): void {
  console.log(`[${level}] ${message}`);
}

logMessage(LogLevel.Warning, "Stock bajo");
