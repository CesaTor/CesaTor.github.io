<template>
  <div class="min-h-screen">
    <PageHeader
      title="Projects"
      description="A collection of projects I've built and contributed to"
      class="header-gradient"
    />

    <PageSection>
      <PageGrid class="project-grid">
        <PageCard
          v-for="project in projects"
          :key="project.name"
          :title="project.name"
          :description="project.description"
          :to="project.url"
          target="_blank"
          class="project-card"
        >
          <template #icon>
            <div class="flex items-center gap-2">
              <Icon :name="project.icon" class="text-2xl" />
              <div v-if="project.language" class="flex items-center gap-1 text-xs">
                <span class="w-3 h-3 rounded-full" :style="`background-color: ${getLanguageColor(project.language)}`"></span>
                <span>{{ project.language }}</span>
              </div>
            </div>
          </template>
          
          <template #footer>
            <div class="flex items-center gap-4 text-sm text-gray-400">
              <div v-if="project.stars" class="flex items-center gap-1">
                <Icon name="i-heroicons-star" />
                <span>{{ project.stars }}</span>
              </div>
              <div v-if="project.forks" class="flex items-center gap-1">
                <Icon name="i-heroicons-code-bracket" />
                <span>{{ project.forks }}</span>
              </div>
            </div>
          </template>
        </PageCard>
      </PageGrid>
    </PageSection>

    <PageSection class="section-gradient">
      <PageCTA
        title="More Projects on GitHub"
        description="Check out my GitHub profile for more open-source projects and contributions"
      >
        <template #links>
          <UButton
            to="https://github.com/CesaTor?tab=repositories"
            target="_blank"
            size="lg"
            icon="i-simple-icons-github"
            class="dreamy-button"
          >
            View All Repositories
          </UButton>
        </template>
      </PageCTA>
    </PageSection>

    <Footer class="footer-gradient">
      <template #left>
        <p class="text-sm text-gray-400">
          © {{ new Date().getFullYear() }} Cesare Torchia
        </p>
      </template>
      
      <template #right>
        <FooterColumns :columns="footerLinks" />
      </template>
    </Footer>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    name: 'board-games-organizer',
    description: 'Basic BoardGames collection organizer written in Flutter',
    url: 'https://github.com/CesaTor/board-games-organizer',
    language: 'Dart',
    icon: 'i-heroicons-squares-2x2',
    stars: 0,
    forks: 0
  },
  {
    name: 'trackus',
    description: 'Todoist clone written in Flutter',
    url: 'https://github.com/CesaTor/trackus',
    language: 'Dart',
    icon: 'i-heroicons-list-bullet',
    stars: 0,
    forks: 1
  },
  {
    name: 'login_template',
    description: 'Flutter Login Template using Strapi as backend for managing users',
    url: 'https://github.com/CesaTor/login_template',
    language: 'Dart',
    icon: 'i-heroicons-lock-closed',
    stars: 4,
    forks: 0
  },
  {
    name: 'JourneyDiary2MD',
    description: "Convert journey.cloud diary's JSON to a Obsidian/Logseq friendly markdown",
    url: 'https://github.com/CesaTor/JourneyDiary2MD',
    language: 'Go',
    icon: 'i-heroicons-document-text',
    stars: 1,
    forks: 0
  },
  {
    name: 'ct_journal',
    description: 'Simple and basic journaling app in flutter',
    url: 'https://github.com/CesaTor/ct_journal',
    language: 'Dart',
    icon: 'i-heroicons-book-open',
    stars: 0,
    forks: 0
  },
  {
    name: 'AI-Powered Platforms',
    description: 'Building full-stack web applications with AI/ML integration (in progress)',
    url: 'https://github.com/CesaTor',
    language: 'TypeScript',
    icon: 'i-heroicons-cpu-chip',
    stars: 0,
    forks: 0
  }
]

const getLanguageColor = (language: string) => {
  const colors: Record<string, string> = {
    'Dart': '#00B4AB',
    'TypeScript': '#3178C6',
    'JavaScript': '#F7DF1E',
    'Python': '#3776AB',
    'Go': '#00ADD8',
    'Vue': '#42B883',
  }
  return colors[language] || '#8B5CF6'
}

const footerLinks = [
  {
    label: 'Connect',
    children: [
      { label: 'GitHub', to: 'https://github.com/CesaTor', target: '_blank' },
      { label: 'LinkedIn', to: 'https://linkedin.com/in/cesare-torchia', target: '_blank' },
      { label: 'Instagram', to: 'https://instagram.com/lanternsflame', target: '_blank' },
    ]
  },
  {
    label: 'Explore',
    children: [
      { label: 'Home', to: '/' },
      { label: 'Projects', to: '/projects' },
      { label: 'Blog', to: '/blog' },
    ]
  }
]
</script>

<style scoped>
.header-gradient {
  background: linear-gradient(135deg, 
    rgba(139, 92, 246, 0.1) 0%, 
    rgba(59, 130, 246, 0.1) 100%
  );
}

.project-grid {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.project-card {
  transition: all 0.3s ease;
  animation: slideUp 0.6s ease-out both;
}

.project-card:nth-child(1) { animation-delay: 0.1s; }
.project-card:nth-child(2) { animation-delay: 0.2s; }
.project-card:nth-child(3) { animation-delay: 0.3s; }
.project-card:nth-child(4) { animation-delay: 0.4s; }
.project-card:nth-child(5) { animation-delay: 0.5s; }
.project-card:nth-child(6) { animation-delay: 0.6s; }

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
}

.section-gradient {
  background: linear-gradient(180deg, 
    transparent 0%, 
    rgba(139, 92, 246, 0.05) 50%, 
    transparent 100%
  );
}

.footer-gradient {
  background: linear-gradient(180deg, 
    transparent 0%, 
    rgba(17, 24, 39, 0.5) 100%
  );
  border-top: 1px solid rgba(139, 92, 246, 0.2);
}

.dreamy-button {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.dreamy-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.dreamy-button:hover::before {
  width: 300px;
  height: 300px;
}
</style>
