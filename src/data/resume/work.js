/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Computational Neurobiology Laboratory (Sejnowski Lab), Salk Institute for Biological Studies',
    position: 'Scientific Programmer I',
    url: 'https://www.salk.edu/',
    startDate: '2022-11-01',
    endDate: '2023-12-01',
    summary: '',
    highlights: [
      'Developed a Python API for C++ programs used in image registration/image processing',
      'Built and maintained AlignEM-SWiFT, a cross-platform Qt/GUI application for EM image registration (or "alignment"). The app is currently deployed and in daily use by scientists on the high performance computer (HPC) Lonestar6 at the Texas Advanced Computing Center (TACC). It has been cited in published and ongoing research. It runs on macOS, Debian, Ubuntu, and CentOS.',
      'Designed deployment and distribution strategies for compiled software application to run on HPC systems including systems at TACC',
      'Debugged and improved data pipeline for 3D reconstruction and cell modeling (MCell)',
    ],
  },
  {
    name: 'Computational Neurobiology Laboratory (Sejnowski Lab), Salk Institute for Biological Studies',
    position: 'Jr. Systems Administrator',
    url: 'https://www.salk.edu/',
    startDate: '2019-10-01',
    endDate: '2022-11-01',
    summary: '',
    highlights: [
      'Maintained essential IT infrastructure used in computational neurobiology research, including operating systems, security tools, applications, servers, email systems, laptops, desktops, software, and hardware',
      'Installed, configured, maintained, upgraded workstations and experiment rigs running Linux or Windows',
      'Wrote bash scripts, created custom software images, and security tested Debian-based computing machines',
      'Configured virtual machines for security testing, system monitoring, and performance testing',
      'Assembled compute workstations to meet the hardware and software needs of Salk personnel',
    ],
  },
  {
    name: 'Sanford Burnham Prebys Medical Discovery Institute (Xu/Huang Lab)',
    position: 'Research Assistant I/Lab Manager',
    url: 'https://arthena.com',
    startDate: '2018-07-01',
    endDate: '2019-10-01',
    summary: '',
    highlights: [
      'Developed a novel phagocytosis quantification assay used in published research (Journal of Experimental Medicine)',
      'Wrote Python scripts and Excel VBA macros for analysis of genetic and other bioinformatics data',
      'Analyzed batches of Next-Gen Sequencing (NGS) data, such as RNA-seq data to investigate differential gene expression',
      'Managerial responsibilities included purchasing, training coworkers in the use of scientific instruments, acquisition and installation of laboratory equipment, primary contact for all oversight compliance, i.e. AAALAC and OSHA',
    ],
  },
  {
    name: 'Buonomano Lab @ University of California, Los Angeles',
    position: 'Undergraduate Researcher',
    url: 'http://www.buonomanolab.com/',
    startDate: '2012-07-01',
    endDate: '2015-07-01',
    summary: '',
    highlights: [
      'Developed a graphical user interface (GUI) in MATLAB for conducting a novel experiment according to protocol',
      'Used machine learning classification algorithms (Support Vector Machines) to investigate the temporal information in neural population responses. Scripted publication-quality figures such as rasters, PSTHs, and plots of neural activity.',
      'Oversaw a multi-year in vivo electrophysiology experiment investigating how the brain encodes spatial and temporal sensory events on timescales of 10-100s of milliseconds.',
    ],
  },
  {
    name: 'UCLA Brain Research Institute, Microscopic Techniques & Electron Microscopy Core Facility',
    position: 'Laboratory Assistant (part-time)',
    url: 'https://bri.ucla.edu/',
    startDate: '2014-06-01',
    endDate: '2014-09-01',
    highlights: [
      'Developed film and facilitated access to UCLA’s common equipment JEOL 100CX transmission electron microscope.',
      'Performed histology including cryosectioning, mounting, and staining of brain and other tissues',
    ],
  },
];

export default work;
