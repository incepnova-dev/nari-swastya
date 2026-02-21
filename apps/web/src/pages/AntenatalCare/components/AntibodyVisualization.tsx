import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface AntibodyVisualizationProps {
    className?: string;
}

export const AntibodyVisualization: React.FC<AntibodyVisualizationProps> = ({ className }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const requestRef = useRef<number>();

    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);

    // Three.js refs for animation
    const sceneRef = useRef<THREE.Scene | null>(null);
    const placentaRef = useRef<THREE.Mesh | null>(null);
    const motherRef = useRef<THREE.Mesh | null>(null);
    const babyRef = useRef<THREE.Mesh | null>(null);
    const antibodiesRef = useRef<THREE.Mesh[]>([]);
    const bkgParticlesRef = useRef<THREE.Points[]>([]);

    useEffect(() => {
        if (!canvasRef.current || !containerRef.current) return;

        const width = containerRef.current.clientWidth;
        const height = 400; // Fixed height for visualization

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;
        scene.background = null;

        // Camera
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.set(0, 0, 15);
        camera.lookAt(0, 0, 0);

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        rendererRef.current = renderer;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        // Mother
        const motherGeometry = new THREE.SphereGeometry(2, 32, 32);
        const motherMaterial = new THREE.MeshPhongMaterial({
            color: 0xec407a,
            transparent: true,
            opacity: 0.3,
            shininess: 30
        });
        const mother = new THREE.Mesh(motherGeometry, motherMaterial);
        mother.position.set(-5, 0, 0);
        scene.add(mother);
        motherRef.current = mother;

        // Placenta
        const placentaGeometry = new THREE.TorusGeometry(1.5, 0.5, 16, 100);
        const placentaMaterial = new THREE.MeshPhongMaterial({
            color: 0xd81b60,
            transparent: true,
            opacity: 0.4
        });
        const placenta = new THREE.Mesh(placentaGeometry, placentaMaterial);
        placenta.rotation.x = Math.PI / 2;
        scene.add(placenta);
        placentaRef.current = placenta;

        // Baby
        const babyGeometry = new THREE.SphereGeometry(1.2, 32, 32);
        const babyMaterial = new THREE.MeshPhongMaterial({
            color: 0x7e57c2,
            transparent: true,
            opacity: 0.3,
            shininess: 30
        });
        const baby = new THREE.Mesh(babyGeometry, babyMaterial);
        baby.position.set(5, 0, 0);
        scene.add(baby);
        babyRef.current = baby;

        // Antibodies
        const antibodyGeometry = new THREE.SphereGeometry(0.15, 16, 16);
        const antibodyMaterial = new THREE.MeshPhongMaterial({
            color: 0x4caf50,
            emissive: 0x2e7d32,
            emissiveIntensity: 0.5,
            shininess: 100
        });

        const antibodies: THREE.Mesh[] = [];
        for (let i = 0; i < 20; i++) {
            const antibody = new THREE.Mesh(antibodyGeometry, antibodyMaterial);
            const angle = (i / 20) * Math.PI * 2;
            const radius = 2.5;
            antibody.position.set(
                -5 + Math.cos(angle) * radius,
                Math.sin(angle) * radius,
                Math.sin(angle * 2) * 0.5
            );
            antibody.userData = {
                progress: i * 0.05,
                speed: 0.02 + Math.random() * 0.01
            };
            scene.add(antibody);
            antibodies.push(antibody);
        }
        antibodiesRef.current = antibodies;

        // Connections
        const createCurve = (start: number, end: number) => {
            const points = [];
            for (let i = 0; i <= 20; i++) {
                const t = i / 20;
                const x = start + (end - start) * t;
                const y = Math.sin(t * Math.PI) * 0.5;
                points.push(new THREE.Vector3(x, y, 0));
            }
            return new THREE.BufferGeometry().setFromPoints(points);
        };

        const lineMat1 = new THREE.LineBasicMaterial({ color: 0xec407a, transparent: true, opacity: 0.2 });
        scene.add(new THREE.Line(createCurve(-5, 0), lineMat1));

        const lineMat2 = new THREE.LineBasicMaterial({ color: 0x7e57c2, transparent: true, opacity: 0.2 });
        scene.add(new THREE.Line(createCurve(0, 5), lineMat2));

        // Background Particles
        const partGeo = new THREE.BufferGeometry();
        const posArr = new Float32Array(300);
        for (let i = 0; i < 300; i++) posArr[i] = (Math.random() - 0.5) * 20;
        partGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
        const partMat = new THREE.PointsMaterial({ color: 0xec407a, size: 0.05, transparent: true, opacity: 0.3 });
        const parts = new THREE.Points(partGeo, partMat);
        scene.add(parts);
        bkgParticlesRef.current = [parts];

        // Resize handler
        const handleResize = () => {
            if (!containerRef.current) return;
            const w = containerRef.current.clientWidth;
            camera.aspect = w / height;
            camera.updateProjectionMatrix();
            renderer.setSize(w, height);
        };
        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
            requestRef.current = requestAnimationFrame(animate);

            if (placentaRef.current) placentaRef.current.rotation.z += 0.005;
            if (motherRef.current) motherRef.current.rotation.y += 0.002;
            if (babyRef.current) babyRef.current.rotation.y += 0.003;
            bkgParticlesRef.current.forEach(p => p.rotation.y += 0.001);

            if (isPlaying) {
                antibodiesRef.current.forEach((ab, i) => {
                    const data = ab.userData;
                    data.progress += data.speed;
                    if (data.progress > 1) data.progress = 0;

                    const t = data.progress;
                    let x, y, z;
                    if (t < 0.5) {
                        const localT = t / 0.5;
                        x = -5 + (0 - (-5)) * localT;
                        y = Math.sin(localT * Math.PI) * 1.5;
                        z = Math.cos(i * 0.5) * 0.3;
                    } else {
                        const localT = (t - 0.5) / 0.5;
                        x = 0 + (5 - 0) * localT;
                        y = Math.sin(localT * Math.PI) * 1.5;
                        z = Math.sin(i * 0.5) * 0.3;
                    }
                    ab.position.set(x, y, z);
                    const s = 1 + Math.sin(t * Math.PI * 4) * 0.2;
                    ab.scale.set(s, s, s);
                });

                setProgress(prev => {
                    const next = prev + 0.005;
                    if (next >= 1) {
                        setCurrentStep(s => (s + 1) % 4);
                        return 0;
                    }
                    return next;
                });
            }

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            renderer.dispose();
            // Free up memory
            motherGeometry.dispose();
            motherMaterial.dispose();
            placentaGeometry.dispose();
            placentaMaterial.dispose();
            babyGeometry.dispose();
            babyMaterial.dispose();
            antibodyGeometry.dispose();
            antibodyMaterial.dispose();
            partGeo.dispose();
            partMat.dispose();
        };
    }, [isPlaying]);

    const steps = [
        { id: 1, title: "Vaccination", text: "Mother receives vaccine, triggering antibody production." },
        { id: 2, title: "Immunity Buildup", text: "Maternal immune system builds peak IgG levels over 2-3 weeks." },
        { id: 3, title: "Placental Transfer", text: "IgG antibodies cross the placenta specifically in the 3rd trimester." },
        { id: 4, title: "Newborn Protection", text: "Baby is born with critical protection for the first 6 months." }
    ];

    return (
        <div className={`antibody-vis-section ${className || ''}`} ref={containerRef}>
            <div className="vis-header">
                <h3>Antibody Transfer Visualization</h3>
                <p>See how immunity is passed from mother to baby</p>
            </div>

            <div className="vis-main">
                <div className="canvas-wrapper">
                    <canvas ref={canvasRef} id="antibodyCanvas" />
                    <div className="canvas-labels">
                        <span className="label mother">MOTHER</span>
                        <span className="label placenta">PLACENTA</span>
                        <span className="label baby">BABY</span>
                    </div>
                </div>

                <div className="vis-controls">
                    <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${progress * 100}%` }} />
                    </div>
                    <div className="control-buttons">
                        <button className="btn-icon" onClick={() => setIsPlaying(!isPlaying)}>
                            {isPlaying ? '⏸️ Pause' : '▶️ Play Animation'}
                        </button>
                        <button className="btn-icon outline" onClick={() => { setIsPlaying(false); setProgress(0); setCurrentStep(0); }}>
                            🔄 Reset
                        </button>
                        <button className="btn-info" onClick={() => (window as any).ANC_MODAL('Antibody Transfer', 'Detailed info about IgG transfer...')}>
                            ℹ️ Learn More
                        </button>
                    </div>
                </div>

                <div className="vis-steps">
                    {steps.map((step, idx) => (
                        <div key={step.id} className={`vis-step ${currentStep === idx ? 'active' : ''}`}>
                            <span className="step-num">{step.id}</span>
                            <div className="step-content">
                                <h4>{step.title}</h4>
                                <p>{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
