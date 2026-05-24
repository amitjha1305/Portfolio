import { GOOGLE_SHEET_SCRIPT_URL } from "@/utils/config";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone || !message) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const payload = {
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
      SheetName: "Sheet2",
      sheet_name: "Sheet2",
      tabName: "Sheet2",
      Sheet: "Sheet2",
      sheetNameAlt: "sheet2",
      sheetName: "Sheet2",
      sheetNameProper: "Sheet2",
      sheet: "Sheet2",
      name,
      email,
      phone,
      message,
    };

    const response = await fetch(GOOGLE_SHEET_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    const scriptErrorMatch = text.match(
      /<div style="text-align:center[^>]*>(.*?)<\/div>/s,
    );
    const scriptError = scriptErrorMatch
      ? scriptErrorMatch[1].replace(/<[^>]+>/g, "").trim()
      : null;
    const scriptFailed =
      text.includes("Google Apps Script") &&
      (text.includes("Error") || text.includes("appendRow"));

    if (!response.ok || scriptFailed) {
      return Response.json(
        {
          success: false,
          error: "Apps Script rejected request",
          scriptError,
          sheetResponse: text.slice(0, 500),
        },
        { status: 502 },
      );
    }
    return Response.json({ success: true, sheetResponse: text });
  } catch (error) {
    return Response.json(
      { success: false, error: "Failed to submit form data" },
      { status: 500 },
    );
  }
}
