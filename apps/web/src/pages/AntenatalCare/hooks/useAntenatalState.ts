import { useState, useEffect } from 'react';

export interface AntenatalState {
    week: number;
    foods: string[];
    nutrients: {
        folic: number;
        iron: number;
        calcium: number;
        protein: number;
    };
    kicks: { count: number; timestamp: number; duration: number }[];
    currentKickCount: number;
    kickStartTime: number | null;
    birthPlanV2: {
        labor: { preferences: string[]; sliders: Record<string, number> };
        pain: { preferences: string[]; sliders: Record<string, number> };
        delivery: { preferences: string[]; sliders: Record<string, number> };
        postpartum: { preferences: string[]; sliders: Record<string, number> };
    };
    postpartumChecklist: string[];
    pinnedInsight: string | null;
    currentInsight: string | null;
}

const DEFAULT_STATE: AntenatalState = {
    week: 12,
    foods: [],
    nutrients: { folic: 0, iron: 0, calcium: 0, protein: 0 },
    kicks: [],
    currentKickCount: 0,
    kickStartTime: null,
    birthPlanV2: {
        labor: { preferences: [], sliders: {} },
        pain: { preferences: [], sliders: {} },
        delivery: { preferences: [], sliders: {} },
        postpartum: { preferences: [], sliders: {} },
    },
    postpartumChecklist: [],
    pinnedInsight: null,
    currentInsight: null,
};

export const useAntenatalState = () => {
    const [state, setState] = useState<AntenatalState>(() => {
        const saved = localStorage.getItem('anc_state_v2');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                return DEFAULT_STATE;
            }
        }
        return DEFAULT_STATE;
    });

    useEffect(() => {
        localStorage.setItem('anc_state_v2', JSON.stringify(state));
    }, [state]);

    const updateState = (updates: Partial<AntenatalState>) => {
        setState((prev) => ({ ...prev, ...updates }));
    };

    const updateWeek = (week: number) => {
        updateState({ week: Math.max(1, Math.min(40, week)) });
    };

    const addFood = (food: string, nutrients: { folic: number; iron: number; calcium: number; protein: number }) => {
        setState((prev) => ({
            ...prev,
            foods: [...prev.foods, food],
            nutrients: {
                folic: prev.nutrients.folic + nutrients.folic,
                iron: prev.nutrients.iron + nutrients.iron,
                calcium: prev.nutrients.calcium + nutrients.calcium,
                protein: prev.nutrients.protein + nutrients.protein,
            },
        }));
    };

    const resetNutrients = () => {
        updateState({ foods: [], nutrients: { folic: 0, iron: 0, calcium: 0, protein: 0 } });
    };

    const addKick = () => {
        if (!state.kickStartTime) {
            updateState({ currentKickCount: 1, kickStartTime: Date.now() });
        } else {
            updateState({ currentKickCount: state.currentKickCount + 1 });
        }
    };

    const finishKickSession = () => {
        if (state.kickStartTime) {
            const durationMillis = Date.now() - state.kickStartTime;
            const durationMins = Math.round(durationMillis / 60000);
            const newSession = {
                count: state.currentKickCount,
                timestamp: state.kickStartTime,
                duration: durationMins,
            };
            setState((prev) => ({
                ...prev,
                kicks: [newSession, ...prev.kicks].slice(0, 10),
                currentKickCount: 0,
                kickStartTime: null,
            }));
        }
    };

    const toggleBirthPreference = (stage: keyof AntenatalState['birthPlanV2'], pref: string) => {
        setState((prev) => {
            const currentPrefs = prev.birthPlanV2[stage].preferences;
            const newPrefs = currentPrefs.includes(pref)
                ? currentPrefs.filter((p) => p !== pref)
                : [...currentPrefs, pref];
            return {
                ...prev,
                birthPlanV2: {
                    ...prev.birthPlanV2,
                    [stage]: { ...prev.birthPlanV2[stage], preferences: newPrefs },
                },
            };
        });
    };

    const updateBirthSlider = (stage: keyof AntenatalState['birthPlanV2'], key: string, value: number) => {
        setState((prev) => ({
            ...prev,
            birthPlanV2: {
                ...prev.birthPlanV2,
                [stage]: {
                    ...prev.birthPlanV2[stage],
                    sliders: { ...prev.birthPlanV2[stage].sliders, [key]: value },
                },
            },
        }));
    };

    const togglePostpartumItem = (item: string) => {
        setState((prev) => {
            const newList = prev.postpartumChecklist.includes(item)
                ? prev.postpartumChecklist.filter((i) => i !== item)
                : [...prev.postpartumChecklist, item];
            return { ...prev, postpartumChecklist: newList };
        });
    };

    return {
        state,
        updateWeek,
        addFood,
        resetNutrients,
        addKick,
        finishKickSession,
        toggleBirthPreference,
        updateBirthSlider,
        togglePostpartumItem,
        updateState,
    };
};
