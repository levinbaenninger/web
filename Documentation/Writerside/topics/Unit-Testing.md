# Unit Testing


Mit Unit Testing testen wir einzelne Teile unseres Codes auf die Korrektheit. Zum Beispiel können wir einen Unit-Test erstellen um zu verifizieren, dass eine Komponente erhaltene Daten korrekt rendert.

Diese Tests können wir für fast alle Teile einer Angular-Applikation erstellen, bspw. Components, Services, Pipes, Directives, etc.

## Warum Unit Testing?

Es gibt viele Gründe, warum man als Entwickler Unit-Tests schreiben soll:

- **Regressionsprävention**: Gewährleistet, dass neue Änderungen die existierende Funktionalität nicht zerstören
- **Debugging**: Fehler können im Entwicklungsprozess deutlich früher identifiziert werden
- **Code-Design**: Hilft uns Entwicklern, unsere Codebase zu verfeinern
- **Wartung**: Die Wartung wird durch Unit-Tests deutlich leichter

## Angular Testing Tools

In Angular nutzen wir das **Jasmine** Framework, um Unit-Tests in einem sauberen und lesbaren Format zu schreiben und organisieren.

Zusätzlich nutzen wir das **Karma** Framework, um unsere Tests laufen zu lassen und uns Testberichte erstellen zu lassen.

> Beide Frameworks werden bei der Erstellung eines neuen Angular Projektes automatisch hinzugefügt.

## Unit-Tests schreiben

Wir schreiben unsere Unit-Tests in einem sogenannten <path>spec</path>-File, z.B. <path>book-list.component.spec.ts</path>. 

### Aufbau eines Unit-Tests

Ein Unit-Test besteht immer aus einer **Test-Suite**, einer Kollektion an Unit-Tests. Danach definieren wir einen einzelnen **Fall**, den wir testen wollen und darin testen wir, ob eine bestimmte Kondition erfüllt wird.

````Typescript
describe('AppComponent', () => {
  it('should have a defined title', () => {
    const component = new AppComponent();
    expect(component.title).toBeDefined();
  });
});
````

- **`describe()`** - Das ist unsere Test-Suite, hier erstellen wir alle Unit-Tests für unsere `AppComponent`-Klasse
- **`it()`** - Mit `it()` testen wir einen einzelnen Fall. Als Argument geben wir eine Beschreibung mit und eine Callback-Funktion welche überprüft, ob eine bestimmte Kondition erfüllt ist
- **`expect()`** - Hier überprüfen wir, ob die Komponente einen Titel hat.

### Unit-Test ausführen

Um nun unseren Unit-Test auszuführen, nutzen wir das folgende Kommando:

````Console
ng test
````

Dieses Kommando öffnet nun ein Browser-Fenster, in welche wir sehen können, ob unsere Tests erfolgreich waren oder nicht.

### Services testen

Bei Services müssen wir noch ein paar Sachen zusätzlich machen, bevor wir damit anfangen können. Wir müssen nämlich noch unseren Service vor jedem Unit-Test injizieren, das machen wir so:

````Typescript
let service: UserService;

beforeEach(() => {
  TestBed.configureTestingModule({});
  service = TestBed.inject(UserService);
});
````

So haben wir bei jedem Test eine frische Instanz unseres Services. Danach können wir natürlich alles Mögliche testen; hier zwei Beispiele:

````Typescript
it('should be created', () => {
  expect(service).toBeTruthy();
});

it('should get users', () => {
  let users = service.getUsers();
  expect(users.length).toBeGreaterThan(0);
});
````

### Komponenten testen

Auch um Komponenten zu testen brauchen wir einige Anweisungen:

````Typescript
describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent],
      providers: [UserService],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;

    userService = TestBed.inject(UserService);
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(
      of([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Maria Doe' },
      ])
    );
  });
  
  ...
});
````

> Das `providers`-Property und andere Service bezogene Dinge brauchen wir nicht zwingend, nur wenn unsere Komponente einen Service nutzt.

Auch hier können wir jetzt verschiedene Fälle testen, hier sind einige Beispiele:

````Typescript
it('should create', () => {
  expect(component).toBeTruthy();
});

it('should retrieve users from the UserService on init', () => {
  fixture.detectChanges(); // For starting lifecycle hook
  expect(userServiceSpy).toHaveBeenCalled();
});

it('should retrieve users from the UserService when the refresh button is clicked', () => {
  fixture.detectChanges();

  userServiceSpy.calls.reset();

  const button = fixture.debugElement.query(By.css('button'))
  button.triggerEventHandler('click', null);

  expect(userServiceSpy).toHaveBeenCalled();
});
````

## Weitere Informationen

Das ist natürlich nur ein ganz kleiner Ausschnitt und es gibt hunderte und tausende Funktionen in Jasmine. Mehr zu Testing in der [**offiziellen Angular Dokumentation**](https://angular.dev/guide/testing).