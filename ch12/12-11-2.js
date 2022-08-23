class CatalogItem {
  constructor(id, title, tags) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  hasTag(arg) {
    return this._tags.includes(arg);
  }
}

// class Scroll extends CatalogItem {
//   constructor(id, title, tags, dataLastCleaned) {
//     super(id, title, tags);
//     this._lastCleaned = dataLastCleaned;
//   }

//   needsCleaning(targetDate) {
//     const threshold = this.hasTag('revered') ? 700 : 1500;

//     return this.daysSinceLastCleaning(targetDate) > threshold;
//   }

//   daysSinceLastCleaning(targetDate) {
//     return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
//   }
// }

class Scroll {
  constructor(id, dataLastCleaned, catelogItem) {
    this._id = id;
    this._lastCleaned = dataLastCleaned;
  }

  get id() {
    return this.id;
  }

  get title() {
    return this._catalogItem.title;
  }

  hasTag(aString) {
    return this._catalogItem.tags.hasTag(aString);
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag("revered") ? 700 : 1500;

    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}

const scrolls = aDocument.map(
  (record) =>
    new Scroll(
      record.id,
      LocalDate.parse(record.lastCleaned),
      record.catalogData.id,
      catalog
    )
);
