 let display = document.getElementById('display');
        let calculator = document.getElementById('calculator');
        let startScreen = document.getElementById('startScreen');
        let modal = document.getElementById('modal');
        let current = '0';
        let resetNext = false;
        let gtMemory = 0;
        let memory = 0;

        // 🚀 START CALCULATOR
        function startCalculator() {
            startScreen.classList.add('hide');
            calculator.classList.add('show');
        }

        // 🏠 GO BACK TO HOME
        function goHome() {
            calculator.classList.remove('show');
            startScreen.classList.remove('hide');
            current = '0';
            updateDisplay();
        }
 // ✨ MD AFZAL ke liye Khoobsurat Lines
    const afzalBio = [
        // "💻 Code with Passion | Dream with Vision",
        // "🚀 Turning Ideas into Digital Reality",
        // "⚡ Full Stack Developer from Semapur, Bihar",
        // "🎯 Mission: Build Apps that Solve Real Problems",
        // "💎 Specialized in 3D UI & Modern Web Design",
        // "🔥 Motto: Dream Big, Code Smart, Create Impact",
        // "🌟 Innovation is My Passion, Excellence is My Goal"

    "💻 Coding with Passion, Building with Purpose",
    "🚀 Turning Innovative Ideas into Powerful Digital Reality",
    "⚡ Creative Full Stack Developer from patna, Bihar",
    "🎯 Mission: To Build Modern Apps that Solve Real-Life Problems",
   " 💎 Skilled in 3D UI Design, Web Development & Smart Technology",
   " 🔥 Motto: Think Big, Code Smart, Inspire the World",
   " 🌟 Passion for Innovation | Commitment to Excellence",
   " 🚀 Designing Tomorrow with Today’s Technology",
   " ✨ Success Begins with Vision and Hard Work",
    "Version: 1.0",
    "Created by: MD AFZAL",
    ];
    
    function showAfzalBio() {
        const modal = document.getElementById('bioModal');
        const bioContainer = document.getElementById('bioLines');
        
        // Sabhi lines add karo
        bioContainer.innerHTML = '';
        afzalBio.forEach(line => {
            const p = document.createElement('div');
            p.className = 'bio-line';
            p.textContent = line;
            bioContainer.appendChild(p);
        });
        
        modal.style.display = 'flex';
        
        // Console me bhi print karo
        console.log('%c👨‍💻 MD AFZAL - DEVELOPER BIO', 'color: #00f2fe; font-size: 16px; font-weight: bold;');
        afzalBio.forEach(line => console.log('%c' + line, 'color: #4facfe; font-size: 14px;'));
    }
    
    function closeBio() {
        document.getElementById('bioModal').style.display = 'none';
    }
    
    // Modal ke bahar click karne pe close
    document.getElementById('bioModal').addEventListener('click', function(e) {
        if (e.target === this) closeBio();
    });
        // 📋 SHOW MODAL
        function showModal(type) {
            const header = document.getElementById('modalHeader');
            const body = document.getElementById('modalBody');
            
            if (type === 'about') {
                header.textContent = 'About Calculator Pro';
                body.innerHTML = `
                    <p><b>Calculator Pro</b> is a powerful 3D scientific calculator designed with a beautiful pastel theme.</p>
                    <ul>
                        <li>✅ 35+ Scientific Functions</li>
                        <li>✅ Memory Functions (M+, M-, MR)</li>
                        <li>✅ Grand Total (GT) Feature</li>
                        <li>✅ 3D Pastel Design</li>
                        <li>✅ Mobile Responsive</li>
                    </ul>
                    <p><b>Version:</b> 1.0<br><b>Created by:</b> MD AFZAL</p>
                `;
            } else if (type === 'tips') {
                header.textContent = 'Tips & Tricks';
                body.innerHTML = `
                    <p><b>Quick Tips:</b></p>
                    <ul>
                        <li><b>sin/cos/tan:</b> Use parentheses like sin(90)</li>
                        <li><b>Square Root:</b> Press √ then number like √(25)</li>
                        <li><b>Power:</b> Use x^y for powers like 2**3 = 8</li>
                        <li><b>Memory:</b> M+ adds, M- subtracts, MR recalls</li>
                        <li><b>GT:</b> Stores sum of all calculations</li>
                        <li><b>← Button:</b> Takes you back to home screen</li>
                    </ul>
                `;
            } else if (type === 'faq') {
                header.textContent = 'FAQ';
                body.innerHTML = `
                    <p><b>Q: How to calculate sin/cos?</b><br>A: Press sin( then enter value like 90, then )</p>
                    <p><b>Q: What is GT?</b><br>A: GT stores total of all your calculations</p>
                    <p><b>Q: How to use memory?</b><br>A: Calculate first, then M+ to add, MR to recall</p>
                    <p><b>Q: ← button kya karta hai?</b><br>A: Home screen pe wapas le jata hai</p>
                `;
            } else if (type === 'contact') {
                header.textContent = 'Contact Us';
                body.innerHTML = `
                    <p><b>Developer:</b> MD AFZAL</p>
                    <p><b>Email:</b> support@calculatorpro.com</p>
                    <p><b>Website:</b> www.calculatorpro.com</p>
                    <p><b>Version:</b> 1.0.0</p>
                    <p style="margin-top: 15px;">For any issues or feedback, feel free to contact us!</p>
                `;
            }
            
            modal.classList.add('show');
        }

        // ❌ CLOSE MODAL
        function closeModal() {
            modal.classList.remove('show');
        }

        function updateDisplay() {
            display.textContent = current;
        }

        function append(val) {
            if (resetNext) {
                current = '0';
                resetNext = false;
            }
            if (current === '0' && val !== '.' && val !== '00' && val !== '000') {
                current = val;
            } else {
                current += val;
            }
            updateDisplay();
        }

        function addFunc(func) {
            if (resetNext) {
                current = '0';
                resetNext = false;
            }
            if (current === '0') {
                current = func;
            } else {
                current += func;
            }
            updateDisplay();
        }

        function calculate() {
            try {
                if (current.includes('/0') && !current.includes('/0.')) {
                    current = 'Error';
                    updateDisplay();
                    resetNext = true;
                    return;
                }
                
                let expr = current
                    .replace(/sin\(/g, 'Math.sin(')
                    .replace(/cos\(/g, 'Math.cos(')
                    .replace(/tan\(/g, 'Math.tan(')
                    .replace(/log\(/g, 'Math.log10(')
                    .replace(/√\(/g, 'Math.sqrt(');
                
                let result = eval(expr);
                
                if (isNaN(result) || !isFinite(result)) {
                    current = 'Error';
                } else {
                    gtMemory += parseFloat(result);
                    current = String(parseFloat(result.toFixed(8)));
                }
                updateDisplay();
                resetNext = true;
            } catch (e) {
                current = 'Error';
                updateDisplay();
                resetNext = true;
            }
        }

        function percent() {
            try {
                current = String(parseFloat(current) / 100);
                updateDisplay();
                resetNext = true;
            } catch (e) {
                current = 'Error';
                updateDisplay();
            }
        }

        function clearAll() {
            current = '0';
            gtMemory = 0;
            memory = 0;
            updateDisplay();
            resetNext = false;
        }

        function clearEntry() {
            current = '0';
            updateDisplay();
            resetNext = false;
        }

        function backspace() {
            if (current.length > 1) {
                current = current.slice(0, -1);
            } else {
                current = '0';
            }
            updateDisplay();
        }

        function grandTotal() {
            current = String(gtMemory);
            updateDisplay();
            resetNext = true;
        }

        function memoryAdd() {
            calculate();
            if (current !== 'Error') {
                memory += parseFloat(current);
            }
        }

        function memorySubtract() {
            calculate();
            if (current !== 'Error') {
                memory -= parseFloat(current);
            }
        }

        function memoryRecall() {
            current = String(memory);
            updateDisplay();
            resetNext = true;
        }
