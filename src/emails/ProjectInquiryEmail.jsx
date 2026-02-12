import { Html } from "@react-email/html";
import { Container } from "@react-email/container";
import { Text } from "@react-email/text";
import { Button } from "@react-email/button";
import React from "react";

export default function ProjectInquiryEmail({
  name,
  email,
  company,
  phone,
  message,
}) {
  return (
    <Html>
      <Container
        style={{
          padding: "30px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <Text style={{ fontSize: "22px", fontWeight: "bold" }}>
          🚀 New Project Inquiry
        </Text>

        <Text><strong>Name:</strong> {name}</Text>
        <Text><strong>Email:</strong> {email}</Text>
        <Text><strong>Company:</strong> {company || "N/A"}</Text>
        <Text><strong>Phone:</strong> {phone || "N/A"}</Text>

        <Text style={{ marginTop: "20px" }}>
          <strong>Message:</strong>
        </Text>

        <Text>{message}</Text>

        <Button
          href={`mailto:${email}`}
          style={{
            marginTop: "20px",
            backgroundColor: "#000",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "6px",
          }}
        >
          Reply to Client
        </Button>
      </Container>
    </Html>
  );
}
