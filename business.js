// Industry Multipliers based on Australian Market Trends
const industryMultipliers = {
    "Technology": 5.5,
    "Retail": 2.5,
    "Hospitality": 2.5,
    "Media": 3.75,
    "Marketing": 4.25,
    "Construction": 2.75,
    "Healthcare": 4.0,
    "Finance": 4.25,
    "Real Estate": 4.25,
    "Education": 4.0,
    "Transportation": 3.5,
    "Agriculture": 2.25,
    "Manufacturing": 3.5,
    "Legal": 5.5,
    "Energy": 4.5,
    "Arts & Entertainment": 2.75,
    "Other": 1.0
};

// AI Replaceability Factors (Savings Percentage)
const aiReplaceability = {
    "Technology": 0.2,
    "Retail": 0.75,
    "Hospitality": 0.8,
    "Media": 0.3,
    "Marketing": 0.3,
    "Construction": 0.5,
    "Healthcare": 0.2,
    "Finance": 0.4,
    "Real Estate": 0.4,
    "Education": 0.2,
    "Transportation": 0.6,
    "Agriculture": 0.5,
    "Manufacturing": 0.6,
    "Legal": 0.1,
    "Energy": 0.4,
    "Arts & Entertainment": 0.5,
    "Other": 0.0
};

// Staff Value Multiplier based on Industry
const staffValueMultiplier = {
    "Technology": 4.0,
    "Retail": 1.5,
    "Hospitality": 1.0,
    "Media": 2.75,
    "Marketing": 3.0,
    "Construction": 2.0,
    "Healthcare": 2.5,
    "Finance": 3.0,
    "Real Estate": 3.0,
    "Education": 2.75,
    "Transportation": 2.5,
    "Agriculture": 1.75,
    "Manufacturing": 2.5,
    "Legal": 4.5,
    "Energy": 3.5,
    "Arts & Entertainment": 2.0,
    "Other": 1.0
};

// Hypothetical Average Financial Data per Industry
const industryAverages = {
    "Technology": { income: 150000, expenses: 80000, debt: 30000, staff: 20 },
    "Retail": { income: 100000, expenses: 60000, debt: 20000, staff: 15 },
    "Hospitality": { income: 120000, expenses: 70000, debt: 25000, staff: 40 },
    "Media": { income: 130000, expenses: 72000, debt: 26000, staff: 20 },
    "Marketing": { income: 115000, expenses: 68000, debt: 23000, staff: 20 },
    "Construction": { income: 130000, expenses: 70000, debt: 30000, staff: 20 },
    "Healthcare": { income: 140000, expenses: 75000, debt: 35000, staff: 25 },
    "Finance": { income: 200000, expenses: 90000, debt: 40000, staff: 30 },
    "Real Estate": { income: 160000, expenses: 80000, debt: 32000, staff: 25 },
    "Education": { income: 105000, expenses: 60000, debt: 21000, staff: 15 },
    "Transportation": { income: 125000, expenses: 70000, debt: 27000, staff: 30 },
    "Agriculture": { income: 95000, expenses: 55000, debt: 18000, staff: 10 },
    "Manufacturing": { income: 140000, expenses: 75000, debt: 35000, staff: 25 },
    "Legal": { income: 180000, expenses: 85000, debt: 38000, staff: 20 },
    "Energy": { income: 170000, expenses: 82000, debt: 36000, staff: 22 },
    "Arts & Entertainment": { income: 90000, expenses: 50000, debt: 15000, staff: 15 },
    "Other": { income: 100000, expenses: 60000, debt: 20000, staff: 10 }
};

// Show Method Fields
function showMethodFields() {
    const method = document.getElementById('valuationMethod').value;
    const earningsSection = document.getElementById('earningsFields');
    const dcfSection = document.getElementById('dcfFields');

    // Hide specific sections initially
    earningsSection.classList.add('hidden');
    dcfSection.classList.add('hidden');

    if (method === 'earnings') {
        earningsSection.classList.remove('hidden');
    } else if (method === 'dcf') {
        dcfSection.classList.remove('hidden');
    }

    clearValuationResult();
}

// Toggle AI Replacement Section
function toggleAIReplacement() {
    const aiReplaceable = document.getElementById('aiReplaceable').value;
    const aiReplacementSection = document.getElementById('aiReplacementSection');

    if (aiReplaceable === 'yes') {
        aiReplacementSection.classList.remove('hidden');
    } else {
        aiReplacementSection.classList.add('hidden');
    }

    clearValuationResult();
}

// Toggle IP Fields
function toggleIPFields() {
    const hasIP = document.getElementById('hasIP').value;
    const ipFields = document.getElementById('ipFields');

    if (hasIP === 'yes') {
        ipFields.classList.remove('hidden');
    } else {
        ipFields.classList.add('hidden');
    }

    clearValuationResult();
}

// Clear Valuation Result and Charts
function clearValuationResult() {
    const resultDiv = document.getElementById('valuationResult');
    resultDiv.classList.add('hidden');
    resultDiv.innerHTML = '';

    const chartsSection = document.getElementById('chartsSection');
    chartsSection.classList.add('hidden');
    chartsSection.innerHTML = `
        <div class="section-title">Valuation Comparison Charts</div>
        <div class="chartsContainer">
            <div class="chartBox">
                <canvas id="valuationChart"></canvas>
            </div>
            <div class="chartBox">
                <canvas id="staffChart"></canvas>
            </div>
            <div class="chartBox">
                <canvas id="incomeChart"></canvas>
            </div>
            <div class="chartBox">
                <canvas id="dcfChart"></canvas>
            </div>
        </div>
    `;
}

// Helper function to parse formatted numbers
function parseNumber(input) {
    if (!input) return 0;
    return parseFloat(input.replace(/,/g, '')) || 0;
}

// Helper function to format numbers with commas and two decimal places
function formatNumber(num) {
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Calculate Valuation Based on Selected Method and Inputs
function calculateValuation() {
    const method = document.getElementById('valuationMethod').value;

    // Common Inputs
    const ownerSalary = parseNumber(document.getElementById('ownerSalary').value);
    const averageSalary = parseNumber(document.getElementById('averageSalary').value);
    const employeeBenefits = parseNumber(document.getElementById('employeeBenefits').value);
    const staffNumber = parseInt(document.getElementById('staffNumber').value) || 0;
    const expenses = parseNumber(document.getElementById('expenses').value);
    const debt = parseNumber(document.getElementById('debt').value);
    const scalability = parseInt(document.getElementById('scalability').value) || 0;
    const growthRate = parseNumber(document.getElementById('growthRate').value);
    const yearsOperating = parseInt(document.getElementById('yearsOperating').value) || 0;
    const aiReplaceable = document.getElementById('aiReplaceable').value;
    const aiReplaceCount = parseInt(document.getElementById('aiReplaceCount').value) || 0;

    const industry = document.getElementById('industry').value || "Other";
    if (industry === "") {
        alert("Please select an industry.");
        return;
    }

    // Future Revenue Forecast Inputs
    const projectedRevenue = parseNumber(document.getElementById('projectedRevenue').value);
    const expectedGrowthRate = parseNumber(document.getElementById('expectedGrowthRate').value);

    // DCF Inputs
    let dcfCashFlows = [];
    let discountRate = 0;
    let terminalGrowthRate = 0;
    if (method === 'dcf') {
        for (let i = 1; i <=5; i++) {
            const cashFlow = parseNumber(document.getElementById(`cashFlow${i}`).value);
            dcfCashFlows.push(cashFlow);
        }
        discountRate = parseNumber(document.getElementById('discountRate').value) / 100;
        terminalGrowthRate = parseNumber(document.getElementById('terminalGrowthRate').value) / 100;
    }

    let assets = 0;
    if (method === 'earnings') {
        assets = parseNumber(document.getElementById('assets').value);
        if (assets === 0) {
            alert("Please enter a valid assets value.");
            return;
        }
    }

    // Get industry multiplier
    const multiplier = industryMultipliers[industry] || 1.0;

    // Staff Value Calculation
    let staffMultiplier = staffValueMultiplier[industry] || 1.0;
    let staffValue = staffNumber * averageSalary * staffMultiplier;

    // AI Savings Calculation
    let aiSavings = 0;
    if (aiReplaceable === 'yes') {
        const aiFactor = aiReplaceability[industry] || 0;
        aiSavings = aiReplaceCount * averageSalary * aiFactor;
    }

    // Growth Adjustment
    const growthAdjustment = (growthRate / 100) * (projectedRevenue || 0);

    // Longevity Adjustment
    let longevityMultiplier = 1;
    if (yearsOperating <= 2) {
        longevityMultiplier = 0.8; // Startup phase
    } else if (yearsOperating <= 5) {
        longevityMultiplier = 1.0; // Established
    } else {
        longevityMultiplier = 1.2; // Mature and stable
    }

    // IP Valuation
    let ipValue = 0;
    let ipAdjustedValue = 0;
    const hasIP = document.getElementById('hasIP').value;
    if (hasIP === 'yes') {
        ipValue = parseNumber(document.getElementById('ipValue').value);
        const ipUnique = document.getElementById('ipUnique').value;

        if (ipUnique === "") {
            alert("Please specify if the IP is completely unique or a variation.");
            return;
        }

        if (ipUnique === 'unique') {
            ipAdjustedValue = ipValue; // Full value added
        } else if (ipUnique === 'variation') {
            ipAdjustedValue = ipValue * 0.5; // 50% of value added
        }
    }

    // Employee Benefits and Equity Compensation
    const totalEmployeeCosts = employeeBenefits;

    // Calculate Valuation Per Method
    let valuation = 0;
    let dcfValuation = 0;

    // Calculate net income
    const netIncome = projectedRevenue - expenses - debt - ownerSalary - (averageSalary * staffNumber) - totalEmployeeCosts;

    // Calculate gross profit (Assuming projectedRevenue - expenses - staff salaries - employee benefits)
    const grossProfit = projectedRevenue - expenses - (averageSalary * staffNumber) - totalEmployeeCosts;

    let discretionaryEarnings = 0;
    let adjustedEBITDA = 0;

    if (method === 'multiplier') {
        valuation = netIncome * multiplier * (scalability / 10) * longevityMultiplier;
        valuation += aiSavings;

        discretionaryEarnings = netIncome - aiSavings;
        adjustedEBITDA = netIncome;
    }
    else if (method === 'income') {
        valuation = netIncome * (scalability / 10);
        valuation += staffValue;
        valuation += growthAdjustment;
        valuation += aiSavings;
        valuation *= longevityMultiplier;

        discretionaryEarnings = netIncome - aiSavings;
        adjustedEBITDA = netIncome + staffValue;
    }
    else if (method === 'earnings') {
        const netEarnings = netIncome;
        valuation = netEarnings * (scalability / 10);
        valuation += (assets - debt);
        valuation += staffValue;
        valuation += growthAdjustment;
        valuation += aiSavings;
        valuation *= longevityMultiplier;

        discretionaryEarnings = netEarnings - aiSavings;
        adjustedEBITDA = netEarnings + staffValue;
    }
    else if (method === 'dcf') {
        // DCF Calculation
        let presentValue = 0;
        for (let i = 0; i < dcfCashFlows.length; i++) {
            presentValue += dcfCashFlows[i] / Math.pow(1 + discountRate, i + 1);
        }
        // Terminal Value
        const terminalValue = (dcfCashFlows[dcfCashFlows.length -1] * (1 + terminalGrowthRate)) / (discountRate - terminalGrowthRate);
        const terminalValuePV = terminalValue / Math.pow(1 + discountRate, dcfCashFlows.length);
        dcfValuation = presentValue + terminalValuePV;

        valuation = dcfValuation;
    }

    // Add IP Adjusted Value
    valuation += ipAdjustedValue;

    // Calculate Industry Average Valuation
    const industryData = industryAverages[industry] || industryAverages["Other"];
    const industryNetIncome = industryData.income - industryData.expenses - industryData.debt;
    const industryAverageValuation = (industryNetIncome) * multiplier * (scalability / 10); // Simplified average

    // Calculate Valuation Ranges
    const valuationRange3Year = valuation * 1.1; // Example: 10% higher for growth
    const valuationRangeWeighted = valuation * 0.9; // Example: 10% lower for conservative estimate
    const valuationRangeTrailing12 = valuation * 1.0; // Current valuation

    // Display Result with Detailed Metrics
    const resultDiv = document.getElementById('valuationResult');
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `
        <h3>Business Valuation Result</h3>
        <table>
            <tr>
                <th>Metric</th>
                <th>Value ($)</th>
            </tr>
            <tr>
                <td>Gross Profit</td>
                <td>${formatNumber(grossProfit)}</td>
            </tr>
            <tr>
                <td>Net Income before Tax</td>
                <td>${formatNumber(netIncome)}</td>
            </tr>
            <tr>
                <td>Discretionary Earnings</td>
                <td>${formatNumber(discretionaryEarnings)}</td>
            </tr>
            <tr>
                <td>Adjusted EBITDA</td>
                <td>${formatNumber(adjustedEBITDA)}</td>
            </tr>
            <tr>
                <td>Industry Average Valuation</td>
                <td>${formatNumber(industryAverageValuation)}</td>
            </tr>
            ${method === 'dcf' ? `<tr><td>DCF Valuation</td><td>${formatNumber(dcfValuation)}</td></tr>` : ''}
            <tr>
                <td>Estimated Business Valuation</td>
                <td><strong>${formatNumber(valuation)}</strong></td>
            </tr>
        </table>
        
        <h3>Valuation Ranges</h3>
        <table>
            <tr>
                <th>Scenario</th>
                <th>Valuation ($)</th>
            </tr>
            <tr>
                <td>3 Year Average</td>
                <td>${formatNumber(valuationRange3Year)}</td>
            </tr>
            <tr>
                <td>Weighted Average</td>
                <td>${formatNumber(valuationRangeWeighted)}</td>
            </tr>
            <tr>
                <td>Trailing 12 Months</td>
                <td>${formatNumber(valuationRangeTrailing12)}</td>
            </tr>
        </table>
    `;

    // Show the charts section
    const chartsSection = document.getElementById('chartsSection');
    chartsSection.classList.remove('hidden');

    // Prepare Data for Charts
    const userStaff = staffNumber;
    const industryStaff = industryData.staff || 10;

    const userIncome = projectedRevenue;
    const industryIncome = industryData.income;

    // Render the Comparison Charts
    renderValuationChart(valuation, industry, industryAverageValuation, method, dcfValuation);
    renderStaffChart(userStaff, industry, industryStaff);
    renderIncomeChart(userIncome, industry, industryIncome);
    if (method === 'dcf') {
        renderDCFChart(dcfValuation, industry, industryAverageValuation);
    }
}

// Chart rendering functions
function renderValuationChart(userValuation, industry, industryAverageValuation, method, dcfValuation) {
    const ctx = document.getElementById('valuationChart').getContext('2d');
    // Destroy previous chart if exists
    if (window.valuationChartInstance) {
        window.valuationChartInstance.destroy();
    }
    window.valuationChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Your Business', `${industry} Industry Average`],
            datasets: [{
                label: 'Business Valuation ($)',
                data: [userValuation, industryAverageValuation],
                backgroundColor: ['#4CAF50', '#2196F3']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Business Valuation Comparison'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

function renderStaffChart(userStaff, industry, industryStaff) {
    const ctx = document.getElementById('staffChart').getContext('2d');
    // Destroy previous chart if exists
    if (window.staffChartInstance) {
        window.staffChartInstance.destroy();
    }
    window.staffChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Your Staff', `${industry} Industry Staff`],
            datasets: [{
                label: 'Number of Staff',
                data: [userStaff, industryStaff],
                backgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Staff Comparison'
                }
            }
        }
    });
}

function renderIncomeChart(userIncome, industry, industryIncome) {
    const ctx = document.getElementById('incomeChart').getContext('2d');
    // Destroy previous chart if exists
    if (window.incomeChartInstance) {
        window.incomeChartInstance.destroy();
    }
    window.incomeChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Your Business', `${industry} Industry Average`],
            datasets: [{
                label: 'Projected Revenue ($)',
                data: [userIncome, industryIncome],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Revenue Comparison'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

function renderDCFChart(dcfValuation, industry, industryAverageValuation) {
    const ctx = document.getElementById('dcfChart').getContext('2d');
    // Destroy previous chart if exists
    if (window.dcfChartInstance) {
        window.dcfChartInstance.destroy();
    }
    window.dcfChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Your DCF Valuation', `${industry} Industry Average Valuation`],
            datasets: [{
                label: 'DCF Valuation ($)',
                data: [dcfValuation, industryAverageValuation],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'DCF Valuation Comparison'
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// Export Results as PDF (Optional)
function exportResults() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Business Valuation Report", 14, 22);

    doc.setFontSize(12);
    const resultContent = document.getElementById('valuationResult').innerText.split('\n');
    let y = 30;
    resultContent.forEach(line => {
        doc.text(line, 14, y);
        y += 10;
    });

    doc.save("valuation-report.pdf");
}

// Initialize Fields Based on Default Selection
window.onload = function() {
    showMethodFields();
};
