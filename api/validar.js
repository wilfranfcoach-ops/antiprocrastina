export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Método no permitido" });
    }

    // 🔥 ESTA LÍNEA ES LA CLAVE
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const codigo = body?.codigo;

    if (!codigo) {
      return res.status(400).json({ error: "Falta código" });
    }

    // 🧪 TEST (sin Gumroad todavía)
    if (codigo === "_R8g_E9Zue7FcaFGcklNXQ==") {
      return res.status(200).json({ ok: true });
    }

    return res.status(401).json({ ok: false });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno" });
  }

console.log("PRODUCT ID USADO:", "TU_PRODUCT_ID");
console.log("Respuesta Gumroad:", data);
}
