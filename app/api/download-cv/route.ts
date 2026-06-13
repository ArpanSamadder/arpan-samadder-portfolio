const cvLines = [
  "Arpan Samadder",
  "BBA Student, Finance and Banking | Brand Communication | Campus Leadership",
  "Email: arpansamadder110@gmail.com | Phone: +8801776794766",
  "LinkedIn: linkedin.com/in/arpansamadder | Location: Savar, Dhaka, Bangladesh",
  "",
  "PROFILE",
  "Business and communication-focused undergraduate with practical experience in brand communication,",
  "campaign planning, sponsorship outreach, event execution, content creation, team coordination,",
  "and AI-assisted workflow organization.",
  "",
  "EDUCATION",
  "BBA in Finance and Banking, Jahangirnagar University | Expected Graduation: 2027",
  "",
  "EXPERIENCE",
  "Brand and Communication Manager, Executive Media | Feb 2025 - Present",
  "Managing client brand projects, campaign plans, creative teams, and communication workflows.",
  "",
  "Founder, Biztigation | May 2024 - Present",
  "Built and led a national business case competition platform under JU Finance and Banking.",
  "",
  "Corporate Affairs Wing Secretary, JUCC | Jul 2025 - Jan 2026",
  "Worked on sponsorship outreach, event operations, promotional campaigns, and volunteer coordination.",
  "",
  "Volunteer, MoFA | Jan 2025 - Present",
  "Contributed to outreach programs, event support, and community engagement initiatives.",
  "",
  "Media Coordinator, Solvia Foundation | Mar 2026 - May 2026",
  "Managed social media presence, content planning, creation, publishing, and community responses.",
  "",
  "Cover Designer, Sense of Return 2.0 - Finance Fest 3.0 | Jan 2025 - Mar 2025",
  "Designed a 100+ page event souvenir magazine independently, delivered within 2+ weeks.",
  "",
  "Data Analysis and Marketing Intern, Excellence Bangladesh | Jun 2023 - Sep 2023",
  "Created marketing campaigns and promotional materials for job fairs and career workshops.",
  "",
  "Operations Management Intern, YSSE | Aug 2023 - Feb 2024",
  "Tracked attendance, hosted online sessions, managed intern support, and compiled workflow reports.",
  "",
  "SKILLS",
  "Brand communication, campaign planning, sponsorship outreach, event planning, content creation,",
  "copywriting, Canva design, CapCut, Microsoft Office, Google Workspace, AI tools, team leadership,",
  "campus engagement, communication, and workflow organization.",
];

function escapePdfText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function makePdf(lines: string[]) {
  const encoder = new TextEncoder();
  const objects: string[] = [];
  const offsets: number[] = [0];
  const chunks: string[] = ["%PDF-1.4\n%\u00e2\u00e3\u00cf\u00d3\n"];
  const linesPerPage = 42;
  const pages: string[][] = [];

  for (let i = 0; i < lines.length; i += linesPerPage) {
    pages.push(lines.slice(i, i + linesPerPage));
  }

  function byteLength(value: string) {
    return encoder.encode(value).length;
  }

  function currentOffset() {
    return byteLength(chunks.join(""));
  }

  function addObject(id: number, body: string) {
    offsets[id] = currentOffset();
    chunks.push(`${id} 0 obj\n${body}\nendobj\n`);
  }

  const pageIds = pages.map((_, index) => 3 + index * 2);
  const contentIds = pages.map((_, index) => 4 + index * 2);
  const fontId = 3 + pages.length * 2;
  const objectCount = fontId;

  addObject(1, "<< /Type /Catalog /Pages 2 0 R >>");
  addObject(2, `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pages.length} >>`);

  pages.forEach((pageLines, pageIndex) => {
    const pageId = pageIds[pageIndex];
    const contentId = contentIds[pageIndex];
    const commands: string[] = ["BT"];

    pageLines.forEach((line, index) => {
      const isTitle = pageIndex === 0 && index === 0;
      const isHeading = line.length > 0 && line === line.toUpperCase() && !line.includes("|");
      const fontSize = isTitle ? 18 : isHeading ? 12 : 10;
      const y = 792 - index * 17;
      commands.push(`/F1 ${fontSize} Tf`);
      commands.push(`1 0 0 1 48 ${y} Tm (${escapePdfText(line)}) Tj`);
    });

    commands.push("ET");
    const stream = commands.join("\n");

    addObject(pageId, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 ${fontId} 0 R >> >> /Contents ${contentId} 0 R >>`);
    addObject(contentId, `<< /Length ${byteLength(stream)} >>\nstream\n${stream}\nendstream`);
  });

  addObject(fontId, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

  const xrefOffset = currentOffset();
  chunks.push(`xref\n0 ${objectCount + 1}\n`);
  chunks.push("0000000000 65535 f \n");

  for (let i = 1; i <= objectCount; i += 1) {
    chunks.push(`${String(offsets[i]).padStart(10, "0")} 00000 n \n`);
  }

  chunks.push(`trailer\n<< /Size ${objectCount + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);
  return encoder.encode(chunks.join(""));
}

export function GET() {
  return new Response(makePdf(cvLines), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Arpan_Samadder_CV.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
