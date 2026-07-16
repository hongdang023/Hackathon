import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Clock, 
  Plus, 
  Search, 
  Filter, 
  ExternalLink, 
  Trash2, 
  Edit2, 
  ArrowLeft, 
  Save, 
  Lightbulb, 
  HelpCircle, 
  Bookmark, 
  Sparkles, 
  Calendar,
  Flag,
  Cpu,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  X,
  Grid,
  List
} from 'lucide-react';
import { Playbook, ChecklistItem } from './types';
import { initialPlaybooks } from './mockData';

// Timeline Data matching the schedule screenshots
interface TimelineEvent {
  start: Date;
  end: Date;
  title: string;
  deliverables?: string;
  isCheckpoint?: boolean;
  isTeamDeadline?: boolean;
  displayTime: string;
  displayDate: string;
}

const timelineEvents: TimelineEvent[] = [
  // 17/07
  { start: new Date(2026, 6, 17, 7, 0), end: new Date(2026, 6, 17, 9, 0), title: 'Cả team Check in', deliverables: 'Xuất trình CCCD, Đeo thẻ tham dự suốt Hackathon, Tự chuẩn bị đồ cá nhân', displayTime: '7h - 9h', displayDate: '17/07' },
  { start: new Date(2026, 6, 17, 11, 0), end: new Date(2026, 6, 17, 11, 5), title: 'Công bố đề bài', deliverables: 'Nhận đề bài và phân tích yêu cầu từ BTC', displayTime: '11h', displayDate: '17/07' },
  { start: new Date(2026, 6, 17, 11, 5), end: new Date(2026, 6, 17, 12, 0), title: 'Họp team chốt ý tưởng', deliverables: 'Brainstorm & phân chia công việc', displayTime: '11h - 12h', displayDate: '17/07' },
  { start: new Date(2026, 6, 17, 12, 0), end: new Date(2026, 6, 17, 13, 0), title: 'Ăn trưa & Nghỉ ngơi', deliverables: '', displayTime: '12h', displayDate: '17/07' },
  { start: new Date(2026, 6, 17, 15, 0), end: new Date(2026, 6, 17, 16, 0), title: 'Họp team thiết kế hệ thống', deliverables: 'Chốt Problem Framing & Kiến trúc sơ bộ', displayTime: '15h - 16h', displayDate: '17/07' },
  { start: new Date(2026, 6, 17, 18, 0), end: new Date(2026, 6, 17, 19, 0), title: 'Ăn tối', deliverables: '', displayTime: '18h', displayDate: '17/07' },
  { start: new Date(2026, 6, 17, 19, 0), end: new Date(2026, 6, 17, 20, 0), title: 'Họp team phân rã tasks', deliverables: 'Thiết kế Fallback & Chuẩn bị Mockup UI', displayTime: '19h - 20h', displayDate: '17/07' },
  
  // 18/07
  { start: new Date(2026, 6, 18, 5, 0), end: new Date(2026, 6, 18, 5, 30), title: 'Checkpoint 1 Team deadline', deliverables: 'Project name, Track/problem, Solution description', isTeamDeadline: true, displayTime: '5h', displayDate: '18/07' },
  { start: new Date(2026, 6, 18, 7, 30), end: new Date(2026, 6, 18, 8, 30), title: 'Ăn sáng', deliverables: '', displayTime: '7h30', displayDate: '18/07' },
  { start: new Date(2026, 6, 18, 11, 0), end: new Date(2026, 6, 18, 11, 30), title: 'Checkpoint 1 Final deadline', deliverables: 'Emergent judges chấm điểm', isCheckpoint: true, displayTime: '11h', displayDate: '18/07' },
  { start: new Date(2026, 6, 18, 11, 30), end: new Date(2026, 6, 18, 12, 30), title: 'Họp team cập nhật feedback', deliverables: 'Đánh giá feedback của Giám khảo & chỉnh sửa', displayTime: '11h - 12h', displayDate: '18/07' },
  { start: new Date(2026, 6, 18, 12, 30), end: new Date(2026, 6, 18, 13, 30), title: 'Ăn trưa', deliverables: '', displayTime: '12h', displayDate: '18/07' },
  { start: new Date(2026, 6, 18, 15, 0), end: new Date(2026, 6, 18, 16, 0), title: 'Họp team chuẩn bị deployment', deliverables: 'Đo lường chi phí AI, chuẩn bị deployment', displayTime: '15h - 16h', displayDate: '18/07' },
  { start: new Date(2026, 6, 18, 17, 0), end: new Date(2026, 6, 18, 17, 30), title: 'Checkpoint 2 Team deadline', deliverables: 'Live deployed URL, Github repository', isTeamDeadline: true, displayTime: '17h', displayDate: '18/07' },
  { start: new Date(2026, 6, 18, 18, 0), end: new Date(2026, 6, 18, 19, 0), title: 'Ăn tối', deliverables: '', displayTime: '18h', displayDate: '18/07' },
  { start: new Date(2026, 6, 18, 19, 0), end: new Date(2026, 6, 18, 20, 0), title: 'Họp team chuẩn bị slide', deliverables: 'Chuẩn bị Slides & Demo Flow', displayTime: '19h - 20h', displayDate: '18/07' },
  { start: new Date(2026, 6, 18, 23, 0), end: new Date(2026, 6, 18, 23, 30), title: 'Checkpoint 2 Final deadline', deliverables: 'BA judges chấm điểm', isCheckpoint: true, displayTime: '23h', displayDate: '18/07' },
  
  // 19/07
  { start: new Date(2026, 6, 19, 5, 0), end: new Date(2026, 6, 19, 5, 30), title: 'Last submission Team deadline', deliverables: 'Slides, Demo vid (< 5 phút), AI collab log, Live deployed URL, Github repository', isTeamDeadline: true, displayTime: '5h', displayDate: '19/07' },
  { start: new Date(2026, 6, 19, 7, 30), end: new Date(2026, 6, 19, 8, 30), title: 'Ăn sáng', deliverables: '', displayTime: '7h30', displayDate: '19/07' },
  { start: new Date(2026, 6, 19, 11, 0), end: new Date(2026, 6, 19, 11, 30), title: 'Last submission Final deadline', deliverables: 'Senior judges chấm điểm', isCheckpoint: true, displayTime: '11h', displayDate: '19/07' },
  { start: new Date(2026, 6, 19, 11, 30), end: new Date(2026, 6, 19, 12, 30), title: 'Họp team tập thuyết trình', deliverables: 'Tập dượt thuyết trình & câu hỏi Q&A', displayTime: '11h - 12h', displayDate: '19/07' },
  { start: new Date(2026, 6, 19, 12, 30), end: new Date(2026, 6, 19, 13, 30), title: 'Ăn trưa', deliverables: '', displayTime: '12h', displayDate: '19/07' },
  { start: new Date(2026, 6, 19, 15, 0), end: new Date(2026, 6, 19, 15, 30), title: 'Họp team chốt slide & demo', deliverables: 'Chuẩn bị thiết bị demo và backup slides', displayTime: '15h', displayDate: '19/07' },
  { start: new Date(2026, 6, 19, 15, 30), end: new Date(2026, 6, 19, 18, 0), title: 'Demo Day & Trao giải', deliverables: 'Thuyết trình 5 phút + QnA 2 phút', isCheckpoint: true, displayTime: '15h30 - 18h', displayDate: '19/07' }
];

// Official Rubrics definition
interface RubricItem {
  id: string;
  title: string;
  maxPoints: number;
  description: string;
  keywords: string[];
}

const rubrics: RubricItem[] = [
  { id: 'tech', title: '1. Technical Implementation & Depth', maxPoints: 20, description: 'Kiến trúc rõ ràng, có chiều sâu; Demo chạy thật (không fake); Code, API và deployment ổn định.', keywords: ['Engineering', 'Production Readiness'] },
  { id: 'ainative', title: '2. AI-Native Architecture & Innovation', maxPoints: 20, description: 'AI là trung tâm (không chỉ gắn thêm chatbot); Agent workflow / reasoning / context management hợp lý; Điểm mới về cách dùng AI.', keywords: ['Agentic AI', 'AI-Native'] },
  { id: 'business', title: '3. Business Viability & Pilot Pathway', maxPoints: 20, description: 'Giải quyết nỗi đau thật của doanh nghiệp; Lộ trình pilot rõ ràng (ai dùng, khi nào, đo gì); ROI/impact hợp lý.', keywords: ['Pilot', 'Business Impact'] },
  { id: 'ux', title: '4. AI-Native UX & Design Thinking', maxPoints: 15, description: 'UX đơn giản, tự nhiên, ít learning curve; AI tạo trải nghiệm đột phá; Thiết kế theo user workflow.', keywords: ['AI UX', 'User Workflow'] },
  { id: 'safety', title: '5. AI Safety, Grounding & Trust', maxPoints: 15, description: 'Câu trả lời có nguồn dẫn (grounded); Cơ chế giảm hallucination; Bảo mật dữ liệu; Minh bạch / explainability.', keywords: ['Grounding', 'Trust'] },
  { id: 'presentation', title: '6. Presentation, Demo & Defensibility', maxPoints: 10, description: 'Demo mượt, storytelling tốt; Phản biện xuất sắc; Chứng minh mọi tuyên bố bằng bằng chứng rõ ràng.', keywords: ['Evidence', 'Defensibility'] }
];

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<'dashboard' | 'playbook' | 'timeline' | 'copilot'>('dashboard');
  const [currentPlaybookId, setCurrentPlaybookId] = useState<string | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeAvatarUrl, setActiveAvatarUrl] = useState<{ url: string, name: string } | null>(null);
  const [viewMode, setViewMode] = useState<'detailed' | 'compact'>('detailed');

  // Playbooks State (Merged with new initial playbooks to support updates)
  const [playbooks, setPlaybooks] = useState<Playbook[]>(() => {
    const saved = localStorage.getItem('vaic_playbooks');
    if (saved) {
      try {
        const savedList = JSON.parse(saved) as Playbook[];
        // Map savedList to update avatarUrl and linkedin if they exist in initialPlaybooks
        const updatedList = savedList.map(savedPb => {
          const initPb = initialPlaybooks.find(p => p.id === savedPb.id);
          if (initPb) {
            return {
              ...savedPb,
              role: initPb.role,
              type: initPb.type,
              avatarUrl: initPb.avatarUrl,
              linkedin: initPb.linkedin,
              expertise: initPb.expertise,
              mostCaresAbout: initPb.mostCaresAbout,
              highlyValues: initPb.highlyValues,
              deductions: initPb.deductions,
              likelyQuestions: initPb.likelyQuestions,
              cheatSheet: initPb.cheatSheet
            };
          }
          return savedPb;
        });

        // Add any brand new playbooks from initialPlaybooks
        initialPlaybooks.forEach(initPb => {
          if (!updatedList.some(p => p.id === initPb.id)) {
            updatedList.push(initPb);
          }
        });

        // Sort to maintain the order from initialPlaybooks (Sonny Vu at the top)
        updatedList.sort((a, b) => {
          const idxA = initialPlaybooks.findIndex(p => p.id === a.id);
          const idxB = initialPlaybooks.findIndex(p => p.id === b.id);
          if (idxA !== -1 && idxB !== -1) return idxA - idxB;
          if (idxA !== -1) return -1;
          if (idxB !== -1) return 1;
          return 0;
        });

        // Save back to localStorage to persist the synced roles/types/order
        localStorage.setItem('vaic_playbooks', JSON.stringify(updatedList));

        return updatedList;
      } catch (e) {
        return initialPlaybooks;
      }
    }
    return initialPlaybooks;
  });

  // Save playbooks to local storage
  useEffect(() => {
    localStorage.setItem('vaic_playbooks', JSON.stringify(playbooks));
  }, [playbooks]);

  // Rubric Self-Assessment Score State (1 to 5 stars for each rubric)
  const [rubricRatings, setRubricRatings] = useState<{[key: string]: number}>(() => {
    const saved = localStorage.getItem('vaic_rubric_ratings');
    return saved ? JSON.parse(saved) : {
      tech: 3,
      ainative: 2,
      business: 4,
      ux: 3,
      safety: 2,
      presentation: 4
    };
  });

  useEffect(() => {
    localStorage.setItem('vaic_rubric_ratings', JSON.stringify(rubricRatings));
  }, [rubricRatings]);

  // Collapsible Days & Hide Passed in Timeline
  const [collapsedDays, setCollapsedDays] = useState<{[key: string]: boolean}>({'17/07': false, '18/07': false, '19/07': false});
  const [hidePassed, setHidePassed] = useState(false);

  // Form States
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState<'Judge' | 'Mentor'>('Judge');
  const [formType, setFormType] = useState<Playbook['type']>('Technical Judge');
  const [formCompany, setFormCompany] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [formLinkedin, setFormLinkedin] = useState('');
  const [formAvatarUrl, setFormAvatarUrl] = useState('');
  const [formExpertise, setFormExpertise] = useState('');
  const [formMostCares, setFormMostCares] = useState('');
  const [formHighlyValues, setFormHighlyValues] = useState('');
  const [formDeductions, setFormDeductions] = useState('');
  const [formQuestions, setFormQuestions] = useState('');
  const [formBestMoment, setFormBestMoment] = useState('');
  const [formBestQToAsk, setFormBestQToAsk] = useState('');
  const [formActionItems, setFormActionItems] = useState('');
  const [formInsights, setFormInsights] = useState('');
  const [formTeamChanges, setFormTeamChanges] = useState('');

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [roleFilter, setRoleFilter] = useState<string>('All');

  // Dynamic status check based on current time
  const [activeActivity, setActiveActivity] = useState<TimelineEvent | null>(null);
  const [nextCheckpoint, setNextCheckpoint] = useState<TimelineEvent | null>(null);

  useEffect(() => {
    const updateFocusItems = () => {
      const now = new Date();
      
      let current = timelineEvents.find(e => now >= e.start && now <= e.end);
      if (!current) {
        const upcoming = timelineEvents.filter(e => e.start > now);
        if (upcoming.length > 0) {
          current = { ...upcoming[0], title: `Chuẩn bị: ${upcoming[0].title}` };
        } else {
          current = {
            start: new Date(), end: new Date(),
            title: 'Hackathon đã kết thúc!',
            deliverables: 'Cảm ơn cả team vì nỗ lực tuyệt vời!',
            displayTime: '--', displayDate: '--'
          };
        }
      }
      setActiveActivity(current);

      const nextCP = timelineEvents.find(e => e.isCheckpoint && e.start > now);
      setNextCheckpoint(nextCP || null);
    };

    updateFocusItems();
    const interval = setInterval(updateFocusItems, 60000);
    return () => clearInterval(interval);
  }, []);

  // Form handlers
  const startEdit = (playbook: Playbook) => {
    setFormName(playbook.name);
    setFormRole(playbook.role);
    setFormType(playbook.type);
    setFormCompany(playbook.company);
    setFormTitle(playbook.title);
    setFormLinkedin(playbook.linkedin);
    setFormAvatarUrl(playbook.avatarUrl || '');
    setFormExpertise(playbook.expertise.join('\n'));
    setFormMostCares(playbook.mostCaresAbout.join('\n'));
    setFormHighlyValues(playbook.highlyValues.join('\n'));
    setFormDeductions(playbook.deductions.join('\n'));
    setFormQuestions(playbook.likelyQuestions.join('\n'));
    setFormBestMoment(playbook.bestMomentToAsk.join('\n'));
    setFormBestQToAsk(playbook.bestQuestionsToAsk.join('\n'));
    setFormActionItems(playbook.actionForTeam.map(i => i.text).join('\n'));
    setFormInsights(playbook.insights.join('\n'));
    setFormTeamChanges(playbook.teamChanges.map(i => i.text).join('\n'));
    setIsEditing(true);
  };

  const resetForm = () => {
    setFormName('');
    setFormRole('Judge');
    setFormType('Technical Judge');
    setFormCompany('');
    setFormTitle('');
    setFormLinkedin('');
    setFormAvatarUrl('');
    setFormExpertise('');
    setFormMostCares('');
    setFormHighlyValues('');
    setFormDeductions('');
    setFormQuestions('');
    setFormBestMoment('');
    setFormBestQToAsk('');
    setFormActionItems('');
    setFormInsights('');
    setFormTeamChanges('');
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) return;

    const parseLines = (text: string) => text.split('\n').map(l => l.trim()).filter(Boolean);

    const parsedActionItems: ChecklistItem[] = parseLines(formActionItems).map((txt, index) => {
      if (isEditing && currentPlaybookId) {
        const existing = playbooks.find(p => p.id === currentPlaybookId);
        const match = existing?.actionForTeam.find(i => i.text === txt);
        if (match) return match;
      }
      return { id: `act-${Date.now()}-${index}`, text: txt, checked: false };
    });

    const parsedTeamChanges: ChecklistItem[] = parseLines(formTeamChanges).map((txt, index) => {
      if (isEditing && currentPlaybookId) {
        const existing = playbooks.find(p => p.id === currentPlaybookId);
        const match = existing?.teamChanges.find(i => i.text === txt);
        if (match) return match;
      }
      return { id: `tc-${Date.now()}-${index}`, text: txt, checked: false };
    });

    const parsedExpertise = parseLines(formExpertise);
    const parsedMostCares = parseLines(formMostCares);
    const parsedHighlyValues = parseLines(formHighlyValues);
    const parsedDeductions = parseLines(formDeductions);
    const parsedQuestions = parseLines(formQuestions);
    const parsedBestMoment = parseLines(formBestMoment);
    const parsedBestQ = parseLines(formBestQToAsk);
    const parsedInsights = parseLines(formInsights);

    const newPlaybook: Playbook = {
      id: isEditing && currentPlaybookId ? currentPlaybookId : `pb-${Date.now()}`,
      name: formName,
      role: formRole,
      type: formType,
      company: formCompany,
      title: formTitle,
      linkedin: formLinkedin,
      avatarUrl: formAvatarUrl,
      expertise: parsedExpertise,
      mostCaresAbout: parsedMostCares,
      highlyValues: parsedHighlyValues,
      deductions: parsedDeductions,
      likelyQuestions: parsedQuestions,
      bestMomentToAsk: parsedBestMoment,
      bestQuestionsToAsk: parsedBestQ,
      actionForTeam: parsedActionItems,
      insights: parsedInsights,
      teamChanges: parsedTeamChanges,
      cheatSheet: {
        expertise: parsedExpertise.slice(0, 3).join(' · '),
        likelyCaresAbout: parsedMostCares.slice(0, 3).join(', '),
        likelyQuestions: parsedQuestions.slice(0, 3),
        avoid: parsedDeductions.slice(0, 2).join(', '),
        bestMomentToAsk: parsedBestMoment.join(', '),
        actionForTeam: parsedActionItems.slice(0, 3).map(i => i.text)
      }
    };

    if (isEditing && currentPlaybookId) {
      setPlaybooks(prev => prev.map(p => p.id === currentPlaybookId ? newPlaybook : p));
      setIsEditing(false);
    } else {
      setPlaybooks(prev => [newPlaybook, ...prev]);
      setIsAddingNew(false);
      setCurrentPlaybookId(newPlaybook.id);
    }
    resetForm();
  };

  const handleDelete = (id: string) => {
    if (confirm('Bạn có chắc chắn muốn xóa playbook của giám khảo/mentor này?')) {
      setPlaybooks(prev => prev.filter(p => p.id !== id));
      if (currentPlaybookId === id) {
        setCurrentPlaybookId(null);
        setActiveTab('dashboard');
      }
    }
  };

  const toggleChecklistItem = (playbookId: string, itemId: string, field: 'actionForTeam' | 'teamChanges') => {
    setPlaybooks(prev => prev.map(p => {
      if (p.id === playbookId) {
        const updatedItems = p[field].map(item => {
          if (item.id === itemId) return { ...item, checked: !item.checked };
          return item;
        });
        return {
          ...p,
          [field]: updatedItems,
          cheatSheet: {
            ...p.cheatSheet,
            actionForTeam: field === 'actionForTeam' 
              ? updatedItems.slice(0, 3).map(i => i.text) 
              : p.cheatSheet.actionForTeam
          }
        };
      }
      return p;
    }));
  };

  const filteredPlaybooks = playbooks.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = typeFilter === 'All' || p.type === typeFilter;
    const matchesRole = roleFilter === 'All' || p.role === roleFilter;
    return matchesSearch && matchesType && matchesRole;
  });

  const selectedPlaybook = playbooks.find(p => p.id === currentPlaybookId);

  // ----------------------------------------------------
  // AI COPILOT LOGIC (Rubric Gap Analyzer & Matcher)
  // ----------------------------------------------------
  
  // Find weakest rubric category (lowest score percentage, which is the rating out of 5)
  const getWeakestRubric = () => {
    let weakestId = 'ainative';
    let minRating = 6;
    
    Object.entries(rubricRatings).forEach(([id, rating]) => {
      if (rating < minRating) {
        minRating = rating;
        weakestId = id;
      }
    });

    return rubrics.find(r => r.id === weakestId) || rubrics[1];
  };

  const weakestRubric = getWeakestRubric();

  // Find matching mentors/judges for the weakest rubric based on expertise or type
  const getCopilotRecommendations = () => {
    if (playbooks.length === 0) return [];
    
    // Mapping rubric ID to keywords in profile
    const mapping: {[key: string]: string[]} = {
      tech: ['Architecture', 'Deployment', 'MLOps', 'Systems', 'Engineering', 'Infrastructure'],
      ainative: ['AI Agents', 'LLM', 'Agentic', 'Reasoning', 'Context', 'AI-Native', 'MLOps'],
      business: ['Business', 'Impact', 'ROI', 'Pilot', 'Startup', 'Domain', 'Market'],
      ux: ['UX', 'User', 'Interface', 'Design', 'Workflow', 'Product'],
      safety: ['Safety', 'Grounding', 'Trust', 'Hallucination', 'Bảo mật', 'Logging'],
      presentation: ['Pitching', 'Demo', 'Storytelling', 'Defensibility', 'Presentation']
    };

    const targetKeywords = mapping[weakestRubric.id] || [];

    return playbooks.map(pb => {
      // Calculate relevance score
      let score = 0;
      
      // Match by type
      if (weakestRubric.id === 'tech' && pb.type === 'Technical Judge') score += 3;
      if (weakestRubric.id === 'ainative' && pb.type === 'Technical Judge') score += 2;
      if (weakestRubric.id === 'business' && (pb.type === 'Domain Expert' || pb.type === 'Senior Judge')) score += 3;
      if (weakestRubric.id === 'ux' && pb.type === 'Non-tech Industry Judge') score += 3;
      if (weakestRubric.id === 'safety' && pb.type === 'Technical Judge') score += 2;
      if (weakestRubric.id === 'presentation' && pb.type === 'Senior Judge') score += 3;

      // Match by profile expertise and titles
      targetKeywords.forEach(kw => {
        const lowerKw = kw.toLowerCase();
        if (pb.name.toLowerCase().includes(lowerKw)) score += 1;
        if (pb.title.toLowerCase().includes(lowerKw)) score += 2;
        if (pb.company.toLowerCase().includes(lowerKw)) score += 1;
        if (pb.expertise.some(exp => exp.toLowerCase().includes(lowerKw))) score += 2;
      });

      return { playbook: pb, relevanceScore: score };
    })
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .filter(item => item.relevanceScore > 0 || playbooks.length <= 2); // show at least some recommendations
  };

  const recommendedMentors = getCopilotRecommendations();

  return (
    <div className="min-h-screen bg-white text-foreground flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-white/95 backdrop-blur z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => { setActiveTab('dashboard'); setCurrentPlaybookId(null); setIsAddingNew(false); setIsEditing(false); }}>
            <div className="bg-primary text-white w-9 h-9 rounded flex items-center justify-center font-bold text-xl">C</div>
            <span className="font-extrabold text-lg tracking-tight text-foreground">CONAN SCHOOL <span className="text-primary">WORKSPACE</span></span>
          </div>
          
          <nav className="flex space-x-1">
            <button 
              onClick={() => { setActiveTab('dashboard'); setCurrentPlaybookId(null); setIsAddingNew(false); setIsEditing(false); }}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'dashboard' && !currentPlaybookId && !isAddingNew ? 'bg-secondary text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => { setActiveTab('playbook'); setCurrentPlaybookId(null); setIsAddingNew(false); setIsEditing(false); }}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'playbook' || currentPlaybookId || isAddingNew ? 'bg-secondary text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Playbooks
            </button>
            <button 
              onClick={() => { setActiveTab('timeline'); setCurrentPlaybookId(null); setIsAddingNew(false); setIsEditing(false); }}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'timeline' ? 'bg-secondary text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Timeline
            </button>
            <button 
              onClick={() => { setActiveTab('copilot'); setCurrentPlaybookId(null); setIsAddingNew(false); setIsEditing(false); }}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'copilot' ? 'bg-secondary text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              🧠 AI Copilot
            </button>
          </nav>

        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* 1. Dashboard View */}
        {activeTab === 'dashboard' && !currentPlaybookId && !isAddingNew && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-secondary p-6 rounded-xl border border-border flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-foreground mb-2 flex items-center">
                    VAIC 2026 Workspace <Sparkles className="w-5 h-5 text-primary ml-2" />
                  </h1>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Trang quản lý nội bộ của đội thi Conan School. Sử dụng **AI Strategy Copilot** để đối chiếu với rubrics chấm điểm, tối ưu hóa kiến trúc AI và giả lập các phản biện từ giám khảo.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-muted-foreground">
                  <span>Mục tiêu tối thượng: <strong>VÔ ĐỊCH VAIC 2026</strong></span>
                  <div className="flex space-x-4">
                    <button onClick={() => setActiveTab('timeline')} className="text-primary font-semibold hover:underline flex items-center gap-0.5">
                      Lịch trình chi tiết <Calendar className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => setActiveTab('copilot')} className="text-primary font-semibold hover:underline flex items-center gap-0.5">
                      Xem AI Copilot &rarr;
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Stats Card */}
              <div className="bg-white p-6 rounded-xl border border-border flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase text-muted-foreground tracking-wider">Điểm yếu cần khắc phục</span>
                  <AlertTriangle className="w-5 h-5 text-primary" />
                </div>
                <div className="mt-2">
                  <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded font-extrabold uppercase">
                    Yếu nhất hiện tại
                  </span>
                  <div className="text-sm font-bold text-foreground mt-2 line-clamp-1">
                    {weakestRubric.title}
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">
                    Đánh giá tự chấm: {rubricRatings[weakestRubric.id]}/5 sao. Cần tìm gặp mentors để đóng lỗ hổng này.
                  </p>
                </div>
                <button 
                  onClick={() => setActiveTab('copilot')}
                  className="w-full mt-4 bg-primary text-white hover:bg-primary-hover py-2 rounded-lg font-bold text-xs transition-colors text-center"
                >
                  Nhận khuyến nghị từ Copilot
                </button>
              </div>
            </div>

            {/* Target Focus Section: Current Task & Next Checkpoint */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Current Task */}
              <div className="bg-white border-2 border-primary/35 rounded-xl shadow-sm p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-bl-lg">
                  Đang diễn ra
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <span className="text-[10px] font-extrabold uppercase text-primary tracking-wider">01 Việc hiện tại</span>
                    <h2 className="text-lg font-bold text-foreground leading-tight">
                      {activeActivity?.title}
                    </h2>
                    <p className="text-xs text-muted-foreground font-semibold">
                      Thời gian: {activeActivity?.displayDate} ({activeActivity?.displayTime})
                    </p>
                    {activeActivity?.deliverables && (
                      <div className="bg-secondary p-3 rounded-lg border border-border mt-2">
                        <span className="block text-[10px] font-extrabold uppercase text-muted-foreground tracking-wider mb-1">Cần có / Chuẩn bị:</span>
                        <span className="text-xs text-foreground font-semibold leading-relaxed">{activeActivity.deliverables}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card 2: Next Checkpoint */}
              <div className="bg-white border border-border rounded-xl shadow-sm p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-bl-lg">
                  Cột mốc quan trọng
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-50 p-3 rounded-lg text-amber-600 mt-1">
                    <Flag className="w-6 h-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <span className="text-[10px] font-extrabold uppercase text-amber-600 tracking-wider">01 Checkpoint Sắp Tới</span>
                    {nextCheckpoint ? (
                      <>
                        <h2 className="text-lg font-bold text-foreground leading-tight">
                          {nextCheckpoint.title}
                        </h2>
                        <p className="text-xs text-muted-foreground font-semibold">
                          Hạn nộp: Ngày {nextCheckpoint.displayDate} lúc {nextCheckpoint.displayTime}
                        </p>
                        {nextCheckpoint.deliverables && (
                          <div className="bg-amber-50/50 p-3 rounded-lg border border-amber-100 mt-2">
                            <span className="block text-[10px] font-extrabold uppercase text-amber-600 tracking-wider mb-1">Tài liệu cần nộp:</span>
                            <span className="text-xs text-amber-900 font-semibold leading-relaxed">{nextCheckpoint.deliverables}</span>
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <h2 className="text-lg font-bold text-foreground">Không còn checkpoint nào tiếp theo</h2>
                        <p className="text-xs text-muted-foreground font-medium">Cả đội hãy tập trung chuẩn bị tốt nhất cho phần thuyết trình chung kết!</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Playbooks List View */}
        {activeTab === 'playbook' && !currentPlaybookId && !isAddingNew && (
          <div className="space-y-6 animate-fadeIn">
            {/* Search, Filter & Add Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-secondary p-4 rounded-xl border border-border">
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-3" />
                <input 
                  type="text"
                  placeholder="Tìm kiếm theo tên, công ty, lĩnh vực..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-border rounded-lg bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 text-sm"
                />
              </div>

              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                <div className="flex items-center space-x-1.5 bg-white border border-border px-3 py-2 rounded-lg text-xs font-semibold">
                  <Filter className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>Lọc:</span>
                </div>
                <select 
                  value={roleFilter} 
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="bg-white border border-border px-3 py-2 rounded-lg text-xs font-semibold focus:outline-none focus:border-primary"
                >
                  <option value="All">Tất cả Vai trò</option>
                  <option value="Judge">Giám khảo (Judge)</option>
                  <option value="Mentor">Mentor</option>
                </select>
                <select 
                  value={typeFilter} 
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="bg-white border border-border px-3 py-2 rounded-lg text-xs font-semibold focus:outline-none focus:border-primary"
                >
                  <option value="All">Tất cả Phân loại</option>
                  <option value="Domain Expert">Domain Expert</option>
                  <option value="Technical Judge">Technical Judge</option>
                  <option value="Non-tech Industry Judge">Non-tech Industry Judge</option>
                  <option value="Senior Judge">Senior Judge</option>
                </select>
                
                {/* View Mode Toggle */}
                <div className="flex border border-border rounded-lg overflow-hidden bg-white shadow-sm">
                  <button 
                    onClick={() => setViewMode('detailed')}
                    className={`px-3 py-2 flex items-center gap-1.5 transition-all text-xs ${
                      viewMode === 'detailed' 
                        ? 'bg-primary text-white font-bold' 
                        : 'bg-transparent text-muted-foreground hover:bg-secondary/50 font-semibold'
                    }`}
                    title="Xem dạng chi tiết"
                  >
                    <List className="w-3.5 h-3.5" />
                    <span>Chi tiết</span>
                  </button>
                  <button 
                    onClick={() => setViewMode('compact')}
                    className={`px-3 py-2 flex items-center gap-1.5 transition-all text-xs border-l border-border ${
                      viewMode === 'compact' 
                        ? 'bg-primary text-white font-bold' 
                        : 'bg-transparent text-muted-foreground hover:bg-secondary/50 font-semibold'
                    }`}
                    title="Xem dạng thẻ"
                  >
                    <Grid className="w-3.5 h-3.5" />
                    <span>Thẻ</span>
                  </button>
                </div>
                
                <button 
                  onClick={() => { setIsAddingNew(true); resetForm(); }}
                  className="bg-primary text-white hover:bg-primary-hover px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" /> Thêm Mới
                </button>
              </div>
            </div>

            {/* Playbooks Grid */}
            {filteredPlaybooks.length === 0 ? (
              <div className="text-center py-20 bg-white border border-border rounded-xl">
                <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-30" />
                <h3 className="text-lg font-bold text-foreground">Không tìm thấy Playbook nào</h3>
                <p className="text-sm text-muted-foreground mt-1">Vui lòng thay đổi bộ lọc hoặc thêm mới giám khảo/mentor.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlaybooks.map((pb) => {
                  if (viewMode === 'compact') {
                    return (
                      <div 
                        key={pb.id}
                        onClick={() => setCurrentPlaybookId(pb.id)}
                        className="bg-white border border-border rounded-xl shadow-sm hover:border-primary/50 transition-all flex flex-col justify-between cursor-pointer overflow-hidden group text-center"
                      >
                        <div className="p-6 flex flex-col items-center flex-1">
                          {/* 1. Large Circular Avatar */}
                          <div className="relative mb-4">
                            <img 
                              src={pb.avatarUrl || `https://avatar.iran.liara.run/username?username=${encodeURIComponent(pb.name)}`} 
                              alt={pb.name} 
                              className="w-24 h-24 rounded-full object-cover border-2 border-primary/20 bg-white shadow-md cursor-zoom-in hover:scale-105 transition-transform"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveAvatarUrl({
                                  url: pb.avatarUrl || `https://avatar.iran.liara.run/username?username=${encodeURIComponent(pb.name)}`,
                                  name: pb.name
                                });
                              }}
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(pb.name)}`;
                              }}
                            />
                            {/* Role Badge overlay */}
                            <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-[9px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full shadow-sm whitespace-nowrap ${
                              pb.role === 'Judge' ? 'bg-red-50 text-red-600 border border-red-150' : 'bg-blue-50 text-blue-600 border border-blue-150'
                            }`}>
                              {pb.role}
                            </span>
                          </div>

                          {/* 2. Name & Title */}
                          <h3 className="text-base font-extrabold text-foreground group-hover:text-primary transition-colors mt-2">{pb.name}</h3>
                          <p className="text-xs text-muted-foreground font-semibold mt-1">{pb.type}</p>
                          
                          {/* 3. Company & Job Title */}
                          <div className="text-xs text-foreground/80 font-medium mt-3 bg-secondary/40 px-3 py-1.5 rounded-lg w-full truncate">
                            {pb.company} — {pb.title}
                          </div>

                          {/* 4. Skills Pill Badges */}
                          <div className="flex flex-wrap justify-center gap-1 mt-4">
                            {pb.expertise.slice(0, 3).map((exp, i) => (
                              <span key={i} className="text-[10px] bg-secondary text-secondary-foreground font-semibold px-2 py-0.5 rounded-full border border-border">
                                {exp}
                              </span>
                            ))}
                          </div>

                          {/* 5. Cares About snippet */}
                          <p className="text-[11px] text-muted-foreground font-medium mt-4 line-clamp-2 px-2">
                            🎯 {pb.cheatSheet.likelyCaresAbout || pb.mostCaresAbout.slice(0, 2).join(', ')}
                          </p>
                        </div>

                        {/* 6. View Profile Button */}
                        <div className="w-full border-t border-border bg-primary/5 group-hover:bg-primary/10 transition-colors py-3 flex items-center justify-center gap-1 text-xs font-bold text-primary">
                          <span>Xem chi tiết Playbook &rarr;</span>
                          {pb.linkedin && (
                            <a 
                              href={pb.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              onClick={(e) => e.stopPropagation()}
                              className="text-muted-foreground hover:text-primary ml-1"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  }

                  // Detailed View (viewMode === 'detailed')
                  return (
                    <div 
                      key={pb.id}
                      onClick={() => setCurrentPlaybookId(pb.id)}
                      className="bg-white border border-border rounded-xl shadow-sm hover:border-primary/50 transition-all flex flex-col justify-between cursor-pointer overflow-hidden group"
                    >
                      <div className="p-6 border-b border-border bg-secondary/50 flex gap-4 items-start">
                        <img 
                          src={pb.avatarUrl || `https://avatar.iran.liara.run/username?username=${encodeURIComponent(pb.name)}`} 
                          alt={pb.name} 
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 bg-white shadow-sm flex-shrink-0 cursor-zoom-in hover:scale-105 transition-transform"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveAvatarUrl({
                              url: pb.avatarUrl || `https://avatar.iran.liara.run/username?username=${encodeURIComponent(pb.name)}`,
                              name: pb.name
                            });
                          }}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(pb.name)}`;
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start flex-wrap gap-1">
                            <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full ${
                              pb.role === 'Judge' ? 'bg-red-50 text-red-600 border border-red-150' : 'bg-blue-50 text-blue-600 border border-blue-150'
                            }`}>
                              {pb.role}
                            </span>
                            <span className="text-[10px] font-bold text-muted-foreground bg-white px-2 py-0.5 rounded border border-border">
                              {pb.type}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-foreground mt-2 group-hover:text-primary transition-colors truncate">{pb.name}</h3>
                          <p className="text-xs text-muted-foreground mt-0.5 font-semibold truncate">{pb.company} — {pb.title}</p>
                        </div>
                      </div>

                      <div className="p-6 flex-1 space-y-4">
                        <div>
                          <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-1">🧠 Chuyên môn</div>
                          <p className="text-xs text-foreground font-medium">{pb.cheatSheet.expertise || pb.expertise.join(' · ')}</p>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-1">🎯 Quan tâm hàng đầu</div>
                          <p className="text-xs text-foreground font-medium">{pb.cheatSheet.likelyCaresAbout || pb.mostCaresAbout.slice(0, 3).join(', ')}</p>
                        </div>
                        {pb.cheatSheet.avoid && (
                          <div>
                            <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-1">🚫 Tránh nhắc/làm</div>
                            <p className="text-xs text-red-600 font-medium">{pb.cheatSheet.avoid}</p>
                          </div>
                        )}
                      </div>

                      <div className="px-6 py-4 border-t border-border bg-secondary/20 flex items-center justify-between text-xs font-semibold text-primary">
                        <span>Xem chi tiết Playbook &rarr;</span>
                        {pb.linkedin && (
                          <a 
                            href={pb.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            onClick={(e) => e.stopPropagation()}
                            className="text-muted-foreground hover:text-primary"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* 3. Playbook Detail View */}
        {currentPlaybookId && selectedPlaybook && !isEditing && !isAddingNew && (
          <div className="space-y-6 animate-fadeIn">
            {/* Detail Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border pb-4">
              <button 
                onClick={() => { setCurrentPlaybookId(null); setActiveTab('playbook'); }}
                className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4" /> Quay lại danh sách
              </button>

              <div className="flex space-x-2">
                <button 
                  onClick={() => startEdit(selectedPlaybook)}
                  className="bg-white border border-border text-foreground hover:bg-muted px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1"
                >
                  <Edit2 className="w-3.5 h-3.5" /> Chỉnh Sửa
                </button>
                <button 
                  onClick={() => handleDelete(selectedPlaybook.id)}
                  className="bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border border-red-200 px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Xóa Playbook
                </button>
              </div>
            </div>

            {/* Profile Header */}
            <div className="bg-secondary p-6 rounded-xl border border-border">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <img 
                    src={selectedPlaybook.avatarUrl || `https://avatar.iran.liara.run/username?username=${encodeURIComponent(selectedPlaybook.name)}`} 
                    alt={selectedPlaybook.name} 
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary bg-white shadow-md flex-shrink-0 cursor-zoom-in hover:scale-105 transition-transform"
                    onClick={() => {
                      setActiveAvatarUrl({
                        url: selectedPlaybook.avatarUrl || `https://avatar.iran.liara.run/username?username=${encodeURIComponent(selectedPlaybook.name)}`,
                        name: selectedPlaybook.name
                      });
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(selectedPlaybook.name)}`;
                    }}
                  />
                  <div>
                    <div className="flex items-center space-x-2.5 mb-2">
                      <span className={`text-xs uppercase font-extrabold px-2.5 py-0.5 rounded-full ${
                        selectedPlaybook.role === 'Judge' ? 'bg-red-50 text-red-600 border border-red-150' : 'bg-blue-50 text-blue-600 border border-blue-150'
                      }`}>
                        {selectedPlaybook.role}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground bg-white px-2.5 py-0.5 rounded border border-border">
                        {selectedPlaybook.type}
                      </span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-foreground">{selectedPlaybook.name}</h1>
                    <p className="text-sm text-muted-foreground font-semibold mt-1.5">{selectedPlaybook.company} — {selectedPlaybook.title}</p>
                  </div>
                </div>
                {selectedPlaybook.linkedin && (
                  <a 
                    href={selectedPlaybook.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 bg-white border border-border px-4 py-2.5 rounded-lg text-xs font-bold text-foreground hover:bg-muted shadow-sm transition-all"
                  >
                    <span>LinkedIn / Website</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                
                {/* Expertise */}
                <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
                  <h2 className="text-base font-bold text-foreground border-b border-border pb-2.5 mb-4">🧠 Chuyên môn thế mạnh</h2>
                  <ul className="list-disc list-inside text-sm text-foreground space-y-2 font-medium">
                    {selectedPlaybook.expertise.map((exp, idx) => (
                      <li key={idx}>{exp}</li>
                    ))}
                  </ul>
                </div>

                {/* Evaluation Lens */}
                <div className="bg-white border border-border rounded-xl p-6 shadow-sm space-y-6">
                  <h2 className="text-base font-bold text-foreground border-b border-border pb-2.5">⭐ Góc Nhìn Đánh Giá (Evaluation Lens)</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-xs font-extrabold text-muted-foreground uppercase mb-2">🎯 Cần tập trung</div>
                      <ul className="text-xs text-foreground space-y-2 font-medium">
                        {selectedPlaybook.mostCaresAbout.map((item, idx) => (
                          <li key={idx} className="bg-secondary p-2 rounded">• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-emerald-600 uppercase mb-2">✅ Điểm cộng</div>
                      <ul className="text-xs text-emerald-800 space-y-2 font-medium">
                        {selectedPlaybook.highlyValues.map((item, idx) => (
                          <li key={idx} className="bg-emerald-50 p-2 rounded">✓ {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-red-600 uppercase mb-2">❌ Điểm trừ</div>
                      <ul className="text-xs text-red-800 space-y-2 font-medium">
                        {selectedPlaybook.deductions.map((item, idx) => (
                          <li key={idx} className="bg-red-50 p-2 rounded">✗ {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Likely Questions */}
                <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
                  <h2 className="text-base font-bold text-foreground border-b border-border pb-2.5 mb-4 flex items-center">
                    <HelpCircle className="w-5 h-5 text-primary mr-2" /> Các câu hỏi họ sẽ đặt ra
                  </h2>
                  <div className="space-y-3">
                    {selectedPlaybook.likelyQuestions.map((q, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-secondary/50 p-3 rounded-lg border border-border text-sm font-semibold">
                        <span className="text-primary font-mono">{idx + 1}.</span>
                        <p>{q}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suggested Questions */}
                <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
                  <h2 className="text-base font-bold text-foreground border-b border-border pb-2.5 mb-4 flex items-center">
                    <Lightbulb className="w-5 h-5 text-emerald-600 mr-2" /> Câu hỏi chất lượng gợi ý hỏi họ
                  </h2>
                  <div className="space-y-4">
                    {selectedPlaybook.bestQuestionsToAsk.map((q, idx) => (
                      <div key={idx} className="border-l-4 border-emerald-500 pl-4 py-1">
                        <div className="text-xs font-bold text-emerald-600 uppercase mb-1">CÂU HỎI {idx + 1}</div>
                        <p className="text-sm font-semibold">{q}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* After Meeting Notes */}
                <div className="bg-secondary/40 border border-border rounded-xl p-6 space-y-6">
                  <h2 className="text-base font-bold text-foreground border-b border-border pb-2.5 flex items-center">
                    <Bookmark className="w-5 h-5 text-primary mr-2" /> Ghi Chú Sau Khi Gặp & Trao Đổi
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xs uppercase font-extrabold text-muted-foreground tracking-wider mb-2">Insight thu hoạch</h3>
                      {selectedPlaybook.insights.length === 0 ? (
                        <p className="text-xs text-muted-foreground italic">Chưa có insight.</p>
                      ) : (
                        <ul className="list-disc list-inside text-sm text-foreground space-y-2 font-medium">
                          {selectedPlaybook.insights.map((ins, idx) => <li key={idx}>{ins}</li>)}
                        </ul>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xs uppercase font-extrabold text-muted-foreground tracking-wider mb-2">Thay đổi của Team</h3>
                      {selectedPlaybook.teamChanges.length === 0 ? (
                        <p className="text-xs text-muted-foreground italic">Chưa ghi nhận thay đổi.</p>
                      ) : (
                        <div className="space-y-2">
                          {selectedPlaybook.teamChanges.map((tc) => (
                            <label key={tc.id} className="flex items-center space-x-2.5 p-2 bg-white rounded border border-border cursor-pointer">
                              <input 
                                type="checkbox"
                                checked={tc.checked}
                                onChange={() => toggleChecklistItem(selectedPlaybook.id, tc.id, 'teamChanges')}
                                className="h-4 w-4 rounded border-gray-300 text-primary"
                              />
                              <span className={`text-xs font-semibold ${tc.checked ? 'line-through text-muted-foreground' : ''}`}>{tc.text}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* 30s cheat sheet */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center space-x-2 text-primary">
                    <Sparkles className="w-5 h-5" />
                    <h2 className="text-sm font-extrabold uppercase tracking-wider">30-Second Cheat Sheet</h2>
                  </div>
                  <div className="space-y-3 pt-2 text-xs font-semibold">
                    <div>
                      <div className="text-[10px] text-primary uppercase font-bold tracking-wider">🧠 Expertise</div>
                      <p className="text-foreground mt-0.5">{selectedPlaybook.cheatSheet.expertise || selectedPlaybook.expertise.slice(0,3).join(' · ')}</p>
                    </div>
                    <div>
                      <div className="text-[10px] text-primary uppercase font-bold tracking-wider">🎯 Cares About</div>
                      <p className="text-foreground mt-0.5">{selectedPlaybook.cheatSheet.likelyCaresAbout || selectedPlaybook.mostCaresAbout.slice(0,3).join(', ')}</p>
                    </div>
                    <div>
                      <div className="text-[10px] text-primary uppercase font-bold tracking-wider">❓ Likely Questions</div>
                      <ul className="list-disc list-inside space-y-0.5 mt-0.5">
                        {(selectedPlaybook.cheatSheet.likelyQuestions || selectedPlaybook.likelyQuestions.slice(0,2)).map((q, idx) => <li key={idx}>{q}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[10px] text-primary uppercase font-bold tracking-wider">🚫 Avoid</div>
                      <p className="text-red-600 mt-0.5">{selectedPlaybook.cheatSheet.avoid || selectedPlaybook.deductions.slice(0,2).join(', ')}</p>
                    </div>
                  </div>
                </div>

                {/* Actions checklist */}
                <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
                  <h2 className="text-sm font-bold text-foreground border-b border-border pb-2 mb-4">Hành động của Team</h2>
                  <div className="space-y-2">
                    {selectedPlaybook.actionForTeam.map((action) => (
                      <label 
                        key={action.id}
                        className={`flex items-start space-x-2.5 p-2 rounded border cursor-pointer ${
                          action.checked ? 'bg-muted/40 border-border text-muted-foreground line-through' : 'bg-white border-border text-foreground'
                        }`}
                      >
                        <input 
                          type="checkbox"
                          checked={action.checked}
                          onChange={() => toggleChecklistItem(selectedPlaybook.id, action.id, 'actionForTeam')}
                          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary"
                        />
                        <span className="text-xs font-semibold leading-tight">{action.text}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. Timeline View */}
        {activeTab === 'timeline' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-secondary p-6 rounded-xl border border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary" /> Lịch Trình Thực Tế VAIC 2026
                </h1>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  Theo dõi sát sao các mốc thời gian, giờ họp của đội, giờ ăn uống, và các hạn nộp Checkpoint chính thức để đảm bảo sản phẩm được hoàn thiện đúng hạn.
                </p>
              </div>
              
              <div className="flex items-center space-x-2 bg-white px-4 py-2.5 rounded-lg border border-border self-start md:self-auto shadow-sm">
                <input 
                  type="checkbox"
                  id="hidePassedToggle"
                  checked={hidePassed}
                  onChange={() => setHidePassed(!hidePassed)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20 cursor-pointer"
                />
                <label htmlFor="hidePassedToggle" className="text-xs font-bold text-foreground cursor-pointer select-none">
                  Ẩn sự kiện đã qua
                </label>
              </div>
            </div>

            <div className="space-y-8">
              {['17/07', '18/07', '19/07'].map((day) => {
                const dayEvents = timelineEvents.filter(e => e.displayDate === day);
                const now = new Date();
                const visibleEvents = dayEvents.filter(e => !hidePassed || now <= e.end);
                const isCollapsed = collapsedDays[day];

                return (
                  <div key={day} className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
                    <div 
                      onClick={() => setCollapsedDays(prev => ({ ...prev, [day]: !prev[day] }))}
                      className="bg-secondary/60 px-6 py-4 border-b border-border flex items-center justify-between cursor-pointer hover:bg-secondary transition-all select-none"
                    >
                      <div className="flex items-center space-x-3">
                        <h2 className="text-lg font-bold text-foreground">Ngày {day}</h2>
                        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">
                          {day === '17/07' ? 'Ngày 1: Khởi động & Nghiên cứu' : day === '18/07' ? 'Ngày 2: Triển khai & Tinh chỉnh' : 'Ngày 3: Đóng gói & Trình bày'}
                        </span>
                      </div>
                      <span className="text-xs text-primary font-bold">
                        {isCollapsed ? '▼ Mở rộng' : '▲ Thu gọn'}
                      </span>
                    </div>

                    {!isCollapsed && (
                      <div className="p-6 divide-y divide-border">
                        {visibleEvents.length === 0 ? (
                          <div className="text-center py-4 text-xs text-muted-foreground italic">
                            Không có sự kiện nào đang diễn ra hoặc chưa qua.
                          </div>
                        ) : (
                          visibleEvents.map((event, idx) => {
                            const isPast = now > event.end;
                            return (
                              <div 
                                key={idx} 
                                className={`py-4 flex flex-col md:flex-row md:items-start md:space-x-6 first:pt-0 last:pb-0 transition-all ${
                                  isPast ? 'opacity-40 grayscale' : ''
                                } ${
                                  event.isCheckpoint ? 'bg-amber-50/20 px-4 rounded-lg border border-amber-100/50 my-2' : event.isTeamDeadline ? 'bg-blue-50/20 px-4 rounded-lg border border-blue-100/50 my-2' : ''
                                }`}
                              >
                                <div className="md:w-32 flex-shrink-0 font-mono text-sm font-extrabold text-primary flex items-center space-x-1.5 mb-2 md:mb-0">
                                  <Clock className="w-4 h-4 text-primary/70" />
                                  <span>{event.displayTime}</span>
                                </div>

                                <div className="flex-1 space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <h3 className={`text-sm font-extrabold ${event.isCheckpoint ? 'text-amber-700' : event.isTeamDeadline ? 'text-blue-700' : 'text-foreground'}`}>
                                      {event.title}
                                    </h3>
                                    {event.isCheckpoint && (
                                      <span className="bg-amber-100 text-amber-800 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded border border-amber-200">
                                        Checkpoint BTC
                                      </span>
                                    )}
                                    {event.isTeamDeadline && (
                                      <span className="bg-blue-100 text-blue-800 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded border border-blue-200">
                                        Nội bộ Team
                                      </span>
                                    )}
                                    {isPast && (
                                      <span className="bg-gray-100 text-gray-500 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded border border-gray-200">
                                        Đã qua
                                      </span>
                                    )}
                                  </div>

                                  {event.deliverables && (
                                    <div className="text-xs text-muted-foreground font-semibold leading-relaxed mt-1 flex items-start space-x-1.5">
                                      <span className="text-primary font-bold">↳ Cần nộp/có:</span>
                                      <span>{event.deliverables}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 5. AI Copilot View (The Intelligent Strategy Center) */}
        {activeTab === 'copilot' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Copilot Header */}
            <div className="bg-secondary p-6 rounded-xl border border-border flex items-center space-x-4">
              <div className="bg-primary/10 p-3.5 rounded-lg text-primary">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-foreground flex items-center gap-2">
                  AI Strategy Copilot <Sparkles className="w-5 h-5 text-primary" />
                </h1>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Trung tâm điều phối chiến thuật của đội thi. Hãy đánh giá trạng thái hiện tại để AI phát hiện lỗ hổng Rubric, kết nối Mentor xử lý lỗi và giả lập phản biện của Giám khảo.
                </p>
              </div>
            </div>

            {/* Step 1: Self-Assessment Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white border border-border rounded-xl p-6 shadow-sm space-y-6">
                <div className="border-b border-border pb-3 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    1. Tự Đánh Giá Năng Lực Dự Án (1-5 Sao)
                  </h2>
                  <span className="text-xs text-muted-foreground italic">Nhấp sao để thay đổi trạng thái</span>
                </div>

                <div className="space-y-4">
                  {rubrics.map((rubric) => (
                    <div key={rubric.id} className="p-4 bg-secondary/30 rounded-lg border border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-sm font-bold text-foreground">{rubric.title}</h3>
                          <span className="text-[10px] bg-white border px-1.5 py-0.5 rounded text-muted-foreground font-bold">
                            Max {rubric.maxPoints} pts
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{rubric.description}</p>
                      </div>

                      {/* Stars input */}
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRubricRatings(prev => ({ ...prev, [rubric.id]: star }))}
                            className={`text-lg transition-transform hover:scale-110 ${
                              star <= rubricRatings[rubric.id] ? 'text-primary' : 'text-gray-200'
                            }`}
                          >
                            ★
                          </button>
                        ))}
                        <span className="text-xs font-bold text-foreground ml-2 font-mono w-6 text-center">
                          {rubricRatings[rubric.id]}/5
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weakness analysis results */}
              <div className="bg-white border border-border rounded-xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-base font-extrabold text-foreground border-b border-border pb-3 mb-4 flex items-center gap-1.5">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    Phân Tích Lỗ Hổng (Gap Analysis)
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-100 rounded-lg p-4 space-y-2">
                      <span className="text-[9px] bg-red-100 text-red-700 px-2 py-0.5 rounded font-extrabold uppercase">
                        Điểm nghẽn nghiêm trọng nhất
                      </span>
                      <h3 className="text-sm font-bold text-red-900 leading-tight">
                        {weakestRubric.title}
                      </h3>
                      <p className="text-xs text-red-700 leading-relaxed">
                        Tự đánh giá ở mức {rubricRatings[weakestRubric.id]}/5. Đây là vùng có nguy cơ cao làm mất điểm tối đa trong thang {weakestRubric.maxPoints} điểm của BTC.
                      </p>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="font-bold text-foreground uppercase tracking-wider text-[10px] text-muted-foreground">Từ khóa kỹ thuật cần làm nổi bật:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {weakestRubric.keywords.map(kw => (
                          <span key={kw} className="bg-secondary text-foreground border px-2.5 py-0.5 rounded-full font-semibold">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border bg-primary/5 -mx-6 -mb-6 p-6 rounded-b-xl flex items-center justify-between text-xs text-primary font-bold">
                  <span>Cuộn xuống xem Mentor phù hợp nhất &darr;</span>
                </div>
              </div>
            </div>

            {/* Step 2: Mentor Recommendation Engine */}
            <div className="bg-white border border-border rounded-xl p-6 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-foreground border-b border-border pb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                2. Mentor Đề Xuất Để Giải Quyết Điểm Nghẽn ({weakestRubric.title})
              </h2>

              {playbooks.length === 0 ? (
                <div className="text-center py-10 text-muted-foreground">
                  Hãy thêm profile Judges/Mentors để hệ thống tự động tìm kiếm kết nối phù hợp.
                </div>
              ) : recommendedMentors.length === 0 ? (
                <div className="text-center py-10 text-muted-foreground">
                  Chưa tìm thấy Mentor/Judge nào có chuyên môn tương ứng. Hãy bổ sung thêm profile.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recommendedMentors.slice(0, 2).map((item, idx) => {
                    const pb = item.playbook;
                    return (
                      <div key={pb.id} className="border border-border rounded-xl p-5 hover:border-primary/50 transition-all flex flex-col justify-between bg-secondary/10">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[10px] bg-primary text-white px-2.5 py-0.5 rounded-full font-bold uppercase">
                              Gợi ý số {idx + 1} (Độ khớp: {item.relevanceScore}đ)
                            </span>
                            <span className="text-xs text-muted-foreground font-semibold">{pb.role} · {pb.type}</span>
                          </div>
                          
                          <div className="flex items-center gap-3 mt-2">
                            <img 
                              src={pb.avatarUrl || `https://avatar.iran.liara.run/username?username=${encodeURIComponent(pb.name)}`} 
                              alt={pb.name} 
                              className="w-10 h-10 rounded-full object-cover border border-primary/20 bg-white flex-shrink-0 cursor-zoom-in hover:scale-105 transition-transform"
                              onClick={() => {
                                setActiveAvatarUrl({
                                  url: pb.avatarUrl || `https://avatar.iran.liara.run/username?username=${encodeURIComponent(pb.name)}`,
                                  name: pb.name
                                });
                              }}
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(pb.name)}`;
                              }}
                            />
                            <div>
                              <h3 className="text-base font-extrabold text-foreground">{pb.name}</h3>
                              <p className="text-xs text-muted-foreground font-semibold">{pb.company} — {pb.title}</p>
                            </div>
                          </div>

                          <div className="mt-4 space-y-3">
                            <div>
                              <span className="block text-[10px] text-muted-foreground font-extrabold uppercase mb-1">Chuyên môn phù hợp:</span>
                              <span className="text-xs font-semibold text-foreground">{pb.expertise.join(' · ')}</span>
                            </div>
                            
                            {pb.bestQuestionsToAsk.length > 0 && (
                              <div className="bg-white p-3 rounded-lg border border-border mt-2">
                                <span className="block text-[10px] text-primary font-extrabold uppercase mb-1">Câu hỏi gợi ý nên đặt cho họ:</span>
                                <p className="text-xs text-foreground font-bold italic leading-relaxed">
                                  "{pb.bestQuestionsToAsk[0]}"
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                          <button 
                            onClick={() => { setCurrentPlaybookId(pb.id); setActiveTab('playbook'); }}
                            className="text-xs text-primary font-bold hover:underline flex items-center gap-0.5"
                          >
                            Xem toàn bộ Playbook của họ <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Step 3: Judge Simulation Objections */}
            <div className="bg-white border border-border rounded-xl p-6 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-foreground border-b border-border pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                3. Giả Lập Phản Biện & Objections Từ Ban Giám Khảo (Judge Simulation)
              </h2>

              {playbooks.filter(p => p.role === 'Judge').length === 0 ? (
                <div className="text-center py-10 text-muted-foreground">
                  Hãy thêm profile của ít nhất một Giám khảo (Judge) vào playbook để thực hiện giả lập.
                </div>
              ) : (
                <div className="space-y-4">
                  {playbooks.filter(p => p.role === 'Judge').map(pb => (
                    <div key={pb.id} className="border border-border rounded-xl p-5 bg-white space-y-4 shadow-sm">
                      <div className="flex justify-between items-start border-b border-border pb-2.5">
                        <div className="flex items-center gap-3">
                          <img 
                            src={pb.avatarUrl || `https://avatar.iran.liara.run/username?username=${encodeURIComponent(pb.name)}`} 
                            alt={pb.name} 
                            className="w-10 h-10 rounded-full object-cover border border-primary/20 bg-white flex-shrink-0 cursor-zoom-in hover:scale-105 transition-transform"
                            onClick={() => {
                              setActiveAvatarUrl({
                                url: pb.avatarUrl || `https://avatar.iran.liara.run/username?username=${encodeURIComponent(pb.name)}`,
                                name: pb.name
                              });
                            }}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(pb.name)}`;
                            }}
                          />
                          <div>
                            <h3 className="text-sm font-extrabold text-foreground">{pb.name} ({pb.type})</h3>
                            <p className="text-xs text-muted-foreground mt-0.5 font-semibold">{pb.company} — {pb.title}</p>
                          </div>
                        </div>
                        <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded border border-red-200 font-extrabold uppercase">
                          Simulated Judge
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                        {/* 1. Perspective */}
                        <div className="space-y-2">
                          <span className="block text-[10px] text-muted-foreground uppercase font-extrabold tracking-wider">Lăng kính đánh giá:</span>
                          <ul className="space-y-1.5 font-semibold">
                            {pb.mostCaresAbout.slice(0, 3).map((item, idx) => (
                              <li key={idx} className="bg-secondary p-2 rounded">• {item}</li>
                            ))}
                          </ul>
                        </div>

                        {/* 2. Expected Objections / Questions */}
                        <div className="space-y-2">
                          <span className="block text-[10px] text-red-600 uppercase font-extrabold tracking-wider">Họ sẽ bắt bẻ / hỏi khó gì?</span>
                          <div className="space-y-1.5 font-semibold text-red-900">
                            {pb.likelyQuestions.slice(0, 3).map((q, idx) => (
                              <div key={idx} className="bg-red-50 p-2 rounded border border-red-100 flex items-start gap-1">
                                <span>❓</span>
                                <span>{q}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 3. Mitigation recommendations */}
                        <div className="space-y-2">
                          <span className="block text-[10px] text-emerald-600 uppercase font-extrabold tracking-wider">Cách chuẩn bị để đối phó:</span>
                          <div className="space-y-1.5 font-semibold text-emerald-900">
                            {pb.actionForTeam.slice(0, 3).map((act, idx) => (
                              <div key={idx} className="bg-emerald-50 p-2 rounded border border-emerald-100 flex items-start gap-1">
                                <span>🛡️</span>
                                <span>{act.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 5. Add / Edit Playbook Form View */}
        {(isAddingNew || isEditing) && (
          <form onSubmit={handleSave} className="bg-white border border-border rounded-xl p-6 max-w-4xl mx-auto shadow-sm space-y-8 animate-fadeIn">
            <div className="flex justify-between items-center border-b border-border pb-4">
              <h2 className="text-xl font-bold text-foreground">
                {isEditing ? `Chỉnh sửa Playbook: ${formName}` : 'Tạo Winning Playbook Mới'}
              </h2>
              <button 
                type="button" 
                onClick={() => { setIsAddingNew(false); setIsEditing(false); resetForm(); }}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground"
              >
                Hủy bỏ
              </button>
            </div>

            {/* Basic Info */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-extrabold text-primary tracking-wider border-b border-border pb-1">1. Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">Tên Giám khảo / Mentor *</label>
                  <input 
                    type="text" 
                    required
                    value={formName} 
                    onChange={(e) => setFormName(e.target.value)} 
                    placeholder="Ví dụ: Hien Luu"
                    className="w-full px-3.5 py-2 border border-border rounded-lg focus:outline-none focus:border-primary text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">Vai trò</label>
                  <div className="flex space-x-3 mt-1.5">
                    {['Judge', 'Mentor'].map((role) => (
                      <label key={role} className="flex items-center space-x-2 text-sm font-semibold cursor-pointer">
                        <input 
                          type="radio" 
                          name="formRole" 
                          checked={formRole === role} 
                          onChange={() => setFormRole(role as 'Judge' | 'Mentor')}
                        />
                        <span>{role}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">Loại</label>
                  <select 
                    value={formType} 
                    onChange={(e) => setFormType(e.target.value as Playbook['type'])}
                    className="w-full px-3.5 py-2 border border-border rounded-lg bg-white text-sm font-semibold focus:outline-none focus:border-primary"
                  >
                    <option value="Domain Expert">Domain Expert</option>
                    <option value="Technical Judge">Technical Judge</option>
                    <option value="Non-tech Industry Judge">Non-tech Industry Judge</option>
                    <option value="Senior Judge">Senior Judge</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">Công ty</label>
                  <input 
                    type="text" 
                    value={formCompany} 
                    onChange={(e) => setFormCompany(e.target.value)} 
                    placeholder="LinkedIn (ex), DoorDash"
                    className="w-full px-3.5 py-2 border border-border rounded-lg text-sm font-semibold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">Chức danh / Lĩnh vực chính</label>
                  <input 
                    type="text" 
                    value={formTitle} 
                    onChange={(e) => setFormTitle(e.target.value)} 
                    placeholder="AI Engineering, AI Agents"
                    className="w-full px-3.5 py-2 border border-border rounded-lg text-sm font-semibold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">LinkedIn / Website Link</label>
                  <input 
                    type="url" 
                    value={formLinkedin} 
                    onChange={(e) => setFormLinkedin(e.target.value)} 
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-3.5 py-2 border border-border rounded-lg text-sm font-semibold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">Ảnh chân dung (Photo URL)</label>
                  <input 
                    type="url" 
                    value={formAvatarUrl} 
                    onChange={(e) => setFormAvatarUrl(e.target.value)} 
                    placeholder="https://example.com/photo.jpg"
                    className="w-full px-3.5 py-2 border border-border rounded-lg text-sm font-semibold focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Expertise & Evaluation */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-extrabold text-primary tracking-wider border-b border-border pb-1">2. Expertise & Evaluation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Họ thực sự giỏi điều gì? (Expertise)</label>
                  <textarea 
                    value={formExpertise} 
                    onChange={(e) => setFormExpertise(e.target.value)} 
                    rows={4}
                    placeholder="AI Agents&#10;LLM Infrastructure"
                    className="w-full px-3.5 py-2 border border-border rounded-lg text-sm font-medium focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Quan tâm điều gì nhất?</label>
                  <textarea 
                    value={formMostCares} 
                    onChange={(e) => setFormMostCares(e.target.value)} 
                    rows={4}
                    placeholder="Production-ready Architecture&#10;Reliability"
                    className="w-full px-3.5 py-2 border border-border rounded-lg text-sm font-medium focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-emerald-600 mb-1">Điểm cộng (+)</label>
                  <textarea 
                    value={formHighlyValues} 
                    onChange={(e) => setFormHighlyValues(e.target.value)} 
                    rows={4}
                    placeholder="Có Architecture rõ ràng"
                    className="w-full px-3.5 py-2 border border-border rounded-lg text-sm font-medium focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-red-600 mb-1">Điểm trừ (-)</label>
                  <textarea 
                    value={formDeductions} 
                    onChange={(e) => setFormDeductions(e.target.value)} 
                    rows={4}
                    placeholder="Buzzwords&#10;Hardcode Demo"
                    className="w-full px-3.5 py-2 border border-border rounded-lg text-sm font-medium focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Questions & Moment */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-extrabold text-primary tracking-wider border-b border-border pb-1">3. Questions & Optimal Moment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Họ sẽ đặt câu hỏi gì? (Likely Questions)</label>
                  <textarea 
                    value={formQuestions} 
                    onChange={(e) => setFormQuestions(e.target.value)} 
                    rows={4}
                    placeholder="Vì sao chọn Architecture này?"
                    className="w-full px-3.5 py-2 border border-border rounded-lg text-sm font-medium focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Câu hỏi chất lượng để hỏi họ (Best Questions to Ask)</label>
                  <textarea 
                    value={formBestQToAsk} 
                    onChange={(e) => setFormBestQToAsk(e.target.value)} 
                    rows={4}
                    placeholder="Điều gì khiến anh tin rằng một AI Agent đủ 'production-ready'?"
                    className="w-full px-3.5 py-2 border border-border rounded-lg text-sm font-medium focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Khi nào nên tìm gặp? (Mỗi dòng một mốc)</label>
                  <textarea 
                    value={formBestMoment} 
                    onChange={(e) => setFormBestMoment(e.target.value)} 
                    rows={2}
                    placeholder="Sau khi chốt Architecture&#10;Trước khi Freeze MVP"
                    className="w-full px-3.5 py-2 border border-border rounded-lg text-sm font-medium focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Team cần chuẩn bị gì? (Action for Team)</label>
                  <textarea 
                    value={formActionItems} 
                    onChange={(e) => setFormActionItems(e.target.value)} 
                    rows={2}
                    placeholder="Chuẩn bị sơ đồ Architecture"
                    className="w-full px-3.5 py-2 border border-border rounded-lg text-sm font-medium focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* After Meeting Notes */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-extrabold text-primary tracking-wider border-b border-border pb-1">4. After Meeting Notes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Insight nhận được (Mỗi ý một dòng)</label>
                  <textarea 
                    value={formInsights} 
                    onChange={(e) => setFormInsights(e.target.value)} 
                    rows={3}
                    placeholder="Insight..."
                    className="w-full px-3.5 py-2 border border-border rounded-lg text-sm font-medium focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Thay đổi cụ thể của Team (Mỗi ý một dòng)</label>
                  <textarea 
                    value={formTeamChanges} 
                    onChange={(e) => setFormTeamChanges(e.target.value)} 
                    rows={3}
                    placeholder="Thay đổi..."
                    className="w-full px-3.5 py-2 border border-border rounded-lg text-sm font-medium focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit buttons */}
            <div className="pt-4 border-t border-border flex justify-end space-x-3">
              <button 
                type="button" 
                onClick={() => { setIsAddingNew(false); setIsEditing(false); resetForm(); }}
                className="bg-transparent border border-border text-foreground hover:bg-muted px-5 py-2.5 rounded-lg text-sm font-bold transition-all"
              >
                Hủy bỏ
              </button>
              <button 
                type="submit" 
                className="bg-primary text-white hover:bg-primary-hover px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Save className="w-4.5 h-4.5" /> Lưu Playbook
              </button>
            </div>
          </form>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-muted-foreground">
          <p>© VAIC 2026 - Đội thi Conan School. Xây dựng vì mục tiêu Vô địch.</p>
        </div>
      </footer>
      {/* Zoom Avatar Modal */}
      {activeAvatarUrl && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setActiveAvatarUrl(null)}
        >
          <div 
            className="bg-white rounded-2xl p-4 max-w-sm w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveAvatarUrl(null)}
              className="absolute top-3 right-3 bg-black/40 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>
            <img 
              src={activeAvatarUrl.url} 
              alt={activeAvatarUrl.name} 
              className="w-full h-auto aspect-square rounded-xl object-cover border border-border"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://avatar.iran.liara.run/username?username=${encodeURIComponent(activeAvatarUrl.name)}`;
              }}
            />
            <div className="mt-4 text-center">
              <h4 className="font-extrabold text-foreground text-lg">{activeAvatarUrl.name}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">Click bất kỳ đâu bên ngoài để đóng</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
