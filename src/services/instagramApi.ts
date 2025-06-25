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
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=600&auto=format&fit=crop",
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
