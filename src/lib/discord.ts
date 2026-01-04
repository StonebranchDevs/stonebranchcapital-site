/**
 * Send a fallback alert to Discord via webhook.
 * This should NEVER throw — it is best-effort only.
 */
export async function notifyDiscord(message: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("Discord webhook URL not configured");
    return;
  }

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
      }),
    });
  } catch (error) {
    console.error("Failed to send Discord webhook alert:", error);
  }
}
