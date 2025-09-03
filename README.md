# Angular Demo - Projet d'apprentissage complet

Application de démonstration Angular moderne construite avec **Angular 20**, **TypeScript 5.9** et des **composants standalone**. Ce projet illustre les bonnes pratiques Angular à travers plusieurs composants démontrant les concepts fondamentaux du framework.

## 🎯 Objectifs pédagogiques

Ce projet couvre les concepts essentiels d'Angular :

### 📊 Data Binding (Liaison de données)

- **Interpolation** (`{{ }}`) - Affichage de données dynamiques
- **Property Binding** (`[property]`) - Liaison des propriétés d'éléments
- **Event Binding** (`(event)`) - Gestion des événements utilisateur
- **Two-way Binding** (`[(ngModel)]`) - Liaison bidirectionnelle

### 🏗️ Directives structurelles

- **`@if`** - Affichage conditionnel (nouvelle syntaxe Angular 17+)
- **`@for`** - Rendu de listes (nouvelle syntaxe Angular 17+)

### 🎨 Directives d'attributs

- **`[ngStyle]`** - Application dynamique de styles CSS
- **`[ngClass]`** - Application conditionnelle de classes CSS

### 📝 Formulaires

- **Formulaires réactifs** avec `FormsModule`

### 🖱️ Interactions utilisateur

- **Gestion des événements** (click, input, change)
- **Propriétés d'événements** personnalisées
- **Communication entre composants Parent-Enfant** (@Input(), @Output())

## 🚀 Fonctionnalités démontrées

### ✅ Composant To-Do List

- ✨ Ajout de tâches avec validation
- 📋 Affichage dynamique de la liste
- 🎯 Gestion des événements de saisie
- 🔄 Liaison bidirectionnelle des données

### 🎨 Composant de démonstration des directives

- 🎭 Affichage conditionnel avec `@if`
- 📜 Rendu de listes avec `@for`
- 🌈 Styles dynamiques avec `[ngStyle]`
- 🏷️ Classes conditionnelles avec `[ngClass]`

### 📊 Composant de liaison de données

- 💬 Interpolation de texte
- 🔗 Liaison de propriétés
- 📡 Gestion d'événements
- 🔄 Liaison bidirectionnelle

### 🃏 Service Pokemon avec HTTPClient

Démonstration de l'utilisation du **HTTPClient** d'Angular pour consommer une API REST externe. Ce composant récupère une liste de cartes Pokemon depuis l'API officielle Pokemon TCG.

#### 📡 Fonctionnalités

- ✨ **Service injectable** avec `@Injectable({ providedIn: 'root' })`
- 🌐 **Requêtes HTTP GET** vers une API externe
- 🔄 **Observables RxJS** pour la gestion asynchrone
- 📊 **Transformation de données** avec l'opérateur `map`
- 🎯 **Typage TypeScript** avec des interfaces personnalisées
- 🖼️ **Affichage dynamique** des cartes Pokemon avec images

#### 🏗️ Architecture technique

## 📋 Prérequis

- **Node.js** 18+ (LTS recommandé)
- **npm** ou **yarn**
- **Angular CLI** (optionnel mais recommandé)

```shell script
npm install -g @angular/cli@20
```

## 🔧 Installation et démarrage

### 1. Cloner le projet

```shell script
git clone <url-du-repository>
cd angular-concepts
```

### 2. Installer les dépendances

```shell script
npm install
```

### 3. Lancer le serveur de développement

```shell script
npm start
# ou
ng serve
```

### 4. Accéder à l'application

Ouvrez votre navigateur : **http://localhost:4200**

## 📜 Scripts disponibles

| Commande            | Description                         |
|---------------------|-------------------------------------|
| `npm start`         | Démarre le serveur de développement |
| `npm run build`     | Build de production                 |
| `npm run build:dev` | Build de développement              |
| `npm run watch`     | Build en mode watch                 |
| `npm test`          | Exécute les tests unitaires         |
| `npm run lint`      | Analyse statique du code            |

## 🏗️ Architecture du projet

```
src/
├── app/
│   ├── app.component.ts           # Composant racine
│   ├── app.component.html         # Template principal
│   ├── app.component.css          # Styles globaux
│   │
│   ├── components/
│   │   ├── to-do/                 # Composant To-Do List
│   │   │   ├── to-do.component.ts
│   │   │   ├── to-do.component.html
│   │   │   └── to-do.component.css
│   │   │
│   │   ├── data-binding/          # Démonstration Data Binding
│   │   │   ├── data-binding.component.ts
│   │   │   ├── data-binding.component.html
│   │   │   └── data-binding.component.css
│   │   │
│   │   ├── directives-demo/       # Démonstration Directives
│   │   │   ├── directives-demo.component.ts
│   │   │   ├── directives-demo.component.html
│   │   │   └── directives-demo.component.css
│   │   │
│   │   └── forms-demo/            # Démonstration Formulaires
│   │       ├── forms-demo.component.ts
│   │       ├── forms-demo.component.html
│   │       └── forms-demo.component.css
│   │
│   ├── models/                    # Interfaces et types
│   │   └── task.interface.ts
│   │
│   └── services/                  # Services (si nécessaire)
│       └── task.service.ts
│
├── styles.css                     # Styles globaux
├── main.ts                        # Point d'entrée de l'application
└── index.html                     # Template HTML principal
```

## 💡 Concepts techniques mis en œuvre

### 🔄 Data Binding

#### Interpolation

```typescript
// Composant
userName = 'John Doe';
```

```html
<!-- Template -->
<h1>Bonjour {{ userName }} !</h1>
```

#### Property Binding

```typescript
// Composant
isDisabled = false;
imageUrl = 'assets/logo.png';
```

```html
<!-- Template -->
<button [disabled]="isDisabled">Cliquer</button>
<img [src]="imageUrl" alt="Logo">
```

#### Event Binding

```typescript
// Composant
onClick()
{
  console.log('Bouton cliqué !');
}

onInputChange(event
:
Event
)
{
  const target = event.target as HTMLInputElement;
  console.log(target.value);
}
```

```html
<!-- Template -->
<button (click)="onClick()">Cliquer</button>
<input (input)="onInputChange($event)">
```

### 🏗️ Directives structurelles (nouvelle syntaxe)

#### @if (Angular 17+)

```html
@if (showMessage) {
<p>Message visible !</p>
} @else {
<p>Message caché</p>
}
```

#### @for (Angular 17+)

```html
@for (item of items; track item.id) {
<div>{{ item.name }}</div>
} @empty {
<div>Aucun élément trouvé</div>
}
```

### 🎨 Directives d'attributs

#### ngStyle

```typescript
// Composant
dynamicStyles = {
  'color': 'blue',
  'font-size': '16px',
  'background-color': this.isActive ? 'yellow' : 'transparent'
};
```

```html
<!-- Template -->
<div [ngStyle]="dynamicStyles">Texte stylé</div>
```

#### ngClass

```typescript
// Composant
cssClasses = {
  'active': this.isActive,
  'disabled': this.isDisabled,
  'highlight': this.shouldHighlight
};
```

```html
<!-- Template -->
<div [ngClass]="cssClasses">Élément avec classes dynamiques</div>
```

## 🧪 Tests

### Lancer les tests

```shell script
npm test
```

### Configuration des tests

- **Framework** : Jasmine + Karma
- **Couverture** : Istanbul
- **Rapports** : Généré dans `/coverage`

## 📦 Build et déploiement

### Build de production

```shell script
npm run build
```

### Analyse du bundle

```shell script
npm run build -- --source-map
npx webpack-bundle-analyzer dist/angular-demo/
```

### Déploiement

1. Build de production → `dist/`
2. Servir les fichiers statiques
3. Configurer le serveur pour le routing Angular (fallback vers `index.html`)

## 🎓 Concepts avancés abordés

### Composants Standalone

```typescript

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './demo.component.html'
})
export class DemoComponent {
}
```

### Gestion d'état locale

```typescript
export class ToDoComponent {
  tasks: Task[] = [];
  newTask = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        id: Date.now(),
        title: this.newTask,
        completed: false
      });
      this.newTask = '';
    }
  }
}
```

### Validation de formulaires

```typescript
validateInput(value
:
string
):
boolean
{
  return value.trim().length > 0;
}
```

## 🛠️ Outils de développement

### Formatage du code

- **Prettier** configuré pour Angular
- **ESLint** pour l'analyse statique

### Extensions VS Code recommandées

- Angular Language Service
- Angular Snippets
- Prettier
- ESLint

## 📚 Ressources d'apprentissage

- [Documentation officielle Angular](https://angular.io/docs)
- [Guide des bonnes pratiques](https://angular.io/guide/styleguide)
- [Angular DevTools](https://angular.io/guide/devtools)

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-demo`)
3. Commit des changements (`git commit -m 'Ajout démo XYZ'`)
4. Push vers la branche (`git push origin feature/nouvelle-demo`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier `LICENSE` pour plus de détails.

---

**🎯 Projet pédagogique - Maîtrisez Angular étape par étape !**

*Développé avec ❤️ et Angular 20*
