export interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface Playbook {
  id: string;
  name: string;
  role: 'Judge' | 'Mentor';
  type: 'Domain Expert' | 'Technical Judge' | 'Non-tech Industry Judge' | 'Senior Judge';
  company: string;
  title: string;
  linkedin: string;
  avatarUrl?: string;
  
  expertise: string[];
  
  // Evaluation Lens
  mostCaresAbout: string[];
  highlyValues: string[];
  deductions: string[];
  
  likelyQuestions: string[];
  
  bestMomentToAsk: string[];
  
  bestQuestionsToAsk: string[];
  
  actionForTeam: ChecklistItem[];
  
  // After Meeting Notes
  insights: string[];
  teamChanges: ChecklistItem[];
  
  // 30-second Cheat Sheet
  cheatSheet: {
    expertise: string;
    likelyCaresAbout: string;
    likelyQuestions: string[];
    avoid: string;
    bestMomentToAsk: string;
    actionForTeam: string[];
  };
}
