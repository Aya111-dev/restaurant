// Classes POO pour la gestion du restaurant

// Classe principale Restaurant
class Restaurant {
  constructor() {
    this.plats = []
    this.recettes = []
    this.avis = []
    this.reservations = []
    this.utilisateurs = []
    this.loadData()
  }

  loadData() {
    // Simulation de données JSON pour les plats
    this.plats = [
      {
        id: 1,
        nom: "Salade César",
        description: "Salade fraîche avec croûtons et parmesan",
        prix: 12.9,
        image:
          "IMG1.jpg",
        recette:
          "<h3>Salade César</h3><p><strong>Ingrédients:</strong><br>- Laitue romaine<br>- Croûtons<br>- Parmesan<br>- Anchois<br>- Sauce César</p><p><strong>Préparation:</strong><br>1. Laver et couper la salade<br>2. Préparer la sauce César<br>3. Mélanger tous les ingrédients<br>4. Servir frais</p>",
        categorie: "entrees",
      },
      {
        id: 2,
        nom: "Coq au Vin",
        description: "Plat traditionnel français au vin rouge",
        prix: 25.9,
        image:
          "img2.jpg",
        recette:
          "<h3>Coq au Vin</h3><p><strong>Ingrédients:</strong><br>- 1 coq découpé<br>- 75cl de vin rouge<br>- 200g de lardons<br>- 250g de champignons<br>- Oignons, ail, bouquet garni</p><p><strong>Préparation:</strong><br>1. Faire mariner le coq dans le vin<br>2. Faire revenir les lardons<br>3. Cuire le coq avec les légumes<br>4. Mijoter 1h30</p>",
        categorie: "plats",
      },
      {
        id: 3,
        nom: "Tarte Tatin",
        description: "Tarte aux pommes caramélisées",
        prix: 8.5,
        image:
          "img3.webp",
        recette:
          "<h3>Tarte Tatin</h3><p><strong>Ingrédients:</strong><br>- Pâte brisée<br>- 6 pommes<br>- 100g de sucre<br>- 50g de beurre</p><p><strong>Préparation:</strong><br>1. Caraméliser le sucre<br>2. Disposer les pommes<br>3. Recouvrir de pâte<br>4. Cuire 25min à 200°C</p>",
        categorie: "desserts",
      },
      {
        id: 4,
        nom: "Bouillabaisse",
        description: "Soupe de poisson provençale",
        prix: 32.5,
        image:
          "img4.jpg",
        recette:
          "<h3>Bouillabaisse</h3><p><strong>Ingrédients:</strong><br>- Poissons de roche variés<br>- Safran<br>- Fenouil<br>- Tomates<br>- Ail, oignon</p><p><strong>Préparation:</strong><br>1. Préparer le fumet<br>2. Cuire les légumes<br>3. Ajouter les poissons<br>4. Servir avec rouille</p>",
        categorie: "plats",
      },
      {
        id: 5,
        nom: "Foie Gras",
        description: "Foie gras mi-cuit aux figues",
        prix: 28.0,
        image:
          "imm.jpg",
        recette:
          "<h3>Foie Gras aux Figues</h3><p><strong>Ingrédients:</strong><br>- Foie gras cru<br>- Figues fraîches<br>- Porto<br>- Sel, poivre</p><p><strong>Préparation:</strong><br>1. Déveiner le foie gras<br>2. Assaisonner et cuire<br>3. Préparer le confit de figues<br>4. Dresser et servir</p>",
        categorie: "entrees",
      },
      {
        id: 6,
        nom: "Crème Brûlée",
        description: "Dessert crémeux au caramel",
        prix: 7.9,
        image:
          "img6.jpg",
        recette:
          "<h3>Crème Brûlée</h3><p><strong>Ingrédients:</strong><br>- 500ml de crème<br>- 6 jaunes d'œufs<br>- 100g de sucre<br>- Vanille</p><p><strong>Préparation:</strong><br>1. Chauffer la crème vanillée<br>2. Mélanger jaunes et sucre<br>3. Cuire au bain-marie<br>4. Caraméliser au chalumeau</p>",
        categorie: "desserts",
      },
    ]

    // Simulation de données JSON pour les avis
    this.avis = [
      {
        id: 1,
        nom: "Marie Dubois",
        note: 5,
        commentaire:
          "Excellente expérience ! Les plats sont délicieux et le service impeccable. Je recommande vivement le coq au vin.",
        date: "15 Décembre 2024",
      },
      {
        id: 2,
        nom: "Pierre Martin",
        note: 4,
        commentaire:
          "Très bon restaurant avec une ambiance chaleureuse. Les prix sont un peu élevés mais la qualité est au rendez-vous.",
        date: "12 Décembre 2024",
      },
      {
        id: 3,
        nom: "Sophie Laurent",
        note: 5,
        commentaire:
          "Un vrai régal ! La bouillabaisse était exceptionnelle. L'équipe est très professionnelle et accueillante.",
        date: "10 Décembre 2024",
      },
      {
        id: 4,
        nom: "Jean Dupont",
        note: 3,
        commentaire:
          "Correct sans plus. Le service était un peu lent mais les plats étaient bons. L'ambiance est agréable.",
        date: "8 Décembre 2024",
      },
      {
        id: 5,
        nom: "Isabelle Moreau",
        note: 5,
        commentaire: "Parfait pour un dîner romantique ! La tarte tatin était divine. Nous reviendrons certainement.",
        date: "5 Décembre 2024",
      },
      {
        id: 6,
        nom: "Thomas Bernard",
        note: 4,
        commentaire:
          "Belle découverte ! Les saveurs sont authentiques et les portions généreuses. Petit bémol sur l'attente.",
        date: "3 Décembre 2024",
      },
    ]

    // Simulation de données JSON pour les utilisateurs
    this.utilisateurs = [
      { email: "client@test.com", password: "123456", type: "client" },
      { email: "admin@restaurant.com", password: "admin123", type: "admin" },
    ]
  }

  // Méthodes pour les plats
  getPlatsByCategory(category) {
    if (category === "all" || category === "tous") {
      return this.plats
    }
    return this.plats.filter((plat) => plat.categorie === category)
  }

  getPlatById(id) {
    return this.plats.find((plat) => plat.id === Number.parseInt(id))
  }

  // Méthodes pour les avis
  getAvis() {
    return this.avis
  }

  addAvis(avisData) {
    const newAvis = {
      id: this.avis.length + 1,
      date: new Date().toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      ...avisData,
    }
    this.avis.unshift(newAvis)
    return newAvis
  }

  // Méthodes pour l'authentification
  authenticate(email, password, type) {
    return this.utilisateurs.find((u) => u.email === email && u.password === password && u.type === type)
  }
}

// Classe Plat pour la POO
class Plat {
  constructor(id, nom, description, prix, image, recette, categorie) {
    this.id = id
    this.nom = nom
    this.description = description
    this.prix = prix
    this.image = image
    this.recette = recette
    this.categorie = categorie
  }

  toHTML() {
    return `
            <div class="plat-card" data-category="${this.categorie}">
                <img src="${this.image}" alt="${this.nom}" class="plat-image">
                <div class="plat-content">
                    <h3 class="plat-title">${this.nom}</h3>
                    <p class="plat-description">${this.description}</p>
                    <div class="plat-price">${this.prix}€</div>
                    <div class="plat-actions">
                        <button class="btn btn-primary" onclick="showRecipe(${this.id})">Voir Recette</button>
                        <button class="btn btn-secondary" onclick="addToCart(${this.id})">Commander</button>
                    </div>
                </div>
            </div>
        `
  }
}

// Classe MenuManager pour gérer les plats
class MenuManager {
  constructor() {
    this.plats = []
    this.currentFilter = "tous"
    this.loadPlats()
  }

  loadPlats() {
    const restaurant = new Restaurant()
    const platsData = restaurant.plats

    this.plats = platsData.map(
      (data) => new Plat(data.id, data.nom, data.description, data.prix, data.image, data.recette, data.categorie),
    )

    this.displayPlats()
  }

  displayPlats() {
    const container = $("#platsGrid")
    if (!container.length) return

    container.empty()

    const filteredPlats =
      this.currentFilter === "tous" ? this.plats : this.plats.filter((plat) => plat.categorie === this.currentFilter)

    filteredPlats.forEach((plat) => {
      container.append(plat.toHTML())
    })

    // Animation d'apparition
    $(".plat-card").hide().fadeIn(600)
  }

  filterPlats(category) {
    this.currentFilter = category
    this.displayPlats()
  }

  getPlatById(id) {
    return this.plats.find((plat) => plat.id === Number.parseInt(id))
  }
}

// Classe Review pour la POO
class Review {
  constructor(id, name, rating, text, date) {
    this.id = id
    this.name = name
    this.rating = rating
    this.text = text
    this.date = date
  }

  getInitials() {
    return this.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  getStarsHTML() {
    let starsHTML = ""
    for (let i = 1; i <= 5; i++) {
      starsHTML += `<span class="star ${i <= this.rating ? "" : "empty"}">★</span>`
    }
    return starsHTML
  }

  toHTML() {
    return `
            <div class="review-card" data-rating="${this.rating}">
                <div class="review-header">
                    <div class="reviewer-info">
                        <div class="reviewer-avatar">${this.getInitials()}</div>
                        <div class="reviewer-details">
                            <h4>${this.name}</h4>
                            <div class="review-date">${this.date}</div>
                        </div>
                    </div>
                    <div class="stars">${this.getStarsHTML()}</div>
                </div>
                <div class="review-text">${this.text}</div>
            </div>
        `
  }
}

// Classe ReviewManager pour gérer les avis
class ReviewManager {
  constructor() {
    this.reviews = []
    this.currentFilter = "all"
    this.selectedRating = 0
    this.loadReviews()
    this.initializeEvents()
  }

  loadReviews() {
    const restaurant = new Restaurant()
    const reviewsData = restaurant.avis

    this.reviews = reviewsData.map((data) => new Review(data.id, data.nom, data.note, data.commentaire, data.date))

    this.displayReviews()
    this.updateStats()
  }

  displayReviews() {
    const container = $("#reviewsList")
    if (!container.length) return

    container.empty()

    const filteredReviews =
      this.currentFilter === "all" ? this.reviews : this.reviews.filter((review) => review.rating == this.currentFilter)

    filteredReviews.forEach((review) => {
      container.append(review.toHTML())
    })

    // Animation d'apparition
    $(".review-card").hide().fadeIn(600)
  }

  updateStats() {
    const statsSection = $("#statsSection")
    if (!statsSection.length) return

    const totalReviews = this.reviews.length
    const averageRating = (this.reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews).toFixed(1)
    const fiveStarReviews = this.reviews.filter((r) => r.rating === 5).length
    const satisfactionRate = Math.round((fiveStarReviews / totalReviews) * 100)

    const statsHTML = `
            <div class="stat-card">
                <div class="stat-number">${totalReviews}</div>
                <div class="stat-label">Avis Total</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${averageRating}</div>
                <div class="stat-label">Note Moyenne</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${satisfactionRate}%</div>
                <div class="stat-label">Satisfaction</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${fiveStarReviews}</div>
                <div class="stat-label">5 Étoiles</div>
            </div>
        `

    statsSection.html(statsHTML)
  }

  filterReviews(rating) {
    this.currentFilter = rating
    this.displayReviews()
  }

  addReview(name, rating, text) {
    const restaurant = new Restaurant()
    const newReview = restaurant.addAvis({
      nom: name,
      note: rating,
      commentaire: text,
    })

    const review = new Review(newReview.id, newReview.nom, newReview.note, newReview.commentaire, newReview.date)

    this.reviews.unshift(review)
    this.displayReviews()
    this.updateStats()
  }

  initializeEvents() {
    // Gestion des filtres
    $(".filter-btn").click((e) => {
      $(".filter-btn").removeClass("active")
      $(e.target).addClass("active")

      const rating = $(e.target).data("rating")
      this.filterReviews(rating)
    })

    // Gestion de la notation
    $(".rating-star").click((e) => {
      const rating = $(e.target).data("rating")
      this.selectedRating = rating

      $(".rating-star").removeClass("active")
      for (let i = 1; i <= rating; i++) {
        $(`.rating-star[data-rating="${i}"]`).addClass("active")
      }
    })

    // Gestion du formulaire d'avis
    $("#reviewForm").submit((e) => {
      e.preventDefault()
      this.handleReviewSubmission()
    })
  }

  handleReviewSubmission() {
    const name = $("#reviewerName").val().trim()
    const text = $("#reviewText").val().trim()

    if (!name || !text || this.selectedRating === 0) {
      alert("Veuillez remplir tous les champs et donner une note.")
      return
    }

    this.addReview(name, this.selectedRating, text)

    // Réinitialiser le formulaire
    $("#reviewForm")[0].reset()
    $(".rating-star").removeClass("active")
    this.selectedRating = 0

    alert("Merci pour votre avis !")
  }
}

// Classe User pour la gestion POO
class User {
  constructor(email, password, type = "client") {
    this.email = email
    this.password = password
    this.type = type
    this.isLoggedIn = false
  }

  login() {
    // Simulation de l'authentification
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const restaurant = new Restaurant()
        const user = restaurant.authenticate(this.email, this.password, this.type)

        if (user) {
          this.isLoggedIn = true
          resolve(user)
        } else {
          reject("Email ou mot de passe incorrect")
        }
      }, 1000)
    })
  }
}

// Classe LoginManager pour gérer la connexion
class LoginManager {
  constructor() {
    this.currentUserType = "client"
    this.initializeEvents()
  }

  initializeEvents() {
    // Gestion du changement de type d'utilisateur
    $(".user-type-btn").click((e) => {
      $(".user-type-btn").removeClass("active")
      $(e.target).addClass("active")
      this.currentUserType = $(e.target).data("type")
    })

    // Gestion du formulaire de connexion
    $("#loginForm").submit((e) => {
      e.preventDefault()
      this.handleLogin()
    })

    // Validation en temps réel
    $("#email").on("input", () => this.validateEmail())
    $("#password").on("input", () => this.validatePassword())
  }

  validateEmail() {
    const email = $("#email").val()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      $("#email").addClass("error")
      $("#emailError").show()
      return false
    } else {
      $("#email").removeClass("error")
      $("#emailError").hide()
      return true
    }
  }

  validatePassword() {
    const password = $("#password").val()

    if (password.length < 6) {
      $("#password").addClass("error")
      $("#passwordError").text("Le mot de passe doit contenir au moins 6 caractères").show()
      return false
    } else {
      $("#password").removeClass("error")
      $("#passwordError").hide()
      return true
    }
  }

  async handleLogin() {
    if (!this.validateEmail() || !this.validatePassword()) {
      return
    }

    const email = $("#email").val()
    const password = $("#password").val()

    $("#submitBtn").prop("disabled", true).text("Connexion...")

    try {
      const user = new User(email, password, this.currentUserType)
      const result = await user.login()

      // Sauvegarder la session
      localStorage.setItem(
        "userSession",
        JSON.stringify({
          email: result.email,
          type: result.type,
          loginTime: new Date().toISOString(),
        }),
      )

      $("#successMessage").show()

      // Redirection selon le type d'utilisateur
      setTimeout(() => {
        if (result.type === "admin") {
          window.location.href = "admin-dashboard.html"
        } else {
          window.location.href = "index.html"
        }
      }, 2000)
    } catch (error) {
      alert(error)
      $("#submitBtn").prop("disabled", false).text("Se connecter")
    }
  }
}

// Fonctions globales
function toggleMobileMenu() {
  const navMenu = $(".nav-menu")
  navMenu.toggle()
}

function showRecipe(platId) {
  const menuManager = window.menuManager
  if (!menuManager) return

  const plat = menuManager.getPlatById(platId)
  if (plat) {
    $("#recipeContent").html(plat.recette)
    $("#recipeModal").fadeIn()
  }
}

function addToCart(platId) {
  const menuManager = window.menuManager
  if (!menuManager) return

  const plat = menuManager.getPlatById(platId)
  if (plat) {
    alert(`${plat.nom} ajouté au panier !`)
    // Ici on pourrait implémenter la logique du panier
  }
}

function showRegisterForm() {
  alert("Fonctionnalité d'inscription à venir !")
}

function showForgotPassword() {
  const email = prompt("Entrez votre email pour réinitialiser le mot de passe:")
  if (email) {
    alert("Un email de réinitialisation a été envoyé à " + email)
  }
}

// Initialisation
$(document).ready(() => {
  // Initialisation de la page d'accueil
  if ($("#menuPreview").length) {
    const restaurant = new Restaurant()
    const plats = restaurant.plats.slice(0, 3)

    const container = $("#menuPreview")
    container.empty()

    plats.forEach((plat) => {
      const platElement = $(`
                <div class="menu-item">
                    <img src="${plat.image}" alt="${plat.nom}">
                    <div class="menu-item-content">
                        <h3>${plat.nom}</h3>
                        <p>${plat.description}</p>
                        <div class="price">${plat.prix}€</div>
                    </div>
                </div>
            `)
      container.append(platElement)
    })
  }

  // Initialisation de la page des plats
  if ($("#platsGrid").length) {
    window.menuManager = new MenuManager()

    // Gestion des filtres
    $(".filter-btn").click(function () {
      $(".filter-btn").removeClass("active")
      $(this).addClass("active")

      const category = $(this).data("category")
      window.menuManager.filterPlats(category)
    })

    // Gestion de la modal
    $(".close").click(() => {
      $("#recipeModal").fadeOut()
    })

    $(window).click((event) => {
      if (event.target.id === "recipeModal") {
        $("#recipeModal").fadeOut()
      }
    })
  }

  // Initialisation de la page des avis
  if ($("#reviewsList").length) {
    const reviewManager = new ReviewManager()
  }

  // Initialisation de la page de connexion
  if ($("#loginForm").length) {
    const loginManager = new LoginManager()

    // Vérifier si l'utilisateur est déjà connecté
   // Vérifier si l'utilisateur est déjà connecté
const userSession = localStorage.getItem("userSession")
if (userSession) {
  const session = JSON.parse(userSession)
  const loginTime = new Date(session.loginTime)
  const now = new Date()
  const hoursDiff = (now - loginTime) / (1000 * 60 * 60)

  // Session valide pendant 24h
  if (hoursDiff < 24) {
    if (session.type === "admin") {
      window.location.href = "admin-dashboard.html"
    } else {
      window.location.href = "index.html"
    }
  }
}


    // Animation des champs au focus
    $("input")
      .focus(function () {
        $(this).parent().addClass("focused")
      })
      .blur(function () {
        $(this).parent().removeClass("focused")
      })
  }

  // Animation au scroll
  $(window).scroll(() => {
    $(".menu-item, .plat-card, .review-card").each(function () {
      const elementTop = $(this).offset().top
      const elementBottom = elementTop + $(this).outerHeight()
      const viewportTop = $(window).scrollTop()
      const viewportBottom = viewportTop + $(window).height()

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass("visible")
      }
    })
  })
})
