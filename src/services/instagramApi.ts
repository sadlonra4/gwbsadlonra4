// Instagram Basic Display API service
// You'll need to set up an Instagram App and get these values

interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

interface InstagramApiResponse {
  data: InstagramPost[];
  paging?: {
    next?: string;
  };
}

class InstagramService {
  private accessToken: string;
  private baseUrl = "https://graph.instagram.com";

  constructor() {
    // In Vite, environment variables are accessed via import.meta.env
    this.accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN || "";
  }

  async getRecentPosts(limit: number = 9): Promise<InstagramPost[]> {
    try {
      if (!this.accessToken) {
        console.warn("Instagram access token not configured");
        return this.getFallbackPosts();
      }

      const response = await fetch(
        `${this.baseUrl}/me/media?fields=id,media_type,media_url,permalink,caption,timestamp&limit=${limit}&access_token=${this.accessToken}`,
      );

      if (!response.ok) {
        throw new Error(`Instagram API error: ${response.status}`);
      }

      const data: InstagramApiResponse = await response.json();

      // Filter only image posts
      return data.data
        .filter(
          (post) =>
            post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM",
        )
        .slice(0, limit);
    } catch (error) {
      console.error("Error fetching Instagram posts:", error);
      return this.getFallbackPosts();
    }
  }

  private getFallbackPosts(): InstagramPost[] {
    // Fallback images when Instagram API is not available
    const fallbackImages = [
      "https://cdn.builder.io/api/v1/image/assets%2Ffb2feadbb4494ac89f67fc7ee22e1642%2F13b482833ea04728ae37639778155aad",
      "https://cdn.builder.io/api/v1/image/assets%2Ffb2feadbb4494ac89f67fc7ee22e1642%2Fdeda45a23eb648d183c7d59011475495",
      "https://cdn.builder.io/api/v1/image/assets%2Ffb2feadbb4494ac89f67fc7ee22e1642%2F0b7f3661cfb2406f980902501da90171",
      "https://cdn.builder.io/api/v1/image/assets%2Ffb2feadbb4494ac89f67fc7ee22e1642%2F13b482833ea04728ae37639778155aad",
      "https://cdn.builder.io/api/v1/image/assets%2Ffb2feadbb4494ac89f67fc7ee22e1642%2Fdeda45a23eb648d183c7d59011475495",
      "https://cdn.builder.io/api/v1/image/assets%2Ffb2feadbb4494ac89f67fc7ee22e1642%2F0b7f3661cfb2406f980902501da90171",
      "https://cdn.builder.io/api/v1/image/assets%2Ffb2feadbb4494ac89f67fc7ee22e1642%2F13b482833ea04728ae37639778155aad",
      "https://cdn.builder.io/api/v1/image/assets%2Ffb2feadbb4494ac89f67fc7ee22e1642%2Fdeda45a23eb648d183c7d59011475495",
      "https://cdn.builder.io/api/v1/image/assets%2Ffb2feadbb4494ac89f67fc7ee22e1642%2F0b7f3661cfb2406f980902501da90171",
    ];

    return fallbackImages.map((url, index) => ({
      id: `fallback-${index}`,
      media_type: "IMAGE" as const,
      media_url: url,
      permalink: "#",
      caption: `Gallery image ${index + 1}`,
      timestamp: new Date().toISOString(),
    }));
  }
}

export const instagramService = new InstagramService();
export type { InstagramPost };
