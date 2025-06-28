

import { useState, useRef, useEffect } from "react"
import {
  BarChart3,
  Settings,
  MessageSquare,
  Paperclip,
  ArrowUpDown,
  Edit,
  Users,
  Home,
  Moon,
  Star,
  Bell,
  ChevronDown,
  Share,
  Menu,
  X,
} from "lucide-react"

const Dash = () => {
  // Navbar state
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false)
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const projectDropdownRef = useRef(null)
  const userDropdownRef = useRef(null)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (cardIndex) => {
    setOpenDropdown(openDropdown === cardIndex ? null : cardIndex)
  }

  // Team members for navbar
  const teamMembers = [
    { id: 1, name: "John Doe", avatar: "/placeholder.svg?height=32&width=32&text=JD", color: "bg-orange-500" },
    { id: 2, name: "Jane Smith", avatar: "/placeholder.svg?height=32&width=32&text=JS", color: "bg-green-500" },
    { id: 3, name: "Mike Johnson", avatar: "/placeholder.svg?height=32&width=32&text=MJ", color: "bg-red-500" },
  ]

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (projectDropdownRef.current && !projectDropdownRef.current.contains(event.target)) {
        setIsProjectDropdownOpen(false)
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const cards = [
    {
      title: "Active User",
      count: "46",
      iconColor: "text-green-400",
      iconBg: "bg-green-400/10",
    },
    {
      title: "Total User",
      count: "278",
      iconColor: "text-orange-400",
      iconBg: "bg-orange-400/10",
    },
    {
      title: "New User",
      count: "12",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-400/10",
    },
    {
      title: "Admin User",
      count: "4",
      iconColor: "text-purple-400",
      iconBg: "bg-purple-400/10",
    },
  ]

  const [dateDropdownOpen, setDateDropdownOpen] = useState(false)
  const [selectedDateRange, setSelectedDateRange] = useState("21 Jun 25 / 27 Jun 25")
  const [selectedLineData, setSelectedLineData] = useState(null)
  const [selectedBarData, setSelectedBarData] = useState(null)
  const [selectedBarType, setSelectedBarType] = useState(null)

  const dateOptions = [
    "21 Jun 25 / 27 Jun 25",
    "01 Jun 25 / 30 Jun 25",
    "01 May 25 / 31 May 25",
    "01 Apr 25 / 30 Apr 25",
    "01 Jan 25 / 31 Dec 25",
    "01 Jan 24 / 31 Dec 24",
  ]

  const lineData = {
    store: [
      { x: 10, y: 90 },
      { x: 25, y: 85 },
      { x: 40, y: 75 },
      { x: 55, y: 80 },
      { x: 70, y: 70 },
      { x: 85, y: 65 },
      { x: 100, y: 55 },
      { x: 115, y: 45 },
      { x: 130, y: 35 },
      { x: 145, y: 25 },
      { x: 160, y: 15 },
      { x: 175, y: 10 },
      { x: 190, y: 20 },
    ],
    online: [
      { x: 10, y: 75 },
      { x: 25, y: 70 },
      { x: 40, y: 72 },
      { x: 55, y: 68 },
      { x: 70, y: 70 },
      { x: 85, y: 65 },
      { x: 100, y: 67 },
      { x: 115, y: 62 },
      { x: 130, y: 65 },
      { x: 145, y: 60 },
      { x: 160, y: 58 },
      { x: 175, y: 55 },
      { x: 190, y: 52 },
    ],
    other: [
      { x: 10, y: 45 },
      { x: 25, y: 50 },
      { x: 40, y: 48 },
      { x: 55, y: 55 },
      { x: 70, y: 52 },
      { x: 85, y: 60 },
      { x: 100, y: 65 },
      { x: 115, y: 70 },
      { x: 130, y: 75 },
      { x: 145, y: 80 },
      { x: 160, y: 85 },
      { x: 175, y: 82 },
      { x: 190, y: 78 },
    ],
  }

  // Sample data for the bar chart
  const chartData = [
    { month: "Feb", support: 40, resolved: 70, ai: 30 },
    { month: "Mar", support: 50, resolved: 75, ai: 35 },
    { month: "Apr", support: 55, resolved: 95, ai: 40 },
    { month: "May", support: 50, resolved: 90, ai: 25 },
    { month: "Jun", support: 60, resolved: 85, ai: 45 },
    { month: "Jul", support: 55, resolved: 110, ai: 50 },
    { month: "Aug", support: 60, resolved: 85, ai: 55 },
    { month: "Sep", support: 55, resolved: 120, ai: 50 },
    { month: "Oct", support: 65, resolved: 90, ai: 40 },
  ]

  const createPath = (data) => {
    if (data.length === 0) return ""
    let path = `M ${data[0].x} ${data[0].y}`
    for (let i = 1; i < data.length; i++) {
      const prevPoint = data[i - 1]
      const currentPoint = data[i]
      const nextPoint = data[i + 1] || currentPoint
      // Create smoother curves with better control points
      const cp1x = prevPoint.x + (currentPoint.x - prevPoint.x) * 0.5
      const cp1y = prevPoint.y
      const cp2x = currentPoint.x - (nextPoint.x - currentPoint.x) * 0.3
      const cp2y = currentPoint.y
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${currentPoint.x} ${currentPoint.y}`
    }
    return path
  }

  const handleLineClick = (lineType, point) => {
    setSelectedLineData({ type: lineType, point })
    console.log(`Clicked on ${lineType} line at point:`, point)
  }

  const handleBarClick = (monthData) => {
    setSelectedBarData(monthData)
    console.log("Clicked on bar data:", monthData)
  }

  const [selectedPerson, setSelectedPerson] = useState(null)

  const people = [
    { name: "Bob", color: "bg-blue-500", id: "bob" },
    { name: "Joe", color: "bg-green-500", id: "joe" },
    { name: "Dan", color: "bg-orange-500", id: "dan" },
  ]

  const phases = ["Design", "Code", "Test", "Validation", "Deployment"]

  const tasks = [
    // Design phase
    { phase: "Design", person: "bob", start: 2, duration: 3, row: 0 },
    { phase: "Design", person: "bob", start: 6, duration: 3, row: 0 },
    { phase: "Design", person: "joe", start: 4, duration: 4, row: 0 },
    { phase: "Design", person: "joe", start: 9, duration: 6, row: 0 },
    // Code phase
    { phase: "Code", person: "bob", start: 2, duration: 4, row: 1 },
    { phase: "Code", person: "bob", start: 7, duration: 2, row: 1 },
    { phase: "Code", person: "joe", start: 5, duration: 4, row: 1 },
    { phase: "Code", person: "dan", start: 12, duration: 6, row: 1 },
    // Test phase
    { phase: "Test", person: "bob", start: 2, duration: 8, row: 2 },
    { phase: "Test", person: "bob", start: 11, duration: 2, row: 2 },
    { phase: "Test", person: "joe", start: 8, duration: 8, row: 2 },
    // Validation phase
    { phase: "Validation", person: "bob", start: 12, duration: 4, row: 3 },
    { phase: "Validation", person: "dan", start: 7, duration: 2, row: 3 },
    { phase: "Validation", person: "dan", start: 10, duration: 2, row: 3 },
    // Deployment phase
    { phase: "Deployment", person: "joe", start: 18, duration: 3, row: 4 },
  ]

  const dates = [
    "25 Feb",
    "27 Feb",
    "Mar '19",
    "03 Mar",
    "05 Mar",
    "07 Mar",
    "09 Mar",
    "11 Mar",
    "13 Mar",
    "15 Mar",
    "17 Mar",
    "19 Mar",
    "21 Mar",
    "23 Mar",
  ]

  const ganttTeamMembers = [
    "/placeholder.svg?height=32&width=32",
    "/placeholder.svg?height=32&width=32",
    "/placeholder.svg?height=32&width=32",
    "/placeholder.svg?height=32&width=32",
  ]

  const getPersonColor = (person) => {
    const personData = people.find((p) => p.id === person)
    return personData?.color || "bg-gray-500"
  }

  const isTaskHighlighted = (person) => {
    return selectedPerson === null || selectedPerson === person
  }

  const getTaskScale = (person) => {
    return selectedPerson === person ? "scale-110" : "scale-100"
  }

  const getTaskOpacity = (person) => {
    if (selectedPerson === null) return "opacity-100"
    return selectedPerson === person ? "opacity-100" : "opacity-40"
  }

  const [selectedCustomers, setSelectedCustomers] = useState(new Set())
  const [selectAll, setSelectAll] = useState(false)

  const customers = [
    {
      id: 1,
      name: "Ann Bolton",
      image: "/placeholder.svg?height=40&width=40&text=AB",
      address: "5240 Moses Common Suite 747, Suite 854, East Maria, South Carolina, 36038, US",
      email: "ledwards@yahoo.com",
      phone: "334.843.4437x5758",
    },
    {
      id: 2,
      name: "Catherine Robertson",
      image: "/placeholder.svg?height=40&width=40&text=CR",
      address: "0 Jackson Run, 888 /, Hernandezbury, Western Australia, 2191, AU",
      email: "francisco94@hotmail.com.au",
      phone: "0447.055.169",
    },
    {
      id: 3,
      name: "Cristobal Menchaca",
      image: "/placeholder.svg?height=40&width=40&text=CM",
      address:
        "Diagonal San Luis Potosí 609 835, 747 Interior 016, San Antonio los bajos, Veracruz de Ignacio de la Llave, 84991-2165, MX",
      email: "cristobalsamaniego@hotmail.com",
      phone: "395.004.7974",
    },
    {
      id: 4,
      name: "David Martinez",
      image: "/placeholder.svg?height=40&width=40&text=DM",
      address: "1234 Oak Street, Apartment 5B, Los Angeles, California, 90210, US",
      email: "david.martinez@gmail.com",
      phone: "555.123.4567",
    },
    {
      id: 5,
      name: "Emma Thompson",
      image: "/placeholder.svg?height=40&width=40&text=ET",
      address: "567 Maple Avenue, Unit 12, Toronto, Ontario, M5V 3A8, CA",
      email: "emma.thompson@outlook.com",
      phone: "416.555.0123",
    },
    {
      id: 6,
      name: "James Wilson",
      image: "/placeholder.svg?height=40&width=40&text=JW",
      address: "890 Pine Road, Floor 3, London, England, SW1A 1AA, UK",
      email: "james.wilson@yahoo.co.uk",
      phone: "+44.20.7946.0958",
    },
    {
      id: 7,
      name: "Maria Garcia",
      image: "/placeholder.svg?height=40&width=40&text=MG",
      address: "321 Cedar Lane, Building A, Madrid, Community of Madrid, 28001, ES",
      email: "maria.garcia@hotmail.es",
      phone: "+34.91.123.4567",
    },
    {
      id: 8,
      name: "Michael Chen",
      image: "/placeholder.svg?height=40&width=40&text=MC",
      address: "654 Birch Street, Suite 200, Sydney, New South Wales, 2000, AU",
      email: "michael.chen@gmail.com.au",
      phone: "02.9876.5432",
    },
    {
      id: 9,
      name: "Sarah Johnson",
      image: "/placeholder.svg?height=40&width=40&text=SJ",
      address: "987 Elm Drive, Apartment 8C, New York, New York, 10001, US",
      email: "sarah.johnson@yahoo.com",
      phone: "212.555.9876",
    },
    {
      id: 10,
      name: "Robert Brown",
      image: "/placeholder.svg?height=40&width=40&text=RB",
      address: "147 Willow Court, Unit 15, Vancouver, British Columbia, V6B 1A1, CA",
      email: "robert.brown@gmail.ca",
      phone: "604.123.7890",
    },
  ]

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCustomers(new Set())
    } else {
      setSelectedCustomers(new Set(customers.map((customer) => customer.id)))
    }
    setSelectAll(!selectAll)
  }

  const handleSelectCustomer = (customerId) => {
    const newSelected = new Set(selectedCustomers)
    if (newSelected.has(customerId)) {
      newSelected.delete(customerId)
    } else {
      newSelected.add(customerId)
    }
    setSelectedCustomers(newSelected)
    setSelectAll(newSelected.size === customers.length)
  }

  return (
    <>
      <div className="bg-black min-h-screen">
        {/* NEW NAVBAR */}
        <nav className="bg-black border-b border-gray-800">
          {/* Top Navigation Bar */}
          <div className="px-4 lg:px-6">
            <div className="flex items-center justify-between h-14">
              {/* Left Side - Breadcrumb */}
              <div className="flex items-center space-x-2 text-gray-300">
                <Home className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                <span className="text-gray-500">/</span>
                <Users className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                <span className="text-white font-medium">Customer</span>
              </div>

              {/* Right Side - Action Icons */}
              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800 relative"
                >
                  {isDarkMode ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                  )}
                </button>
                <button className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                  <Star className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800 relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-400 hover:text-white transition-colors p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="px-4 lg:px-6 border-t border-gray-800">
            <div className="flex items-center justify-between h-14">
              {/* Left Side - Project Dropdown */}
              <div className="relative" ref={projectDropdownRef}>
                <button
                  onClick={() => setIsProjectDropdownOpen(!isProjectDropdownOpen)}
                  className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors py-2 px-3 rounded-lg hover:bg-gray-800"
                >
                  <span className="font-medium">Project</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isProjectDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Project Dropdown Menu */}
                {isProjectDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                        Current Project
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                        New Project
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                        Project Settings
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side - Share Button and Team Avatars */}
              <div className="flex items-center space-x-4">
                {/* Share Button */}
                <button className="hidden sm:flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </button>

                {/* Team Avatars with Dropdown */}
                <div className="relative" ref={userDropdownRef}>
                  <button
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="flex items-center space-x-1 hover:bg-gray-800 rounded-lg p-1 transition-colors"
                  >
                    <div className="flex -space-x-2">
                      {teamMembers.map((member, index) => (
                        <div
                          key={member.id}
                          className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-medium ${member.color}`}
                          style={{ zIndex: teamMembers.length - index }}
                        >
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      ))}
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform ${isUserDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* User Dropdown Menu */}
                  {isUserDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
                      <div className="py-2">
                        <div className="px-4 py-2 text-xs text-gray-400 uppercase tracking-wide">Team Members</div>
                        {teamMembers.map((member) => (
                          <div
                            key={member.id}
                            className="flex items-center px-4 py-2 hover:bg-gray-800 transition-colors"
                          >
                            <div
                              className={`w-6 h-6 rounded-full ${member.color} flex items-center justify-center text-white text-xs font-medium mr-3`}
                            >
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <span className="text-sm text-gray-300">{member.name}</span>
                          </div>
                        ))}
                        <div className="border-t border-gray-700 mt-2 pt-2">
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                          >
                            Invite Members
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                          >
                            Manage Team
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-gray-900 border-t border-gray-800">
              <div className="px-4 py-4 space-y-4">
                {/* Mobile Action Icons */}
                <div className="flex items-center justify-around py-4 border-b border-gray-800">
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
                  >
                    {isDarkMode ? (
                      <>
                        <Moon className="w-5 h-5 mb-1" />
                        <span className="text-xs">Dark Mode</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mb-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                        </svg>
                        <span className="text-xs">Light Mode</span>
                      </>
                    )}
                  </button>
                  <button className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
                    <Star className="w-5 h-5 mb-1" />
                    <span className="text-xs">Favorites</span>
                  </button>
                  <button className="flex flex-col items-center text-gray-400 hover:text-white transition-colors relative">
                    <Bell className="w-5 h-5 mb-1" />
                    <span className="text-xs">Notifications</span>
                    <span className="absolute -top-1 right-2 w-3 h-3 bg-red-500 rounded-full"></span>
                  </button>
                </div>

                {/* Mobile Share Button */}
                <button className="w-full flex items-center justify-center px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                  <Share className="w-4 h-4 mr-2" />
                  Share Project
                </button>

                {/* Mobile Team Members */}
                <div className="space-y-2">
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Team Members</div>
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex items-center py-2">
                      <div
                        className={`w-8 h-8 rounded-full ${member.color} flex items-center justify-center text-white text-xs font-medium mr-3`}
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="text-sm text-gray-300">{member.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <div className="p-6">
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {cards.map((card, index) => (
              <div key={index} className="bg-black border border-gray-800 rounded-lg p-6 relative">
                {/* Three dots menu */}
                <div className="absolute top-4 right-4">
                  <button onClick={() => toggleDropdown(index)} className="text-gray-400 hover:text-gray-300 p-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </button>
                  {/* Dropdown menu */}
                  {openDropdown === index && (
                    <div className="absolute top-8 right-0 w-32 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-10">
                      <div className="py-1">
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                          View Details
                        </button>
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                          Export Data
                        </button>
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                          Settings
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {/* Icon */}
                <div className={`w-12 h-12 ${card.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  <svg className={`w-6 h-6 ${card.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                {/* Title */}
                <h3 className="text-gray-300 text-sm font-medium mb-2">{card.title}</h3>
                {/* Count */}
                <div className="flex items-end justify-between">
                  <span className="text-white text-3xl font-bold">{card.count}</span>
                  {/* User avatars */}
                  <div className="flex items-center -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-black flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">A</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-black flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">B</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-black flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">C</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 max-w-7xl mx-auto">
            {/* Left Section - Total Sales (45%) */}
            <div className="w-full lg:w-[45%] bg-black border border-gray-700 rounded-lg p-4 md:p-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-2 sm:gap-3">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h2 className="text-white text-sm sm:text-base lg:text-lg font-semibold">Total Sales</h2>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setDateDropdownOpen(!dateDropdownOpen)}
                    className="flex items-center space-x-1 sm:space-x-2 bg-gray-800 border border-gray-600 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 lg:py-2 text-gray-300 hover:bg-gray-700 w-full sm:w-auto text-xs sm:text-sm"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="truncate">{selectedDateRange}</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dateDropdownOpen && (
                    <div className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-full sm:w-48 bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-10">
                      {dateOptions.map((date, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedDateRange(date)
                            setDateDropdownOpen(false)
                          }}
                          className="block w-full text-left px-2 sm:px-3 lg:px-4 py-2 text-gray-300 hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg text-xs sm:text-sm"
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* Total Amount */}
              <div className="mb-6 md:mb-8">
                <div className="text-gray-400 text-xs sm:text-sm mb-1">$</div>
                <div className="text-white text-xl sm:text-2xl lg:text-4xl font-bold">49,500</div>
              </div>
              {/* Sales Categories */}
              <div className="space-y-3 md:space-y-4 mb-2 sm:mb-3 lg:mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300 text-xs sm:text-sm">Store Sales</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <span className="text-white font-medium text-xs sm:text-sm lg:text-base">$23,264.00</span>
                    <div className="flex items-center space-x-1 text-green-400">
                      <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17l9.2-9.2M17 17V7H7"
                        />
                      </svg>
                      <span className="text-xs">7.6</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 text-xs sm:text-sm">Online Sales</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <span className="text-white font-medium text-xs sm:text-sm lg:text-base">$23,264.00</span>
                    <div className="flex items-center space-x-1 text-green-400">
                      <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17l9.2-9.2M17 17V7H7"
                        />
                      </svg>
                      <span className="text-xs">7.6</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300 text-xs sm:text-sm">Other Sales</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <span className="text-white font-medium text-xs sm:text-sm lg:text-base">$23,264.00</span>
                    <div className="flex items-center space-x-1 text-green-400">
                      <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17l9.2-9.2M17 17V7H7"
                        />
                      </svg>
                      <span className="text-xs">7.6</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Line Chart */}
              <div className="h-32 sm:h-40 md:h-52 relative">
                <svg width="100%" height="100%" viewBox="0 0 200 120" className="overflow-visible cursor-pointer">
                  {/* Store Line */}
                  <path
                    d={createPath(lineData.store)}
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hover:stroke-blue-300 transition-colors duration-200 lg:stroke-[3]"
                    onClick={() => handleLineClick("store", lineData.store)}
                  />
                  {/* Online Line */}
                  <path
                    d={createPath(lineData.online)}
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hover:stroke-green-300 transition-colors duration-200 lg:stroke-[3]"
                    onClick={() => handleLineClick("online", lineData.online)}
                  />
                  {/* Other Line */}
                  <path
                    d={createPath(lineData.other)}
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hover:stroke-orange-300 transition-colors duration-200 lg:stroke-[3]"
                    onClick={() => handleLineClick("other", lineData.other)}
                  />
                  {/* Data Points */}
                  {lineData.store.map((point, index) => (
                    <circle
                      key={`store-${index}`}
                      cx={point.x}
                      cy={point.y}
                      r="2"
                      fill="#3B82F6"
                      className="hover:r-3 cursor-pointer opacity-0 hover:opacity-100 transition-all duration-200 lg:r-3 lg:hover:r-4"
                      onClick={() => handleLineClick("store", point)}
                    />
                  ))}
                  {lineData.online.map((point, index) => (
                    <circle
                      key={`online-${index}`}
                      cx={point.x}
                      cy={point.y}
                      r="2"
                      fill="#10B981"
                      className="hover:r-3 cursor-pointer opacity-0 hover:opacity-100 transition-all duration-200 lg:r-3 lg:hover:r-4"
                      onClick={() => handleLineClick("online", point)}
                    />
                  ))}
                  {lineData.other.map((point, index) => (
                    <circle
                      key={`other-${index}`}
                      cx={point.x}
                      cy={point.y}
                      r="2"
                      fill="#F59E0B"
                      className="hover:r-3 cursor-pointer opacity-0 hover:opacity-100 transition-all duration-200 lg:r-3 lg:hover:r-4"
                      onClick={() => handleLineClick("other", point)}
                    />
                  ))}
                </svg>
                {/* Selected Data Display */}
                {selectedLineData && (
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-gray-800 border border-gray-600 rounded-lg p-1 sm:p-2 text-xs text-white max-w-[100px] sm:max-w-[120px] lg:max-w-none">
                    <div className="capitalize text-xs">{selectedLineData.type} Sales</div>
                    <div className="text-xs">
                      Point: ({selectedLineData.point.x}, {selectedLineData.point.y})
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Section - Total Conversations (55%) */}
            <div className="w-full lg:w-[55%] bg-black border border-gray-700 rounded-lg p-4 md:p-6">
              {/* Header */}
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 md:mb-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h2 className="text-white text-sm sm:text-base lg:text-lg font-semibold">Total conversations</h2>
              </div>
              {/* Metrics Cards */}
              <div className="grid grid-cols-3 gap-1 sm:gap-2 lg:gap-4 mb-2 sm:mb-3 lg:mb-4">
                <div>
                  <div className="text-gray-400 text-xs mb-1">Support request</div>
                  <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                    <span className="text-white text-sm sm:text-lg lg:text-xl font-bold">452</span>
                    <div className="flex items-center space-x-1 text-green-400">
                      <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17l9.2-9.2M17 17V7H7"
                        />
                      </svg>
                      <span className="text-xs">18.4</span>
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs">4 last week</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">Resolved request</div>
                  <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                    <span className="text-white text-sm sm:text-lg lg:text-xl font-bold">247</span>
                    <div className="flex items-center space-x-1 text-red-400">
                      <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 7l-9.2 9.2M7 7v10h10"
                        />
                      </svg>
                      <span className="text-xs">12.8</span>
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs">4 last week</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">Ticket resolved by AI</div>
                  <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                    <span className="text-white text-sm sm:text-lg lg:text-xl font-bold">121</span>
                    <div className="flex items-center space-x-1 text-green-400">
                      <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17l9.2-9.2M17 17V7H7"
                        />
                      </svg>
                      <span className="text-xs">9.6</span>
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs">4 last week</div>
                </div>
              </div>
              {/* Bar Chart */}
              <div className="h-48 sm:h-56 md:h-64 relative">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-gray-500 text-xs">
                  <span>120</span>
                  <span>100</span>
                  <span>80</span>
                  <span>60</span>
                  <span>40</span>
                  <span>20</span>
                  <span>0</span>
                </div>
                {/* Y-axis label */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-gray-500 text-xs">
                  Ticket
                </div>
                {/* Chart area */}
                <div className="ml-6 sm:ml-8 lg:ml-12 h-full flex items-end justify-between space-x-0.5 sm:space-x-1 px-1 sm:px-2">
                  {chartData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center space-y-1 sm:space-y-2">
                      <div
                        className="flex items-end space-x-0.5 h-24 sm:h-32 lg:h-48 cursor-pointer"
                        onClick={() => handleBarClick(data)}
                      >
                        {/* Support Request Bar */}
                        <div
                          className={`rounded-t transition-all duration-300 ${
                            selectedBarType === null || selectedBarType === "support"
                              ? "w-1 sm:w-2 lg:w-3 bg-blue-500 hover:bg-blue-400 opacity-100"
                              : "w-0.5 sm:w-1 bg-blue-500/20 opacity-30"
                          }`}
                          style={{
                            height:
                              selectedBarType === "support"
                                ? `${Math.min((data.support / 120) * 110, 100)}%`
                                : `${(data.support / 120) * 100}%`,
                          }}
                        ></div>
                        {/* Resolved Request Bar */}
                        <div
                          className={`rounded-t transition-all duration-300 ${
                            selectedBarType === null || selectedBarType === "resolved"
                              ? "w-1 sm:w-2 lg:w-3 bg-green-500 hover:bg-green-400 opacity-100"
                              : "w-0.5 sm:w-1 bg-green-500/20 opacity-30"
                          }`}
                          style={{
                            height:
                              selectedBarType === "resolved"
                                ? `${Math.min((data.resolved / 120) * 110, 100)}%`
                                : `${(data.resolved / 120) * 100}%`,
                          }}
                        ></div>
                        {/* AI Resolved Bar */}
                        <div
                          className={`rounded-t transition-all duration-300 ${
                            selectedBarType === null || selectedBarType === "ai"
                              ? "w-1 sm:w-2 lg:w-3 bg-orange-500 hover:bg-orange-400 opacity-100"
                              : "w-0.5 sm:w-1 bg-orange-500/20 opacity-30"
                          }`}
                          style={{
                            height:
                              selectedBarType === "ai"
                                ? `${Math.min((data.ai / 120) * 110, 100)}%`
                                : `${(data.ai / 120) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-gray-500 text-xs">{data.month}</span>
                    </div>
                  ))}
                </div>
                {/* Selected Bar Data Display */}
                {selectedBarData && (
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-gray-800 border border-gray-600 rounded-lg p-1 sm:p-2 text-xs text-white max-w-[100px] sm:max-w-[120px] lg:max-w-none">
                    <div className="font-semibold">{selectedBarData.month}</div>
                    <div>Support: {selectedBarData.support}</div>
                    <div>Resolved: {selectedBarData.resolved}</div>
                    <div>AI: {selectedBarData.ai}</div>
                  </div>
                )}
              </div>
              {/* Legend */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 lg:space-x-6 mt-2 sm:mt-4">
                <button
                  onClick={() => setSelectedBarType(selectedBarType === "support" ? null : "support")}
                  className={`flex items-center space-x-1 sm:space-x-2 transition-all duration-200 hover:scale-105 ${
                    selectedBarType === "support" ? "scale-110" : ""
                  }`}
                >
                  <div
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      selectedBarType === null || selectedBarType === "support" ? "bg-blue-500" : "bg-blue-500/30"
                    }`}
                  ></div>
                  <span
                    className={`text-xs transition-all duration-200 ${
                      selectedBarType === null || selectedBarType === "support"
                        ? "text-gray-300 font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    Support request
                  </span>
                </button>
                <button
                  onClick={() => setSelectedBarType(selectedBarType === "resolved" ? null : "resolved")}
                  className={`flex items-center space-x-1 sm:space-x-2 transition-all duration-200 hover:scale-105 ${
                    selectedBarType === "resolved" ? "scale-110" : ""
                  }`}
                >
                  <div
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      selectedBarType === null || selectedBarType === "resolved" ? "bg-green-500" : "bg-green-500/30"
                    }`}
                  ></div>
                  <span
                    className={`text-xs transition-all duration-200 ${
                      selectedBarType === null || selectedBarType === "resolved"
                        ? "text-gray-300 font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    Resolved request
                  </span>
                </button>
                <button
                  onClick={() => setSelectedBarType(selectedBarType === "ai" ? null : "ai")}
                  className={`flex items-center space-x-1 sm:space-x-2 transition-all duration-200 hover:scale-105 ${
                    selectedBarType === "ai" ? "scale-110" : ""
                  }`}
                >
                  <div
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      selectedBarType === null || selectedBarType === "ai" ? "bg-orange-500" : "bg-orange-500/30"
                    }`}
                  ></div>
                  <span
                    className={`text-xs transition-all duration-200 ${
                      selectedBarType === null || selectedBarType === "ai"
                        ? "text-gray-300 font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    Ticket resolved by AI
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-black text-white">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Sidebar - Phase Names */}
          <div className="w-full lg:w-40 bg-black border-b lg:border-b-0 lg:border-r border-gray-700 flex lg:flex-col flex-shrink-0">
            {/* Header space to align with main header */}
            <div className="h-16 border-b lg:border-b border-r lg:border-r-0 border-gray-700 flex items-center px-4 flex-shrink-0">
              <span className="text-sm text-gray-400">Phases</span>
            </div>
            {/* Mobile: Horizontal scroll for phases, Desktop: Vertical */}
            <div className="flex lg:flex-col flex-1 overflow-x-auto lg:overflow-x-visible">
              {/* Legend space - hidden on mobile, shown on desktop */}
              <div className="hidden lg:block h-16 border-b border-gray-700 flex-shrink-0"></div>
              {/* Phase Labels */}
              <div className="flex lg:flex-col lg:flex-1">
                {phases.map((phase, index) => (
                  <div
                    key={phase}
                    className="h-16 lg:h-16 xl:h-20 flex items-center px-4 border-r lg:border-r-0 lg:border-b border-gray-700 flex-shrink-0 min-w-24 lg:min-w-0"
                  >
                    <span className="text-sm text-gray-300 font-medium whitespace-nowrap">{phase}</span>
                  </div>
                ))}
              </div>
              {/* Bottom space - hidden on mobile, shown on desktop */}
              <div className="hidden lg:block h-16 border-t border-gray-700 flex-shrink-0"></div>
            </div>
          </div>

          {/* Main Content Area - Report Section */}
          <div className="w-full lg:w-[65%] flex flex-col min-h-[60vh] lg:min-h-0">
            {/* Header */}
            <div className="h-16 flex items-center justify-between px-4 lg:px-6 border-b border-gray-700 flex-shrink-0">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-blue-400" />
                <h1 className="text-lg lg:text-xl font-semibold">Report</h1>
              </div>
              <Settings className="w-5 h-5 text-gray-400" />
            </div>
            {/* Legend */}
            <div className="h-16 flex items-center gap-2 lg:gap-4 px-4 lg:px-6 border-b border-gray-700 flex-shrink-0 overflow-x-auto">
              {people.map((person) => (
                <button
                  key={person.id}
                  onClick={() => setSelectedPerson(selectedPerson === person.id ? null : person.id)}
                  className={`flex items-center gap-2 px-3 py-1 rounded transition-all duration-200 flex-shrink-0 ${
                    selectedPerson === person.id ? "bg-gray-700 ring-2 ring-blue-400" : "hover:bg-gray-800"
                  }`}
                >
                  <div className={`w-3 h-3 rounded-sm ${person.color}`}></div>
                  <span className="text-sm">{person.name}</span>
                </button>
              ))}
            </div>
            {/* Chart Area */}
            <div className="flex-1 overflow-x-auto">
              <div className="min-w-full">
                {/* Date Headers */}
                <div className="h-10 lg:h-12 border-b border-gray-700 flex">
                  {dates.map((date, index) => (
                    <div
                      key={date}
                      className="flex-1 min-w-12 lg:min-w-16 xl:min-w-20 flex items-center justify-center border-r border-gray-700"
                    >
                      <span className="text-xs text-gray-400">{date}</span>
                    </div>
                  ))}
                </div>
                {/* Task Rows */}
                <div className="relative">
                  {phases.map((phase, phaseIndex) => (
                    <div key={phase} className="h-12 lg:h-16 xl:h-20 border-b border-gray-700 relative">
                      <div className="absolute inset-0 flex">
                        {dates.map((_, dateIndex) => (
                          <div
                            key={dateIndex}
                            className="flex-1 min-w-12 lg:min-w-16 xl:min-w-20 border-r border-gray-700"
                          ></div>
                        ))}
                      </div>
                      {/* Tasks for this phase */}
                      {tasks
                        .filter((task) => task.row === phaseIndex)
                        .map((task, taskIndex) => (
                          <div
                            key={taskIndex}
                            className={`absolute top-1 lg:top-2 xl:top-3 h-8 lg:h-10 xl:h-12 rounded transition-all duration-300 ${getPersonColor(
                              task.person,
                            )} ${getTaskScale(task.person)} ${getTaskOpacity(task.person)} ${
                              isTaskHighlighted(task.person) ? "z-10" : "z-0"
                            }`}
                            style={{
                              left: `${(task.start / dates.length) * 100}%`,
                              width: `${(task.duration / dates.length) * 100}%`,
                            }}
                          >
                            {task.person === "dan" && task.phase === "Test" && task.start === 8 && (
                              <div className="absolute top-1/2 left-1/2 w-0.5 h-4 lg:h-6 xl:h-8 bg-red-500 transform -translate-x-1/2 -translate-y-1/2"></div>
                            )}
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Bottom Timeline */}
            <div className="h-12 lg:h-16 border-t border-gray-700 flex items-center justify-center flex-shrink-0">
              <div className="flex items-center gap-2 lg:gap-4">
                <MessageSquare className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">2</span>
                <Paperclip className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">5</span>
                <div className="ml-4 lg:ml-8 w-24 lg:w-32 h-1 bg-gray-700 rounded-full">
                  <div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-400">42%</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Project Details */}
          <div className="w-full lg:w-[35%] bg-black border-t lg:border-t-0 lg:border-l border-gray-700 p-4 lg:p-6 overflow-y-auto">
            {/* Project Header */}
            <div className="flex items-start gap-3 mb-4 lg:mb-6">
              <div className="w-10 lg:w-12 h-10 lg:h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base lg:text-lg">⚡</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm lg:text-base">Boltify</h3>
                <p className="text-gray-300 text-xs lg:text-sm mt-1 break-words">
                  React Tailwind CSS Admin & Starter Template
                </p>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 lg:gap-4 mb-4 lg:mb-6">
              <div className="text-center">
                <div className="text-lg lg:text-xl xl:text-2xl font-bold">23</div>
                <div className="text-xs text-gray-400">Tasks</div>
              </div>
              <div className="text-center">
                <div className="text-lg lg:text-xl xl:text-2xl font-bold">11</div>
                <div className="text-xs text-gray-400">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-lg lg:text-xl xl:text-2xl font-bold">12</div>
                <div className="text-xs text-gray-400">Completed</div>
              </div>
            </div>
            {/* Project Details */}
            <div className="space-y-3 lg:space-y-4">
              <div>
                <div className="text-xs lg:text-sm text-gray-400 mb-1">Due Date</div>
                <div className="text-sm lg:text-base">19 Jul, 2025</div>
              </div>
              <div>
                <div className="text-xs lg:text-sm text-gray-400 mb-1">Category</div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-3 lg:h-4 bg-blue-400 rounded flex-shrink-0"></div>
                  <span className="text-sm lg:text-base">UI/UX</span>
                </div>
              </div>
              <div>
                <div className="text-xs lg:text-sm text-gray-400 mb-1">Assignee</div>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg?height=24&width=24"
                    alt="John Doe"
                    className="w-5 lg:w-6 h-5 lg:h-6 rounded-full flex-shrink-0"
                  />
                  <span className="text-sm lg:text-base">John Doe</span>
                </div>
              </div>
              <div>
                <div className="text-xs lg:text-sm text-gray-400 mb-2">Team</div>
                <div className="flex -space-x-1 lg:-space-x-2">
                  {ganttTeamMembers.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar || "/placeholder.svg"}
                      alt={`Team member ${index + 1}`}
                      className="w-6 lg:w-8 h-6 lg:h-8 rounded-full border-2 border-gray-800 flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-black text-white p-4 lg:p-6">
        <div className="max-w-full overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-orange-400" />
              <h1 className="text-xl lg:text-2xl font-semibold">Customers</h1>
            </div>
            <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
          </div>
          {/* Table Container */}
          <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-4 w-12">
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="w-4 h-4 rounded border-gray-600 bg-black text-blue-500 focus:ring-blue-500 focus:ring-2"
                      />
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-300">Image</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-300">
                      <div className="flex items-center gap-2">
                        Name
                        <ArrowUpDown className="w-4 h-4 text-blue-400" />
                      </div>
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-300">
                      <div className="flex items-center gap-2">
                        Address
                        <ArrowUpDown className="w-4 h-4 text-blue-400" />
                      </div>
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-300">
                      <div className="flex items-center gap-2">
                        Email
                        <ArrowUpDown className="w-4 h-4 text-blue-400" />
                      </div>
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-300">
                      <div className="flex items-center gap-2">
                        Phone
                        <ArrowUpDown className="w-4 h-4 text-blue-400" />
                      </div>
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr key={customer.id} className="border-b border-gray-800 hover:bg-gray-900 transition-colors">
                      <td className="p-4">
                        <input
                          type="checkbox"
                          checked={selectedCustomers.has(customer.id)}
                          onChange={() => handleSelectCustomer(customer.id)}
                          className="w-4 h-4 rounded border-gray-600 bg-black text-blue-500 focus:ring-blue-500 focus:ring-2"
                        />
                      </td>
                      <td className="p-4">
                        <div className="relative">
                          <img
                            src={customer.image || "/placeholder.svg"}
                            alt={customer.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-700"
                          />
                          {/* Add colored ring based on index for variety */}
                          <div
                            className={`absolute inset-0 rounded-full border-2 ${
                              index === 0
                                ? "border-yellow-400"
                                : index === 1
                                  ? "border-blue-400"
                                  : index === 2
                                    ? "border-green-400"
                                    : "border-gray-600"
                            }`}
                          ></div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-white font-medium">{customer.name}</td>
                      <td className="p-4 text-sm text-gray-300 max-w-xs">
                        <div className="truncate">{customer.address}</div>
                      </td>
                      <td className="p-4 text-sm text-gray-300">{customer.email}</td>
                      <td className="p-4 text-sm text-gray-300">{customer.phone}</td>
                      <td className="p-4">
                        <button className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-800">
                          <Edit className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Cards */}
            <div className="lg:hidden">
              {/* Mobile Header */}
              <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="w-4 h-4 rounded border-gray-600 bg-black text-blue-500 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-sm text-gray-400">Select All</span>
              </div>
              {/* Customer Cards */}
              <div className="divide-y divide-gray-800">
                {customers.map((customer, index) => (
                  <div key={customer.id} className="p-4 hover:bg-gray-900 transition-colors">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={selectedCustomers.has(customer.id)}
                        onChange={() => handleSelectCustomer(customer.id)}
                        className="w-4 h-4 rounded border-gray-600 bg-black text-blue-500 focus:ring-blue-500 focus:ring-2 mt-1"
                      />
                      <div className="relative">
                        <img
                          src={customer.image || "/placeholder.svg"}
                          alt={customer.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-gray-700 flex-shrink-0"
                        />
                        {/* Add colored ring based on index for variety */}
                        <div
                          className={`absolute inset-0 rounded-full border-2 ${
                            index === 0
                              ? "border-yellow-400"
                              : index === 1
                                ? "border-blue-400"
                                : index === 2
                                  ? "border-green-400"
                                  : "border-gray-600"
                          }`}
                        ></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-white font-medium text-sm">{customer.name}</h3>
                          <button className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-800">
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-400">Address:</p>
                          <p className="text-sm text-gray-300 break-words">{customer.address}</p>
                          <p className="text-xs text-gray-400 mt-2">Email:</p>
                          <p className="text-sm text-gray-300 break-all">{customer.email}</p>
                          <p className="text-xs text-gray-400 mt-2">Phone:</p>
                          <p className="text-sm text-gray-300">{customer.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dash
